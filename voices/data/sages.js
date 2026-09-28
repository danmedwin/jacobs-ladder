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
      { q: 'Is there a ladder today?', keys: 'ladder climb us today now prayer pray voice', a: [
        { say: 'The Ba’al HaTurim counted letters, too. He spelled <i>sulam</i> with a vav, סולם, and got 136. That’s the same as <i>kol</i>, קול, “voice.”', src: 'Kitzur Baal HaTurim on Genesis 28:12:3' },
        'He said that when good people pray, their voices make a ladder for the angels to climb. When you pray with all your heart, every rung is there.' ] }
    ] },
    { rung: true },
    { next: { say: '<i>Davar acher</i>: another visit! Rashi learned from us, and the angel has a story about Jacob’s picture in heaven.', ids: ['rashi', 'angel', 'jacob'] } }
  ] },

  g57: { beats: [
    { say: 'We’re the Sages of the midrash: rabbis of the Land of Israel whose teachings were gathered in B’reishit Rabbah, about fifteen hundred years ago.' },
    { say: 'For us, a dream always means something. Bar Kappara put it this way: “There is no dream that does not have an interpretation.”', src: 'Bereshit Rabbah 68:12 (Bar Kappara)' },
    { picture: { style: 'mosaic' } },
    { ask: 'So what is the ladder?',
      choices: [
        { label: 'The Temple', reply: [{ say: 'That’s Bar Kappara’s reading: the ladder is the ramp up to the altar, and the angels are the High Priests going up and down it.', src: 'Bereshit Rabbah 68:12 (Bar Kappara)' }] },
        { label: 'Mount Sinai', reply: [{ say: 'That’s the Rabbis’ reading: the ladder is Sinai, and the angels are Moses and Aaron. Moses went up to God and came back down to the people.', src: 'Bereshit Rabbah 68:12 (Sinai)' }] },
        { label: 'Jacob himself', reply: [{ say: 'One of us read it that way: the angels went up and down “on him.” His image was engraved on high, and they came down to find him asleep.', src: 'Bereshit Rabbah 68:12 (on Jacob)' }] }
      ],
      tip: 'Whatever the group picks, the Sages explain the others next.' },
    { say: 'Here are all three, side by side. Bar Kappara: the ramp to the altar, with the High Priests going up and down. The Rabbis: Mount Sinai, with Moses and Aaron. And one of us: the angels going up and down on Jacob himself.', src: ['Bereshit Rabbah 68:12 (Bar Kappara)', 'Bereshit Rabbah 68:12 (Sinai)', 'Bereshit Rabbah 68:12 (on Jacob)'] },
    { say: 'We even found a code. About the ladder and Sinai we said, “The letters of this equals the letters of that.”', src: 'Bereshit Rabbah 68:12 (Sinai)' },
    { count: { title: 'Count it!', text: 'Every Hebrew letter is also a number. Add up each word.', rows: [
      { he: 'סֻלָּם', en: 'sulam · ladder', letters: [['ס', 60], ['ל', 30], ['ם', 40]] },
      { he: 'סִינַי', en: 'Sinai', letters: [['ס', 60], ['י', 10], ['נ', 50], ['י', 10]] } ] } },
    { ask: 'What did you get?', discuss: true,
      tip: 'Give the group a minute to add. Then tap to hear the Sages.',
      reveal: [{ say: 'Both come to 130. A later teacher, the Ba’al HaTurim, spelled it out: <i>sulam</i> equals <i>Sinai</i>.', src: 'Kitzur Baal HaTurim on Genesis 28:12:6' }] },
    { say: 'We never chose one answer. In the midrash, a new reading is often introduced with <i>davar acher</i>, “another matter,” and all of them stay on the page.' },
    { say: 'Why did the sun set early that night? We said God darkened it to speak with Jacob privately, like a king who tells his servants, “Extinguish the lamps… as I wish to speak with my friend privately.”', src: 'Bereshit Rabbah 68:10' },
    { say: 'Rabbi Meir taught that God showed Jacob the guardian angels of four empires, Babylon, Media, Greece, and Edom, each climbing the ladder and coming back down. Then God said to Jacob, “You, too, will ascend.”', src: 'Vayikra Rabbah 29:2 (Rabbi Meir)' },
    { say: 'Jacob was afraid: if they all came down, so would he. God promised that if he went up, he would never come down. And Rabbi Meir says, “He did not believe, and he did not ascend.”', src: 'Vayikra Rabbah 29:2 (Rabbi Meir)' },
    { ask: 'Would you have climbed?', discuss: true,
      tip: 'Split the room into climbers and stayers. Each side gets a minute to make its case. Then tap to hear the Sages.',
      reveal: [
        'Rabbi Meir was hard on Jacob. But notice what Jacob feared. Not the climbing. The falling.',
        'Is that a lack of faith, or just being human?' ] },
    { prompt: 'Ask us anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Which answer is right?', keys: 'right correct true answer which best', a: [
        'We never decided. In the midrash, our answers sit side by side. Which one do you like best, and why?' ] },
      { q: 'What happened to the four empires?', keys: 'empires kingdoms four babylon media greece edom rome rungs numbers seventy mean meaning', a: [
        { say: 'Another of us, Rabbi Shmuel bar Nachman, counted their rungs: Babylon climbed seventy, Media fifty-two, Greece a hundred and eighty. Edom kept climbing, and Jacob couldn’t tell how far.', src: 'Vayikra Rabbah 29:2 (four kingdoms)' },
        { say: 'God told Jacob: even if it nests among the stars, I will bring it down.', src: 'Vayikra Rabbah 29:2 (four kingdoms)' } ] },
      { q: 'Why is God called “the Place”?', keys: 'place hamakom name god makom called', a: [
        { say: 'The Torah says Jacob came upon “the place.” One of God’s names is HaMakom, the Place, because God is the place of the world, and the world is not God’s place.', src: 'Bereshit Rabbah 68:9' } ] },
      { q: 'Did Jacob pray there?', keys: 'pray prayer evening maariv arvit', a: [
        { say: 'The Talmud says Jacob instituted the evening prayer: “he encountered the place” means he prayed.', src: 'Berakhot 26b (Jacob’s prayer)' } ] },
      { q: 'Can people be angels?', keys: 'people angels messenger malach person prophets human', a: [
        { say: 'We taught that prophets are called <i>malachim</i>, because they carry God’s message. That’s how the angels on the ladder can be Moses and Aaron.', src: 'Bereshit Rabbah 68:12 (Sinai)' } ] },
      { q: 'Is there a ladder today?', keys: 'ladder today now prayer pray voice', a: [
        { say: 'The Ba’al HaTurim counted again. Spelled with a vav, סולם comes to 136, the same as קול, “voice.” He said the voice of the prayer of good people is a ladder for the angels to climb.', src: 'Kitzur Baal HaTurim on Genesis 28:12:3' } ] },
      { q: 'Who were the Sages?', keys: 'who sages rabbis names when', a: [
        'Rabbis of the Land of Israel in the centuries after the Temple fell: Bar Kappara, Rabbi Meir, Rabbi Shimon ben Lakish, and many more. Our teachings were collected in books of midrash like B’reishit Rabbah.' ] }
    ] },
    { rung: true },
    { next: { say: '<i>Davar acher</i>: another visit. Rashi built on our answers, and Rambam has a reading all his own.', ids: ['rashi', 'rambam', 'jacob'] } }
  ] },

  parents: { beats: [
    { say: 'We are the Sages of B’reishit Rabbah and Vayikra Rabbah. Our way of reading is plural on purpose.' },
    { say: 'The Hebrew says Jacob came upon <i>hamakom</i>, “the place.” We heard it as a name of God, and said, <span class="he-inline" lang="he" dir="rtl">הֱוֵי הַקָּדוֹשׁ בָּרוּךְ הוּא מְקוֹמוֹ שֶׁל עוֹלָם וְאֵין עוֹלָמוֹ מְקוֹמוֹ</span> “the Holy One blessed be He is the place of the world, and His world is not His place.”', src: 'Bereshit Rabbah 68:9' },
    { say: 'Why did the sun set early? So that God could speak with Jacob alone, like a king who says, “Extinguish the lamps… as I wish to speak with my friend privately.” And the hours of light taken when Jacob left were given back when he came home: “The sun rose upon him.”', src: ['Bereshit Rabbah 68:10', 'Genesis 32:32'] },
    { picture: { style: 'modernist-dream' } },
    { say: 'Then we read the dream many ways. Here are four. Bar Kappara: “There is no dream that does not have an interpretation,” and the ladder is the ramp to the altar. The Rabbis: it is Sinai, with Moses and Aaron going up and down. One of us: the angels went up and down on Jacob himself. And another matter: the angels of the Land hand him to the angels who will go with him abroad.', src: ['Bereshit Rabbah 68:12 (Bar Kappara)', 'Bereshit Rabbah 68:12 (Sinai)', 'Bereshit Rabbah 68:12 (on Jacob)', 'Bereshit Rabbah 68:12 (his guardians)'] },
    { say: 'Rabbi Yehoshua ben Levi read the whole passage as exile. “Jacob departed” recalls Jeremiah’s “let them go.” The stones of the place recall Lamentations: “The sacred stones are spilled.” The ladder is Nebuchadnezzar’s idol, and the angels are Hananiah, Mishael, and Azariah, who would not bow.', src: 'Bereshit Rabbah 68:13' },
    { ask: 'Temple, Sinai, Jacob’s own image, exile. Why would a community keep contradictory readings of one dream side by side, in one book?', discuss: true,
      tip: 'Pairs first, then the room. Then tap to hear the Sages.',
      reveal: ['Because a sacred text has to hold a people’s whole life: worship, revelation, the self, and catastrophe. We didn’t choose. We compiled.'] },
    { say: 'In Vayikra Rabbah, Rabbi Shmuel bar Nachman counts the rungs the empires climbed: Babylon seventy, Media fifty-two, Greece a hundred and eighty. Edom kept climbing, and Jacob couldn’t tell how far. For us, Edom meant Rome.', src: ['Vayikra Rabbah 29:2 (four kingdoms)', 'Rashi on Genesis 36:43:1'] },
    { say: 'Rabbi Meir adds the invitation. God showed Jacob the empires rising and falling and said, <span class="he-inline" lang="he" dir="rtl">אַף אַתָּה עוֹלֶה</span> “You, too, will ascend.” Jacob feared he would fall like the others, though God promised he would not. And Rabbi Meir concludes, <span class="he-inline" lang="he" dir="rtl">לֹא הֶאֱמִין וְלֹא עָלָה</span> “He did not believe, and he did not ascend.”', src: 'Vayikra Rabbah 29:2 (Rabbi Meir)' },
    { ask: 'Would you have climbed? What would have held you back?', discuss: true,
      tip: 'Give pairs a few minutes, then hear from the room. Then tap to hear the Sages.',
      reveal: ['Rabbi Meir blames Jacob for not believing. But Jacob had just watched four empires rise and fall. Most of us fear the fall more than we want the height.'] },
    { prompt: 'Ask the Sages anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Which reading do you prefer?', keys: 'prefer best right which reading answer', a: [
        'We never ruled. Which one speaks to you, and why?' ] },
      { q: 'What do the rung numbers mean?', keys: 'rungs numbers seventy 70 fifty-two 52 hundred eighty 180 count empires kingdoms four babylon media greece', a: [
        { say: 'They measure each empire’s rise before its fall: seventy for Babylon, fifty-two for Media, a hundred and eighty for Greece. Edom’s number was hidden, even from Jacob.', src: 'Vayikra Rabbah 29:2 (four kingdoms)' } ] },
      { q: 'Why is Edom Rome?', keys: 'edom rome esau empire why roman', a: [
        { say: 'We lived under Rome, the empire that destroyed the Temple, and Esau’s other name became our name for it. Rashi, following an old midrash, says of one of Esau’s descendants, “Magdiel: this is Rome.”', src: 'Rashi on Genesis 36:43:1' },
        'Esau’s own visit takes this up, if you have time.' ] },
      { q: 'Did Jacob institute the evening prayer?', keys: 'pray prayer evening maariv arvit institute', a: [
        { say: 'The Talmud says so: Abraham the morning prayer, Isaac the afternoon, and Jacob the evening, from “he encountered the place.”', src: 'Berakhot 26b (Jacob’s prayer)' } ] },
      { q: 'What does it mean that God is “the Place”?', keys: 'place hamakom name god makom', a: [
        { say: 'That God contains the world, and the world does not contain God.', src: 'Bereshit Rabbah 68:9' } ] },
      { q: 'Is prayer a ladder?', keys: 'prayer ladder voice kol pray climb', a: [
        { say: 'A later teacher, the Ba’al HaTurim, counted it: סולם, ladder, spelled with a vav, equals קול, voice. The voice of the prayer of the righteous is a ladder for the angels to go up on.', src: 'Kitzur Baal HaTurim on Genesis 28:12:3' } ] },
      { q: 'Why do sulam and Sinai match?', keys: 'sulam sinai letters gematria numbers match 130', a: [
        { say: 'We said, “The letters of this equals the letters of that.” Later teachers did the arithmetic: both come to 130.', src: ['Bereshit Rabbah 68:12 (Sinai)', 'Kitzur Baal HaTurim on Genesis 28:12:6'] } ] }
    ] },
    { rung: true },
    { next: { say: '<i>Davar acher</i>: two more readers of the ladder, Rambam and Ramban, and Rashi, who built on us.', ids: ['rambam', 'ramban', 'rashi'] } }
  ] }
};
