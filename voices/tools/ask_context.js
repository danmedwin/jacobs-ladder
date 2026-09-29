// Builds the context Ask anything sends to Claude: one file per 5–7 and parents visit, in voices/data/ask/.
// Each file holds the instructions, the visit as the group heard it, and the texts the character may quote.
// The Worker (voices/ask/) fetches these from the live site, so publishing the site updates Ask anything too.
// Run after changing a script or rebuilding the source cards: node voices/tools/ask_context.js
global.window = global;
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'data');
for (const f of fs.readdirSync(DATA).sort()) if (f.endsWith('.js')) require(path.join(DATA, f));
const V = window.VOICES, OUT = path.join(DATA, 'ask');

const LEVELS = {
  g57: { who: 'students in grades 5–7, about ages 10 to 13', words: 70 },
  parents: { who: 'adults: parents learning together while their children meet the characters in their own groups', words: 100 }
};

// Things a character must not bring up. The program cut these at Rabbi Medwin's request (see tools/verification.md).
const REBEKAH_CUT = 'Do not bring up the midrash that the Torah kept Rebekah’s death quiet so that people would not curse the mother of Esau. This program leaves it out.';
const NOTES = {
  esau: {
    g57: 'You are the Torah’s Esau. Speak from the Torah’s story, not from the later midrash that made you a villain.',
    parents: 'Speak from the Torah’s story. Your visit also explains how the Rabbis, living under Rome, came to read you as Rome; you may talk about that as a later reading, the way your visit does.'
  },
  ramban: { all: 'Do not bring up the Talmud’s saying that one who lives outside the Land of Israel is like one who has no God. This program leaves it out.' },
  rashi: { all: REBEKAH_CUT },
  rebekah: { all: REBEKAH_CUT },
  sages: { all: 'You are a group of rabbis. Speak together as “we.”' }
};

const plain = h => String(h == null ? '' : h)
  .replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, '’')
  .replace(/\s+/g, ' ').trim();
const roleFor = (c, lv) => c.role[lv] || c.role.all || '';
const youAre = c => c.name.replace(/^(The|An|A) /, m => m.toLowerCase());

// Every reference a list of beats cites, in order
function refsIn(beats) {
  const out = [];
  const add = src => [].concat(src || []).forEach(r => { if (!out.includes(r)) out.push(r); });
  const each = x => { if (x && typeof x === 'object') add(x.src); };
  for (const b of beats) {
    add(b.src);
    (b.choices || []).forEach(ch => ch.reply.forEach(each));
    (b.reveal || []).forEach(each);
    (b.questions || []).forEach(q => q.a.forEach(each));
  }
  return out;
}

// The visit as the group heard it
function transcript(c, lv) {
  const beats = V.scripts[c.id][lv].beats, lines = [];
  const cite = x => typeof x === 'object' && x.src ? ' [' + [].concat(x.src).join('; ') + ']' : '';
  const said = x => typeof x === 'string' ? plain(x) : x.gallery ? '(showed pictures of Jacob’s dream in several art styles)' : plain(x.say) + cite(x);
  for (const b of beats) {
    if (b.say) lines.push('You said: ' + said(b));
    else if (b.picture) lines.push('(The group watched an animation of Jacob’s dream.)');
    else if (b.motion) lines.push('(The group did a movement: ' + plain(b.motion.title) + ')');
    else if (b.count) lines.push('(The group counted the letters: ' + b.count.rows.map(r => r.he + ' = ' + r.letters.reduce((s, l) => s + l[1], 0)).join(', ') + ')');
    else if (b.ask && b.choices) {
      lines.push('You asked the group: ' + plain(b.ask));
      b.choices.forEach(ch => lines.push('  If they chose “' + plain(ch.label) + '”, you said: ' + ch.reply.map(said).join(' ')));
    } else if (b.ask) {
      lines.push('You asked the group to talk it over: ' + plain(b.ask));
      lines.push('  Then you said: ' + b.reveal.map(said).join(' '));
    } else if (b.questions) {
      lines.push('Then the group could ask you questions. Your prepared answers:');
      b.questions.forEach(q => lines.push('  Q: ' + plain(q.q) + '\n  A: ' + q.a.map(said).join(' ')));
    } else if (b.rung) {
      const r = c.rung[lv];
      lines.push('The line you gave them to carry home to their family: “' + plain(r.line) + '”');
    }
  }
  return lines.join('\n');
}

