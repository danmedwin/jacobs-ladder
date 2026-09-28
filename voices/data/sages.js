/* The Sages' visit. Beat types are described at the top of jacob.js, plus:
     { count: { title, text, rows: [{ he, en, letters: [[letter, value], ...] }] } }   A gematria card to add up. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.scripts.sages = {

  g34: { beats: [
    { say: 'Shalom! We’re the Sages, rabbis who lived in the Land of Israel long ago. Our teachings were collected about fifteen hundred years ago.' },
    { say: 'We wrote midrash. Midrash comes from a Hebrew word that means “to search.” We searched every word of the Torah for its meaning.' },
    { say: 'And we loved giving more than one answer. When we had another idea, we said <i>davar acher</i>, “another thing.” Say it with us: <i>Davar acher!</i>' },
    { say: 'Jacob dreamed of a ladder set on the ground with its top reaching the sky. But what was that ladder? We had lots of answers.', src: 'Genesis 28:12' },
    { ask: 'What do you think the ladder stood for?',
      choices: [
        { label: 'A way to reach God', reply: ['<i>Davar acher!</i> Now listen to two of our answers.'] },
        { label: 'A holy place', reply: ['One of us thought so too! Listen to Bar Kappara.'] },
        { label: 'A mountain', reply: ['You’re thinking like the Rabbis! First, listen to Bar Kappara.'] }
      ],
      tip: 'Hear a few ideas. Then choose one.' },
    { say: 'Bar Kappara taught: every dream has a meaning. The ladder is the ramp that led up to the altar in the Temple, and the angels are the High Priests, going up and down the ramp.', src: 'Bereshit Rabbah 68:12 (Bar Kappara)' },
    { say: '<i>Davar acher!</i> The Rabbis said the ladder is Mount Sinai. Its bottom was on the ground, where the people stood at the foot of the mountain. Its top reached the sky, like the mountain burning with fire up to the heavens.', src: 'Bereshit Rabbah 68:12 (Sinai)' },
    { say: 'And the angels going up and down? That’s Moses and Aaron! Moses went up the mountain to God, and came back down to the people.', src: 'Bereshit Rabbah 68:12 (Sinai)' },
    { say: 'We even found a secret code. We said the letters of <i>sulam</i>, “ladder,” equal the letters of <i>Sinai</i>.', src: 'Bereshit Rabbah 68:12 (Sinai)' },
    { count: { title: 'Count it!', text: 'Every Hebrew letter is also a number. Add up each word.', rows: [
      { he: 'סֻלָּם', en: 'sulam · ladder', letters: [['ס', 60], ['ל', 30], ['ם', 40]] },
      { he: 'סִינַי', en: 'Sinai', letters: [['ס', 60], ['י', 10], ['נ', 50], ['י', 10]] } ] } },
    { ask: 'What did you get?', discuss: true,
      tip: 'Give the group a minute to add. Then tap to hear the Sages.',
      reveal: [{ say: 'Both come to 130! A later teacher, the Ba’al HaTurim, spelled it out: <i>sulam</i> equals <i>Sinai</i>.', src: 'Kitzur Baal HaTurim on Genesis 28:12:6' }] },
    { ask: 'We could have picked one answer and thrown out the rest. Why do you think we kept them all?', discuss: true,
      tip: 'Take a few answers. Then tap to hear the Sages.',
      reveal: [
        'Because one verse of Torah is big enough to hold more than one good answer.',
        'And because arguing respectfully is one of the best ways to learn. We call it an argument for the sake of heaven.' ] },
    { prompt: 'What do you want to ask us?', questions: [
      { q: 'Which answer is right?', keys: 'right correct true answer which best', a: [
        'We never decided! In the midrash, our answers sit side by side. Which one do you like best?' ] },
      { q: 'Did Jacob climb the ladder?', keys: 'climb jacob ladder go up', a: [
        { say: 'Rabbi Meir taught that God invited Jacob to climb. But Jacob had just watched angels go up and come back down, and he was afraid he would come down too.', src: 'Vayikra Rabbah 29:2 (Rabbi Meir)' },
        { say: 'God promised him: if you go up, you will never come down. But Jacob didn’t believe it, and he didn’t climb.', src: 'Vayikra Rabbah 29:2 (Rabbi Meir)' },
        'What would you have done?' ] },
      { q: 'Can people be angels?', keys: 'people angels messenger malach person', a: [
        { say: 'In Hebrew, <i>malach</i> means “messenger.” We taught that prophets are called <i>malachim</i>, because they bring God’s message.', src: 'Bereshit Rabbah 68:12 (Sinai)' },
        'Who has been a messenger of something good for you?' ] },
      { q: 'Why did the angels go up first?', keys: 'up first down order why', a: [
        { say: 'We had an answer for that too. The angels who went with Jacob in the Land of Israel went up, and the angels who would go with him outside the Land came down.', src: 'Bereshit Rabbah 68:12 (his guardians)' },
        'Rashi learned that from us!' ] },
      { q: 'Is there a ladder we can climb?', keys: 'ladder climb us today prayer voice', a: [
        { say: 'The Ba’al HaTurim counted letters, too. He spelled <i>sulam</i> with a vav, סולם, and got 136. That’s the same as <i>kol</i>, קול, “voice.”', src: 'Kitzur Baal HaTurim on Genesis 28:12:3' },
        'He said the voice of prayer is a ladder. When you pray with all your heart, every rung is there.' ] }
    ] },
    { rung: true },
    { next: { say: '<i>Davar acher</i>: another visit! Rashi learned from us, and the angel has a story about Jacob’s picture in heaven.', ids: ['rashi', 'angel', 'jacob'] } }
  ] }
};
