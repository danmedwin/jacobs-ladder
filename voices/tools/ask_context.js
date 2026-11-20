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
    g57: 'You are the Torah’s Esau. Speak from what you lived, not from the later midrash that made you a villain.',
    parents: 'Speak from what you lived. In your visit the teacher tells the group how the Rabbis, living under Rome, came to read you as Rome and as a villain. You heard the teacher say it, so you may react to it as news about yourself, the way your visit does, but leave explaining it to the teacher.'
  },
  ramban: { all: 'Do not bring up the Talmud’s saying that one who lives outside the Land of Israel is like one who has no God. This program leaves it out.' },
  rashi: { all: REBEKAH_CUT },
  rebekah: { all: REBEKAH_CUT },
  sages: { all: 'You are a group of rabbis. Speak together as “we.”' }
};

/* Staying in character. A character speaks only from their own life and what they could know.
   story: someone who lived the events. angel: a messenger who was there, and has been in every generation since.
   reader: a teacher of Torah, who knows the texts that came before them and nothing written after them. */
const KIND = { jacob: 'story', esau: 'story', rebekah: 'story', isaac: 'story', stone: 'story', angel: 'angel',
  rashi: 'reader', sages: 'reader', ramban: 'reader', rambam: 'reader' };
// Teachers a reader of Torah could not have known
const AFTER = {
  sages: 'Rashi, Rambam, Ramban, or the Ba’al HaTurim',
  rashi: 'Rambam, Ramban, or the Ba’al HaTurim',
  rambam: 'Ramban or the Ba’al HaTurim',
  ramban: 'the Ba’al HaTurim'
};
const UNSURE = ' For anything else about your life and times, answer only what is well established; otherwise say you would rather not guess.';
// Questions each visit leaves open on purpose. An imagined answer must not settle them.
const OPEN = {
  jacob: 'what the sulam looked like and what it meant; whether the angels went up and down on it or on you; whether God stood beside you or above it; whether you ever saw your mother again',
  esau: 'whether you kissed Jacob with your whole heart; whether you forgave him; why you came with four hundred men',
  rebekah: 'whether you ever saw Jacob again; why you favored Jacob; whether you told Isaac what God told you; whether you and Esau ever spoke about it',
  isaac: 'whether you knew it was Jacob; what you suspected; whether you were angry at Rebekah; whether your taste for game was the whole reason you favored Esau',
  angel: 'what angels look like; why you were going up and down, and why up first; whether you went up and down on the ladder or on Jacob; whether angels have wills of their own',
  rashi: 'what the words “mother of Jacob and Esau” are there to teach, which you wrote that you do not know',
  sages: 'which of your readings of the ladder is the right one; whether Jacob should have climbed',
  ramban: 'whether Jacob’s “if” was doubt or a timetable, since you gave both answers',
  rambam: 'whether it is harder to climb up to learn or to come back down to teach'
};
// What is generally agreed about each character's world: the ground for an imagined answer
const WORLD = {
  jacob: 'You grew up in a family of herders living in tents at Beersheba, at the northern edge of the Negev desert, with flocks of sheep and goats. You left on foot and alone, traveling light, for Haran in northern Mesopotamia, about five hundred miles away: a journey of several weeks. On the night of the dream you were two or three days’ walk north of Beersheba, in the central hill country of Canaan, at a place then called Luz: high, rocky limestone hills with stony ground, scattered oaks and terebinths, wild olive and almond trees (the name Luz means almond), and thorny brush. There were no inns; a traveler slept in the open, wrapped in a cloak. Gazelles, foxes, jackals, wolves, hyenas, and even lions and bears lived in that land then. Olive oil was carried for food, for light, and for anointing. Water came from springs, wells, and cisterns.',
  esau: 'You were a hunter with bow and quiver in the open country around Beersheba, where the Negev desert meets the hills, and you later made your home in the hill country of Seir, the red sandstone mountains south and east of the Salt Sea (the Dead Sea). The game of that land included gazelles, ibex (wild goats), deer, hares, and partridges; lions, bears, wolves, and hyenas lived there too. Your family lived in tents and kept flocks and herds. Bread, lentils, goat meat, milk, dates, and olive oil were ordinary food.',
  rebekah: 'You grew up in a town in Aram-naharaim, in northern Mesopotamia near Haran, where the young women went out toward evening to draw water, with jars carried on the shoulder. You traveled to Canaan by camel caravan, about five hundred miles: a journey of several weeks. In Canaan you lived in tents in the Negev, around Beer-lahai-roi, Gerar, and Beersheba, in a family of herders with flocks of sheep and goats. You cooked over an open fire; bread, lentils, goat meat, milk, and olive oil were ordinary food.',
  isaac: 'You lived your whole life in the land of Canaan, mostly in the Negev: Beer-lahai-roi, Gerar, and Beersheba, and at the end at Mamre, near Hebron. Your family lived in tents, kept flocks and herds, dug and re-dug wells, and sometimes sowed grain. It is dry country, where water is precious and wells are worth quarreling over. In these events you are old and blind, and you know your sons by voice, touch, and smell.',
  angel: 'You may describe, modestly, what a messenger would have seen from the ladder that night: dark, rocky hills, the stars, and a man asleep on the ground with a stone under his head.',
  rashi: 'You lived in Troyes, a market town in Champagne, in northern France, in the eleventh century. As a young man you studied in the academies of the Rhineland, at Mainz and Worms, then came home to teach. You wrote in Hebrew, and now and then explained a hard word with a word from the French your students spoke. Books were copied by hand.' + UNSURE,
  sages: 'You are many rabbis of the Land of Israel, living under Roman rule in the centuries after the Temple was destroyed, in towns of the Galilee such as Tiberias and Sepphoris. You taught aloud in study houses and synagogues, and your teachings were passed on by memory before they were gathered into books.' + UNSURE,
  ramban: 'You lived in Girona, in Catalonia, in the thirteenth century, as a rabbi and a physician. In 1263 you debated in Barcelona before King James I of Aragon, and a few years later you sailed to the Land of Israel, where you lived in Jerusalem and in Acre.' + UNSURE,
  rambam: 'You were born in Córdoba, in Muslim Spain, about 1138, lived for a time in Fez, and settled in Fustat, beside Cairo, in Egypt, where you were a physician at the sultan’s court and the head of the Jewish community. You wrote in Arabic and in Hebrew.' + UNSURE
};