// A source card as plain text
function cardText(ref) {
  const s = V.sources[ref];
  if (!s) return null;
  const head = s.label + (s.kind ? ' (' + s.kind + ')' : '');
  let body;
  if (s.verses) body = s.verses.map(v => (v.n && v.n !== ref ? v.n + ': ' : '') + plain(v.en)).join(' ');
  else body = (s.body || []).map(p => (p.h ? p.h + ': ' : '') + plain(p.t)).join(' ');
  return '[' + ref + '] ' + head + '\n' + body;
}

// The Torah verses the whole program cites: the story every character stands in
const torah = [];
for (const id of Object.keys(V.scripts)) for (const lv of Object.keys(V.scripts[id]))
  refsIn(V.scripts[id][lv].beats).forEach(r => { if (/^(Genesis|Exodus|Leviticus|Numbers|Deuteronomy) /.test(r) && !torah.includes(r)) torah.push(r); });

function system(c, lv, refs) {
  const L = LEVELS[lv], note = NOTES[c.id] && (NOTES[c.id][lv] || NOTES[c.id].all);
  const role = roleFor(c, lv);
  return [
    `You are ${youAre(c)}${role ? ' (' + role + ')' : ''} in Voices of the Ladder, a conversation tool for a synagogue’s family learning morning on Parashat Vayeitzei. Groups meet the people of Jacob’s night at Beit El, and the teachers who have explained it ever since.`,
    '',
    `A teacher is leading ${L.who}. The group has just been through your visit (below) and has typed a question that your prepared answers don’t cover. The teacher will read your answer aloud from the screen, where it is marked as an imagined answer.`,
    '',
    'How to answer:',
    `- Answer as ${youAre(c)}, in the first person, in the same voice as your lines below.${note ? ' ' + note : ''}`,
    `- Keep it short enough to read aloud: two to four sentences, under ${L.words} words.`,
    '- Stay true to the texts below. They were checked word by word for this program, and the group can open any text you cite. Quote only from them, word for word, inside quotation marks, and list each text you quote or draw on in src by its reference, exactly as it appears in square brackets. Never quote, name, or describe a teaching that is not in these texts.',
    '- You may tell the plain story of Genesis in your own words. When a question goes beyond what these texts say, say honestly that the texts you have today don’t tell you, and, if it fits, suggest another character in the program who might know.',
    '- If a question has nothing to do with you, the story, or these texts, or isn’t right for a classroom, answer kindly in a sentence and invite a question about the story.',
    '- Never describe what God looks like.',
    '- If someone asks whether you are real, or whether this is AI, say plainly that this answer was written by an AI speaking as you, from the texts in this program.',
    '- Write plain text for reading aloud: no lists, no markdown, and no dashes to join clauses. In English, call God “God” or “the Eternal,” as the Revised JPS does; where a translation writes “G-d,” write “God.” You may use a Hebrew word in transliteration, the way your lines do.',
    '',
    'Your visit, as the group heard it:',
    transcript(c, lv),
    '',
    'Texts you can quote and cite:',
    refs.map(cardText).filter(Boolean).join('\n\n')
  ].join('\n');
}

fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) if (f.endsWith('.json')) fs.unlinkSync(path.join(OUT, f));
let files = 0, chars = 0;
for (const lv of Object.keys(LEVELS)) {
  for (const id of V.cast[lv]) {
    const c = Object.assign({ id }, V.characters[id]);
    if (!V.scripts[id] || !V.scripts[id][lv]) continue;
    // This visit's texts first, then the character's other visits, then the Torah verses the whole program uses
    const refs = [];
    const add = r => { if (V.sources[r] && !refs.includes(r)) refs.push(r); };
    refsIn(V.scripts[id][lv].beats).forEach(add);
    Object.keys(V.scripts[id]).forEach(other => refsIn(V.scripts[id][other].beats).forEach(add));
    torah.forEach(add);
    const out = { v: 1, id, lv, name: c.name, system: system(c, lv, refs), refs };
    fs.writeFileSync(path.join(OUT, `${lv}.${id}.json`), JSON.stringify(out, null, 1) + '\n');
    files++; chars += out.system.length;
    console.log(`${lv}.${id}: ${refs.length} texts, about ${Math.round(out.system.length / 4 / 100) / 10}k tokens`);
  }
}
console.log(`wrote ${files} files to voices/data/ask/ (${Math.round(chars / 1024)} KB of context)`);
