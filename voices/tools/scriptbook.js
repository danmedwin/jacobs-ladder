// Builds readable review copies of the scripts and the rung list from the page's own data.
// Run: node voices/tools/scriptbook.js
global.window = global;
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'data');
for (const f of fs.readdirSync(DATA).sort()) if (f.endsWith('.js')) require(path.join(DATA, f));
const V = window.VOICES, OUT = path.join(__dirname, '..', 'review');

const md = h => String(h)
  .replace(/<i>(.*?)<\/i>/g, '*$1*').replace(/<b>(.*?)<\/b>/g, '**$1**')
  .replace(/<span[^>]*lang="he"[^>]*>(.*?)<\/span>/g, '$1 ').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
const inText = c => c.ref || c.name, whose = c => inText(c) + (c.plural ? '’' : '’s');
const atStart = t => t.charAt(0).toUpperCase() + t.slice(1), verb = (c, v) => c.plural ? v : v + 's';
const refs = src => src ? ' <sub>' + [].concat(src).map(r => (V.sources[r] && V.sources[r].label) || r).join('; ') + '</sub>' : '';
// A teacher's line (a string, or { say, src }), and a mark for an imagined line
const teach = t => '**Teacher says:** ' + md(typeof t === 'string' ? t : t.say) + refs(typeof t === 'string' ? null : t.src);
const imagined = x => x.imagined ? '*(imagined)* ' : '';
const reply = (x, who) => typeof x === 'string' ? md(x)
  : x.gallery ? '*[Pictures: ' + x.gallery.map(s => V.styles[s] || s).join(', ') + '.]* ' + md(x.caption || '')
  : [x.say ? imagined(x) + md(x.say) + refs(x.src) : '', x.teacher ? teach(x.teacher) : ''].filter(Boolean).join(' ');

function level(id, lv) {
  const c = V.characters[id], L = V.levels[lv], beats = V.scripts[id][lv].beats, out = [];
  out.push(`## ${L.label}`, '', `*${L.how}*`, '');
  let n = 0;
  for (const b of beats) {
    n++;
    if (b.say) {
      out.push(`${n}. ${imagined(b)}${md(b.say)}${refs(b.src)}`);
      if (b.teacher) out.push(`   - ${teach(b.teacher)}`);
    }
    else if (b.picture) out.push(`${n}. *[Animation: ${V.styles[b.picture.style]}, from the Jacob’s Dream gallery.]*`);
    else if (b.motion) out.push(`${n}. **Everybody moves: ${b.motion.title}** ${b.motion.text}`);
    else if (b.count) {
      out.push(`${n}. **Count it: ${b.count.title}** ${b.count.text || ''}`);
      b.count.rows.forEach(r => out.push(`   - ${r.he} (${r.en}): ${r.letters.map(l => l[0] + ' ' + l[1]).join(' + ')} = ?`));
    }
    else if (b.ask && b.choices) {
      out.push(`${n}. **${atStart(inText(c))} ${verb(c, 'ask')}:** ${md(b.ask)}`);
      if (b.teacher) out.push(`   - ${teach(b.teacher)}`);
      b.choices.forEach(ch => out.push(`   - Button **“${ch.label}”** → ${ch.reply.map(r => reply(r)).join(' / ')}`));
      if (b.tip) out.push(`   - *Teacher: ${b.tip}*`);
    } else if (b.ask) {
      out.push(`${n}. **${atStart(inText(c))} ${verb(c, 'ask')} the group to discuss:** ${md(b.ask)}`);
      if (b.teacher) out.push(`   - ${teach(b.teacher)}`);
      if (b.tip) out.push(`   - *Teacher: ${b.tip}*`);
      out.push(`   - Then ${inText(c)} ${verb(c, 'answer')}: ${b.reveal.map(r => reply(r)).join(' / ')}`);
    } else if (b.questions) {
      out.push(`${n}. **${atStart(inText(c))}:** ${md(b.prompt)}${b.typing ? ' *(Typing is on: typed questions are matched to these.)*' : ''}`);
      b.questions.forEach((q, i) => out.push(`   ${i + 1}. *${q.q}* → ${q.a.map(r => reply(r)).join(' / ')}`));
    } else if (b.rung) {
      const r = c.rung[lv];
      out.push(`${n}. **The rung:** “${r.line}”${r.he ? ' ' + r.he : ''}`, `   - **${L.extraLabel}:** ${r.extra}`);
    } else if (b.next) {
      out.push(`${n}. ${md(b.next.say)} *(Suggests: ${b.next.ids.map(i => V.characters[i].name).join(', ')}.)*`);
      if (b.next.teacher) out.push(`   - ${teach(b.next.teacher)}`);
    } else if (b.teacher) {
      out.push(`${n}. ${teach(b.teacher)}`);
    }
  }
  return out.join('\n');
}

// One review file per character that has at least one script
for (const id of Object.keys(V.scripts)) {
  const c = V.characters[id];
  const lvs = ['k2', 'g34', 'g57', 'parents'].filter(lv => V.scripts[id][lv]);
  const book = [
    `# ${atStart(whose(c))} visit: the script`,
    '',
    `A readable copy of what the tool says, for review. It is generated from \`voices/data/${id}.js\`, so mark changes here and they will be carried into the data.`,
    '',
    'Small gray references are the source cards a teacher can open during the visit. Numbered lines are the steps the teacher moves through with Next.',
    '',
    'A character speaks only from their own life and what they could know. Anything else is marked **Teacher says:** and is read by the teacher in their own voice; it appears on screen under the character’s line. *(imagined)* marks a line that fits the story and its world but that no text says; the screen labels it “Imagined.”',
    '',
    ...lvs.map(lv => level(id, lv) + '\n')
  ].join('\n');
  fs.writeFileSync(path.join(OUT, id + '.md'), book);
}

const rows = ['# Every rung', '',
  'Each visit ends with a rung: one line to carry back to the family, plus a motion (K–2), a secret (3–4), a question for parents (5–7), or a question for your child (parents). Any rung marked *(draft)* belongs to a visit that is not written yet.', ''];
for (const lv of ['k2', 'g34', 'g57', 'parents']) {
  const L = V.levels[lv];
  rows.push(`## ${L.label}`, '', `| Character | Rung | ${L.extraLabel} |`, '|---|---|---|');
  for (const id of V.cast[lv]) {
    const ch = V.characters[id], r = ch.rung[lv];
    rows.push(`| ${ch.name}${V.scripts[id] && V.scripts[id][lv] ? '' : ' *(draft)*'} | ${r.line}${r.he ? '<br>' + r.he : ''} | ${r.extra} |`);
  }
  rows.push('');
}
fs.writeFileSync(path.join(OUT, 'rungs.md'), rows.join('\n'));
console.log('wrote', fs.readdirSync(OUT).join(', '));
