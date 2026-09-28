/* Ramban's visit (5–7 and parents). Beat types are described at the top of jacob.js. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.scripts.ramban = {

  g57: { beats: [
    { say: 'I’m Ramban: Rabbi Moshe ben Nachman, also called Nachmanides. I was a doctor and a rabbi in Girona, in Catalonia, in the 1200s. Near the end of my life, I moved to the Land of Israel.' },
    { say: 'I read Jacob’s dream as a picture of how God runs the world. It came to him, I wrote, “in a prophetic dream.”', src: 'Ramban on Genesis 28:12:1' },
    { picture: { style: 'tapestry' } },
    { say: '“Whatever is done on earth is effected by means of the angels.” They go up to report, and they come back down with orders.', src: 'Ramban on Genesis 28:12:1' },
    { ask: 'Imagine you’re an angel reporting to God about our world today. What would you say?', discuss: true,
      tip: 'Take a few reports. Then tap to hear Ramban.',
      reveal: [{ say: 'In my commentary, the angels report, “We have traversed the earth, and behold it dwells in peace, or is steeped in war and blood.” Then they are sent back down to do what they are told.', src: 'Ramban on Genesis 28:12:1' }] },
    { say: 'But here is the most important part. God stands above the ladder and promises Jacob “that he will not be under the power of the angels, but he will be God’s portion.”', src: 'Ramban on Genesis 28:12:1' },
    { ask: 'What’s the difference between being looked after by messengers and being looked after by God directly?', discuss: true,
      tip: 'Take a few answers. Then tap to hear Ramban.',
      reveal: [{ say: 'Listen to what God said to Jacob: “Remember, I am with you: I will protect you wherever you go.” Not an angel. God.', src: 'Genesis 28:15' }] },
    { say: 'I argued even with teachers I admired. Rashi wrote that Mount Moriah itself came to meet Jacob at Beit El. I wrote, “I do not agree with them at all.” The Rabbis said the land contracted for Jacob, as it did for Abraham’s servant, who reached Haran in a day. They never said the mountain moved.', src: ['Rashi on Genesis 28:17:1', 'Ramban on Genesis 28:17 (Rashi)'] },
    { ask: 'Is it OK for a student to disagree with a great teacher?',
      choices: [
        { label: 'Yes, if you’re respectful', reply: ['That’s how I tried to do it. I quoted Rashi’s words in full before I disagreed with them.'] },
        { label: 'Only with proof', reply: [{ say: 'I brought proof: the Rabbis’ own words, and a map. Haran lies to the east, and Beit El isn’t at the edge of the Land on the Haran side.', src: 'Ramban on Genesis 28:17 (Rashi)' }] },
        { label: 'No', reply: [{ say: 'Then the Torah would stop growing. Rashi himself wrote, “I do not know,” when a verse beat him. He was leaving room for readers like me.', src: 'Rashi on Genesis 28:5:1' }] }
      ],
      tip: 'Let the group argue before anyone chooses.' },
    { say: 'Then there’s Jacob’s vow: “If God remains with me…” But God had just promised! Why the “if”? I gave two answers. Maybe Jacob feared his own sins could undo the promise, for the Sages said the righteous have no guarantee in this world. Or maybe “if” here means “when.”', src: ['Genesis 28:20', 'Ramban on Genesis 28:20:1'] },
    { say: 'And “the Eternal shall be my God,” I read as a vow: when Jacob came home, he would serve God in the Land, at the stone of Beit El. I believed the Land of Israel is where God is served most fully. Near the end of my life, I made that journey myself.', src: ['Genesis 28:21', 'Ramban on Genesis 28:21:1'] },
    { prompt: 'Ask me anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'What are angels, for you?', keys: 'angels what are messengers real', a: [
        { say: 'God’s messengers. They carry out God’s decrees on earth, “minor or major,” and report back.', src: 'Ramban on Genesis 28:12:1' } ] },
      { q: 'Why did you move to the Land of Israel?', keys: 'move moved israel why land jerusalem leave spain debate disputation', a: [
        'After I defended Judaism in a public debate before the king of Aragon, I had to leave Spain. I went to the Land of Israel, and in Jerusalem I helped gather a small community to pray and study.' ] },
      { q: 'What’s the difference between a pillar and an altar?', keys: 'pillar altar stone difference', a: [
        { say: 'A pillar is one stone, and an altar is many. A pillar was for pouring wine and oil, not for sacrifices. Later, the Torah forbade pillars, because the Canaanites had made them part of idol worship.', src: 'Ramban on Genesis 28:18:1' } ] },
      { q: 'Was the dream a prophecy?', keys: 'prophecy prophetic dream vision real', a: [
        { say: 'Yes. I called it “a prophetic dream.” God showed Jacob how the world works, and then promised to watch over him directly.', src: 'Ramban on Genesis 28:12:1' } ] },
      { q: 'Do you always disagree with Rashi?', keys: 'rashi disagree agree always argue', a: [
        'Not at all. I quote him constantly. I argue only when I think the words point somewhere else.' ] },
      { q: 'Why did Jacob say “if”?', keys: 'if vow promise condition why jacob say', a: [
        { say: 'Maybe he feared that sin could undo the promise. Or, by the plain sense, “if” means “when”: when the time comes, the vow will be kept.', src: 'Ramban on Genesis 28:20:1' } ] },
      { q: 'What does “God’s portion” mean?', keys: 'portion god own part means', a: [
        { say: 'It echoes the Torah’s own words: “For the Eternal’s portion is this people; Jacob, God’s own allotment.”', src: 'Deuteronomy 32:9' } ] }
    ] },
    { rung: true },
    { next: { say: 'Now hear Rambam, who read the same angels as prophets, and Rashi, whom I argued with.', ids: ['rambam', 'rashi', 'jacob'] } }
  ] },

  parents: { beats: [
    { say: 'I am Nachmanides: physician, kabbalist, and rabbi of Girona. In 1263 I defended Judaism before the king of Aragon in a public disputation. A few years later I left Spain for the Land of Israel.' },
    { say: 'I read Jacob’s dream as a vision of providence. In my words: <span class="he-inline" lang="he" dir="rtl">כִּי כָל הַנַּעֲשֶׂה בָּאָרֶץ נַעֲשֶׂה עַל יְדֵי הַמַּלְאָכִים, וְהַכֹּל בִּגְזֵרַת עֶלְיוֹן עֲלֵיהֶם</span> “whatever is done on earth is effected by means of the angels, and everything is by decree given to them by the Supreme One.”', src: 'Ramban on Genesis 28:12:1' },
    { picture: { style: 'tapestry' } },
    { say: 'The angels go up to report, “behold it dwells in peace, or is steeped in war and blood,” and come down with orders. But God stands above the ladder and promises Jacob <span class="he-inline" lang="he" dir="rtl">לֹא יִהְיֶה בְּיַד הַמַּלְאָכִים, אֲבָל יִהְיֶה חֵלֶק ה׳</span> “that he will not be under the power of the angels, but he will be God’s portion.”', src: ['Ramban on Genesis 28:12:1', 'Deuteronomy 32:9'] },
    { say: 'I wrote that Jacob’s standing was higher than that of other righteous people, of whom the psalm says, “For He will give His angels charge over thee, to keep thee in all thy ways.”', src: 'Ramban on Genesis 28:12:1' },
    { ask: 'Care that comes through intermediaries, and care that comes directly. Where do you experience each, as a person and as a parent?', discuss: true,
      tip: 'Pairs first. Then tap to hear Ramban.',
      reveal: ['Most of what a parent gives a child arrives through messengers: teachers, doctors, friends, a school like this one. A few things only the parent can give directly. I think Jacob needed to hear that God would be the second kind.'] },
    { say: 'On the place, I parted ways with Rashi. He wrote that Mount Moriah itself came to meet Jacob at Beit El. I wrote, “I do not agree with them at all.” The Rabbis said the land contracted for Jacob, as it did for Abraham’s servant, who reached Haran in a day. None of them said the mountain moved.', src: ['Rashi on Genesis 28:17:1', 'Ramban on Genesis 28:17 (Rashi)'] },
    { say: 'Then the “if” in Jacob’s vow. God had just said, “I am with you.” Why would Jacob say, “If God remains with me”? First answer: lest sin undo the promise. As the midrash says, <span class="he-inline" lang="he" dir="rtl">אֵין הַבְטָחָה לַצַּדִּיקִים בָּעוֹלָם הַזֶּה</span> “there is no assurance to the righteous in this world.”', src: ['Genesis 28:15', 'Genesis 28:20', 'Ramban on Genesis 28:20:1'] },
    { say: 'Second answer, by the plain sense: in the Torah, “if” about the future can mean “when.” Not a doubt, a timetable.', src: 'Ramban on Genesis 28:20:1' },
    { ask: 'Which “if” do you live with: the “if” of doubt, or the “if” that means “when”?', discuss: true,
      tip: 'Let people answer for themselves. Then tap to hear Ramban.',
      reveal: ['I held both. I wrote a commentary full of God’s promises, and I lived through a disputation and an exile.'] },
    { say: '“Then the Eternal shall be my God,” Rashi read as part of the condition. I read it as a vow: to serve God in the Land, at the stone of Beit El. And I added a secret, from the Talmud: <span class="he-inline" lang="he" dir="rtl">כָּל הַדָּר בְּחוּצָה לָאָרֶץ דּוֹמֶה כְּמִי שֶׁאֵין לוֹ אֱלוֹהַּ</span> “He who dwells outside the Land of Israel is like one who has no God.”', src: ['Genesis 28:21', 'Rashi on Genesis 28:21:3', 'Rashi on Genesis 28:22:1', 'Ramban on Genesis 28:21:1'] },
    { ask: 'Ramban believed that, and near the end of his life he went. Is God more present in some places than in others? What is the relationship between a place and faith?', discuss: true,
      tip: 'Take a few answers. Then tap to hear Ramban.',
      reveal: [{ say: 'Jacob’s own words may be the best answer: “Surely God is present in this place, and I did not know it!” And God had just told him, “I will protect you wherever you go.” This place, and wherever you go: Jacob heard both that night.', src: ['Genesis 28:16', 'Genesis 28:15'] }] },
    { prompt: 'Ask Ramban anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'What happened at the disputation?', keys: 'disputation debate barcelona king 1263 christian church move moved israel leave spain', a: [
        'In 1263, in Barcelona, King James I of Aragon ordered me to debate a convert from Judaism, before the court, about whether the Messiah had come. The king allowed me to speak freely. Afterward I was prosecuted for publishing my account of it, and I left Spain.' ] },
      { q: 'What is providence?', keys: 'providence care god watch world run angels', a: [
        { say: 'God’s care for the world. Most of it, I believe, comes through God’s messengers. For Jacob, God promised to watch directly.', src: 'Ramban on Genesis 28:12:1' } ] },
      { q: 'Why did you disagree with Rashi?', keys: 'rashi disagree argue why', a: [
        { say: 'Because no midrash says Mount Moriah moved. The land contracted for Jacob, as it did for Abraham’s servant. And Beit El isn’t at the edge of the Land on the Haran side, for Haran is to the east.', src: 'Ramban on Genesis 28:17 (Rashi)' } ] },
      { q: 'What’s the difference between a pillar and an altar?', keys: 'pillar altar stone difference', a: [
        { say: 'A pillar is one stone, for pouring wine and oil; an altar is many stones, for offerings. The Torah later forbade pillars because the Canaanites had made them part of idol worship.', src: 'Ramban on Genesis 28:18:1' } ] },
      { q: 'What does “God’s portion” mean?', keys: 'portion god own part means allotment', a: [
        { say: 'It echoes the Song of Moses: “For the Eternal’s portion is this people; Jacob, God’s own allotment.”', src: 'Deuteronomy 32:9' } ] },
      { q: 'What are the four kingdoms?', keys: 'four kingdoms empires babylon media greece edom rome', a: [
        { say: 'I also bring Rabbi Eliezer’s reading: the ladder showed Jacob four empires rising and falling, and God promised to guard him among the nations. The Sages tell it in Vayikra Rabbah too.', src: ['Ramban on Genesis 28:12:1', 'Vayikra Rabbah 29:2 (four kingdoms)'] } ] },
      { q: 'Is Jacob’s vow a condition or a promise?', keys: 'vow condition promise if then eternal god', a: [
        { say: 'Rashi read “then the Eternal shall be my God” as part of the condition. I read it as a vow, to be fulfilled in the Land.', src: ['Rashi on Genesis 28:21:3', 'Rashi on Genesis 28:22:1', 'Ramban on Genesis 28:21:1'] } ] }
    ] },
    { rung: true },
    { next: { say: 'For a different reading of the same angels, visit Rambam. For the reader I argued with, Rashi.', ids: ['rambam', 'rashi', 'sages'] } }
  ] }
};