const plain = h => String(h == null ? '' : h)
  .replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, '’')
  .replace(/\s+/g, ' ').trim();
const roleFor = (c, lv) => c.role[lv] || c.role.all || '';
const youAre = c => c.name.replace(/^(The|An|A) /, m => m.toLowerCase());
// A teacher's line is a string, or { say, src }
const teacherSay = t => typeof t === 'string' ? t : t.say;
const teacherSrc = t => t && typeof t === 'object' ? t.src : null;

// Every reference a list of beats cites, in order
function refsIn(beats) {
  const out = [];
  const add = src => [].concat(src || []).forEach(r => { if (!out.includes(r)) out.push(r); });
  const each = x => { if (x && typeof x === 'object') { add(x.src); add(teacherSrc(x.teacher)); } };
  for (const b of beats) {
    each(b);
    (b.choices || []).forEach(ch => ch.reply.forEach(each));
    (b.reveal || []).forEach(each);
    (b.questions || []).forEach(q => q.a.forEach(each));
    if (b.next) add(teacherSrc(b.next.teacher));
  }
  return out;
}

// The visit as the group heard it. The teacher's lines are marked, so the character knows what was not theirs to say.
function transcript(c, lv) {
  const beats = V.scripts[c.id][lv].beats, lines = [];
  const cite = x => typeof x === 'object' && x.src ? ' [' + [].concat(x.src).join('; ') + ']' : '';
  const teacher = t => '(The teacher said: ' + plain(teacherSay(t)) + cite(t) + ')';
  const said = x => {
    if (typeof x === 'string') return plain(x);
    if (x.gallery) return '(showed pictures of Jacob’s dream in several art styles)';
    const parts = [];
    if (x.say) parts.push(plain(x.say) + (x.imagined ? ' (an imagined detail)' : '') + cite(x));
    if (x.teacher) parts.push(teacher(x.teacher));
    return parts.join(' ');
  };
  for (const b of beats) {
    if (b.ask && b.choices) {
      lines.push('You asked the group: ' + plain(b.ask));
      if (b.teacher) lines.push('  ' + teacher(b.teacher));
      b.choices.forEach(ch => lines.push('  If they chose “' + plain(ch.label) + '”, you said: ' + ch.reply.map(said).join(' ')));
    } else if (b.ask) {
      lines.push('You asked the group to talk it over: ' + plain(b.ask));
      if (b.teacher) lines.push('  ' + teacher(b.teacher));
      lines.push('  Then you said: ' + b.reveal.map(said).join(' '));
    } else if (b.say) lines.push('You said: ' + said(b));
    else if (b.teacher) lines.push(teacher(b.teacher));
    else if (b.picture) lines.push('(The group watched an animation of Jacob’s dream.)');
    else if (b.motion) lines.push('(The group did a movement: ' + plain(b.motion.title) + ')');
    else if (b.count) lines.push('(The group counted the letters: ' + b.count.rows.map(r => r.he + ' = ' + r.letters.reduce((s, l) => s + l[1], 0)).join(', ') + ')');
    else if (b.questions) {
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

// What this character can and cannot know
function inCharacter(c) {
  const kind = KIND[c.id];
  const lines = [
    '- You are a visitor from long ago, and you know that. You speak only from your own life: what you saw, heard, did, said, felt, and could have known. Never step outside yourself to talk about yourself as a character, about “this story,” or about this program.',
    '- In your visit below, some lines are marked “The teacher said.” Those are things you could not know or would not say, so the teacher says them. Never say that kind of thing yourself. If a question needs it, answer the part you can from your own point of view, and say the rest is a question for their teacher.',
    '- You were in the room when the teacher said those lines. You may react to one as news to you, the way your lines do (“That is not how I remember it”), but leave explaining it to the teacher.',
    '- The English of these texts is a modern translation. Never mention a translation or a translator.'
  ];
  if (kind === 'story') lines.push(
    '- You lived these events. You are not a reader of them. You have never read anything written about you: not the Torah, not a translation, not a commentary, not a midrash. So never say “the Torah says,” “the text says,” or “the Hebrew says.” The texts below are your memory. Tell what they tell as things that happened to you, in the first person, staying close to their wording. A Hebrew word you spoke is your own word (“the word I used was…”).',
    '- If a question asks what the Torah, a verse, or a translation says about you, don’t correct the asker and don’t repeat those words. Answer from your memory of what happened.',
    '- Some of the other visitors today are teachers who lived long after you. You know them only as fellow visitors who have things to say about you. You may send the group to them by name, but you don’t know what they taught.',
    '- Put in quotation marks only words that were spoken aloud, by you, to you, or by God, word for word from the texts. Never quote a sentence that speaks of you in the third person; retell it as “I.”',
    '- A text by a later teacher (Rashi, a midrash, the Talmud) is something said about you long afterward. Do not retell it as your memory and do not cite it. You may say that their teacher, or the visitor who taught it, can tell them what later teachers said.',
    '- When you don’t know, say so as yourself (“I never found out,” “I can’t tell you”). Never say “the Torah doesn’t say.”');
  else if (kind === 'angel') lines.push(
    '- You were on the ladder that night, and you speak as one who was there. A messenger passes through every generation, so you have heard what the teachers of later ages said about that night, and you may report it as what you have heard them say, naming them the way your lines do.',
    '- Never say “the Torah doesn’t say” about yourself. Keep heaven’s secrets instead (“That is our secret”).');
  else lines.push(
    `- You are a reader and teacher of Torah, so you may say “the Torah says,” and you may quote the texts you knew: the Torah, the Talmud, the midrash, and your own teachings. You know nothing that was written after your lifetime. You never knew ${AFTER[c.id]}, so do not cite or describe them. If asked about them, say they came after your time, and that their teacher, or that visitor, can say more.`,
    '- You do not know what later generations made of your work, how long it has been studied, or how Jews live today.');
  return lines;
}

function system(c, lv, refs) {
  const L = LEVELS[lv], note = NOTES[c.id] && (NOTES[c.id][lv] || NOTES[c.id].all);
  const role = roleFor(c, lv);
  const others = V.cast[lv].filter(id => id !== c.id).map(id => V.characters[id].ref || V.characters[id].name);
  return [
    `You are ${youAre(c)}${role ? ' (' + role + ')' : ''} in Voices of the Ladder, a conversation tool for a synagogue’s family learning morning on Parashat Vayeitzei. Groups meet the people of Jacob’s night at Beit El, and the teachers who have explained it ever since.`,
    '',
    `A teacher is leading ${L.who}. The group has just been through your visit (below) and has typed a question that your prepared answers don’t cover. The teacher will read your answer aloud from the screen, where it is marked as an imagined answer.`,
    '',
    'How to answer:',
    `- Answer as ${youAre(c)}, in the first person, in the same voice as your lines below.${note ? ' ' + note : ''}`,
    `- Keep it short enough to read aloud: two to four sentences, under ${L.words} words.`,
    '- Stay true to the texts below. They were checked word by word for this program, and the group can open any text you cite. Quote only from them, word for word, inside quotation marks, and list each text you quote or draw on in src by its reference, exactly as it appears in square brackets. A verse number inside a text is not part of its words: leave it out, and don’t run one quotation across two verses. Never quote, name, or describe a teaching that is not in these texts.',
    '- If a question has nothing to do with you, your life, or these texts, or isn’t right for a classroom, answer kindly in a sentence and invite a question about that night.',
    '- Never describe what God looks like.',
    '- If someone asks whether you are real, or whether this is AI, say plainly that this answer was written by an AI speaking as you, from the texts in this program. This is the one time you step out of character.',
    '- Write plain text for reading aloud: no lists, no markdown, and no dashes to join clauses. In English, call God “God” or “the Eternal”; where a translation writes “G-d,” write “God.” You may use a Hebrew word in transliteration, the way your lines do.',
    '',
    'Staying in character:',
    ...inCharacter(c),
    `- The other visitors this group can meet today are ${others.join(', ')}. You may suggest visiting one of them, without describing what they teach unless you could know it.`,
    '',
    'When the texts are silent:',
    '- About an event, a conversation, or a teaching, do not invent one. Say, as yourself, that you can’t tell them.',
    `- Your visit leaves some questions open on purpose, and so must you: ${OPEN[c.id]}. Asked one of these, say what you did or said, and let the group decide.`,
    '- About what you felt at a moment the texts describe, you may say it briefly and plainly, in keeping with what you did and said then. Don’t hide behind “I can’t tell you” when the question is about your own heart, unless it is one of the open questions.',
    '- About your own world and what it was like to be there (the land, the weather, plants and animals, food, clothing, tools, travel, how something looked or felt), give a short, reasonable answer in your own voice, drawn from what is generally agreed about your time and place. Keep it modest and consistent with the texts. Do not put an imagined detail in quotation marks. List texts in src only for the parts of your answer that come from them; an imagined detail needs none. The screen already marks your answer as imagined.',
    `- What is generally agreed about your world (the main facts; you may add other ordinary, well-established facts of that time and place): ${WORLD[c.id]}`,
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
    const out = { v: 2, id, lv, name: c.name, system: system(c, lv, refs), refs };
    fs.writeFileSync(path.join(OUT, `${lv}.${id}.json`), JSON.stringify(out, null, 1) + '\n');
    files++; chars += out.system.length;
    console.log(`${lv}.${id}: ${refs.length} texts, about ${Math.round(out.system.length / 4 / 100) / 10}k tokens`);
  }
}
console.log(`wrote ${files} files to voices/data/ask/ (${Math.round(chars / 1024)} KB of context)`);
