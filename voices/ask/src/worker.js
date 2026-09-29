/* Voices of the Ladder: Ask anything.

   A Cloudflare Worker that answers a typed question in a character's voice, using Claude.
   The page sends { lv, id, q }: the level (g57 or parents), the character, and the question.
   The Worker fetches that visit's context from the live site (voices/data/ask/<lv>.<id>.json,
   built by voices/tools/ask_context.js), asks Claude, and returns { say, src }.

   Setup is in voices/ask/SETUP.md. The Anthropic key lives in this Worker's settings as the
   secret ANTHROPIC_API_KEY; it never reaches the page. To switch Ask anything off without
   deleting anything, add a variable ASK_OFF with the value 1.

   Edit this file, not dist/worker.js, then rebuild: cd voices/ask && npm run build */
import Anthropic from '@anthropic-ai/sdk';

const SITE = 'https://techrabbi.org/jacobs-ladder/voices/';
const ORIGINS = ['https://techrabbi.org', 'https://www.techrabbi.org'];
const MODEL = 'claude-opus-5-5';
const LEVELS = ['g57', 'parents'];
const MAX_QUESTION = 300;

// The shape of every answer: what the character says, and the texts it quoted or drew on
const ANSWER = {
  type: 'object',
  properties: {
    say: { type: 'string', description: 'The answer, in the character’s voice, as plain text.' },
    src: { type: 'array', items: { type: 'string' }, description: 'The reference of each text quoted or drawn on, exactly as given in square brackets.' }
  },
  required: ['say', 'src'],
  additionalProperties: false
};

// A light brake on runaway use from one address. The spending limit on the Anthropic account is the real cap.
const WINDOW_MS = 10 * 60 * 1000, PER_ADDRESS = 60;
const recent = new Map();
function tooMany(address) {
  const now = Date.now();
  const times = (recent.get(address) || []).filter(t => now - t < WINDOW_MS);
  times.push(now);
  if (recent.size > 5000) recent.clear();
  recent.set(address, times);
  return times.length > PER_ADDRESS;
}

// The answer is the text after the last model switch, if the request fell back to another model
function answerText(message) {
  let start = 0;
  message.content.forEach((block, i) => { if (block.type === 'fallback') start = i + 1; });
  return message.content.slice(start).filter(b => b.type === 'text').map(b => b.text).join('');
}

// One question to Claude. Returns { answer } or { status, error } for the page.
async function askClaude(env, system, question) {
  const client = new Anthropic({
    apiKey: env.ANTHROPIC_API_KEY,
    baseURL: env.ANTHROPIC_BASE_URL || undefined,   // only for local testing
    timeout: 40 * 1000,
    maxRetries: 1
  });
  let message;
  try {
    message = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 4000,
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',   // if a safety check declines, Anthropic retries on its recommended model
      output_config: { effort: 'low', format: { type: 'json_schema', schema: ANSWER } },
      system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: question }]
    });
  } catch (err) {
    if (err instanceof Anthropic.AuthenticationError || err instanceof Anthropic.PermissionDeniedError) return { status: 500, error: 'key', detail: err.message };
    if (err instanceof Anthropic.RateLimitError) return { status: 429, error: 'busy' };
    if (err instanceof Anthropic.APIConnectionError) return { status: 504, error: 'timeout' };
    if (err instanceof Anthropic.APIError) return { status: 502, error: 'api', detail: err.status + ' ' + err.message };
    return { status: 502, error: 'unknown' };
  }
  if (message.stop_reason === 'refusal') return { status: 422, error: 'declined' };
  if (message.stop_reason === 'max_tokens') return { status: 502, error: 'long' };
  let answer;
  try { answer = JSON.parse(answerText(message)); } catch { return { status: 502, error: 'format' }; }
  const u = message.usage || {};
  console.log(JSON.stringify({ model: message.model, in: u.input_tokens, cached: u.cache_read_input_tokens, written: u.cache_creation_input_tokens, out: u.output_tokens }));
  return { answer, model: message.model };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const origins = env.ALLOWED_ORIGINS ? env.ALLOWED_ORIGINS.split(',').map(s => s.trim()) : ORIGINS;
    const allowed = origins.includes(origin);
    const headers = { 'Content-Type': 'application/json; charset=utf-8', 'Vary': 'Origin' };
    if (allowed) {
      headers['Access-Control-Allow-Origin'] = origin;
      headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
      headers['Access-Control-Allow-Headers'] = 'Content-Type';
      headers['Access-Control-Max-Age'] = '86400';
    }
    const reply = (status, body) => new Response(JSON.stringify(body), { status, headers });

    if (request.method === 'OPTIONS') return new Response(null, { status: allowed ? 204 : 403, headers });
    const address = request.headers.get('CF-Connecting-IP') || 'unknown';
    // Opening the Worker's address in a browser shows whether the key is in place;
    // adding ?check=1 asks Claude one tiny question, to test the key, the model, and the answer format.
    if (request.method === 'GET') {
      const status = { ok: true, ready: Boolean(env.ANTHROPIC_API_KEY), off: env.ASK_OFF === '1' };
      if (new URL(request.url).searchParams.get('check') !== '1' || !status.ready) return reply(200, status);
      if (tooMany(address)) return reply(429, { error: 'busy' });
      const test = await askClaude(env, 'You are testing a connection. Reply with say set to a greeting of five words or fewer, and src empty.', 'Hello?');
      return reply(test.answer ? 200 : test.status, test.answer ? { ...status, check: 'passed', model: test.model, say: test.answer.say } : { ...status, check: 'failed', error: test.error, detail: test.detail });
    }
    if (request.method !== 'POST') return reply(405, { error: 'method' });
    if (!allowed) return reply(403, { error: 'origin' });
    if (env.ASK_OFF === '1') return reply(503, { error: 'off' });
    if (!env.ANTHROPIC_API_KEY) return reply(500, { error: 'no-key' });
    if (tooMany(address)) return reply(429, { error: 'busy' });

    let body;
    try { body = await request.json(); } catch { return reply(400, { error: 'json' }); }
    const lv = String(body && body.lv || ''), id = String(body && body.id || ''), q = String(body && body.q || '').trim();
    if (!LEVELS.includes(lv) || !/^[a-z]{2,12}$/.test(id) || !q || q.length > MAX_QUESTION) return reply(400, { error: 'input' });

    const res = await fetch(`${env.SITE || SITE}data/ask/${lv}.${id}.json`, { cf: { cacheTtl: 300, cacheEverything: true } });
    if (!res.ok) return reply(404, { error: 'visit' });
    const visit = await res.json();

    const result = await askClaude(env, visit.system, q);
    if (!result.answer) return reply(result.status, { error: result.error });
    const say = String(result.answer.say || '').trim();
    if (!say) return reply(502, { error: 'empty' });
    const src = [...new Set(Array.isArray(result.answer.src) ? result.answer.src : [])].filter(r => visit.refs.includes(r)).slice(0, 6);
    return reply(200, { say, src });
  }
};
