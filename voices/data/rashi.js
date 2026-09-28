/* Rashi's visit. Beat types are described at the top of jacob.js. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.scripts.rashi = {

  g34: { beats: [
    { say: 'Shalom! I’m Rashi. My full name was Rabbi Shlomo Yitzchaki. I lived in Troyes, in France, about a thousand years ago.' },
    { say: 'I wrote notes on the Torah, verse by verse. Students all over the world still learn the Torah with my notes.' },
    { say: 'Here’s my secret: when the Torah says something in a strange way, it’s a clue. Want to be Torah detectives with me?' },
    { say: 'Clue number one. Listen: “Angels of God were going up and down on it.”', src: 'Genesis 28:12' },
    { ask: 'What’s strange about that?',
      choices: [
        { label: 'Up comes before down', reply: ['Yes! Angels live in heaven. They should come down first, then go up. So why up first?'] },
        { label: 'Why do angels need a ladder?', reply: ['A fine question! But look at the order: up, then down. Angels live in heaven, so why go up first?'] },
        { label: 'Nothing!', reply: ['Look again: going up, then down. Angels live in heaven. Shouldn’t they come down first?'] }
      ],
      tip: 'Read the verse slowly, twice. Then hear a few ideas before anyone chooses.' },
    { say: 'Here’s my answer. The angels who watched over Jacob in the Land of Israel didn’t leave the Land. They went up to heaven. Then new angels came down to go with Jacob on his journey.', src: 'Rashi on Genesis 28:12:1' },
    { say: 'Like changing shifts! Jacob was leaving home, but he was never alone.' },
    { say: 'Clue number two. At night, the Hebrew says Jacob took <i>me’avnei hamakom</i>, “from the stones of the place.” In the morning, it says he took <i>ha’even</i>, “the stone.”', src: ['Genesis 28:11', 'Chullin 91b (the stones)', 'Genesis 28:18'] },
    { ask: 'Stones at night, one stone in the morning. How could that be?',
      choices: [
        { label: 'He only used one of them', reply: ['Possible! But then why does the Torah say “stones”? I think it’s a clue.'] },
        { label: 'The stones joined together', reply: ['You’re thinking like me! Listen to what the stones did.'] },
        { label: 'We have another idea', reply: ['Tell me! I love a new answer. Then listen to mine.'] }
      ],
      tip: 'Let students argue for a minute. A heads-up: the Revised JPS on the Genesis 28:11 card says “one of the stones,” which is the first answer here. Rashi reads the Hebrew word for word.' },
    { say: 'Jacob set the stones around his head to protect himself from wild animals. Then the stones began to argue! Each one said, “Let this good man rest his head on me!”', src: 'Rashi on Genesis 28:11:4' },
    { say: 'So God made them all into one stone. That’s why, in the morning, the Torah says “the stone.”', src: 'Rashi on Genesis 28:11:4' },
    { say: 'Clue number three. When Jacob woke up, he said, “Surely God is present in this place, and I did not know it!”', src: 'Genesis 28:16' },
    { ask: 'If Jacob had known, what would he have done differently?', discuss: true,
      tip: 'Take a few answers. Then tap to hear Rashi.',
      reveal: [
        { say: 'I think he’s saying: If I had known, I would never have gone to sleep in such a holy place!', src: 'Rashi on Genesis 28:16:1' },
        'Would you act differently if you knew a place was holy?' ] },
    { prompt: 'What do you want to ask me?', questions: [
      { q: 'Why did the sun set so suddenly?', keys: 'sun set night dark early', a: [
        { say: 'The Torah says Jacob stopped for the night “for the sun had set,” as if the sunset took him by surprise. I think the sun set early, just for Jacob, so that he would stay the night in that place.', src: ['Genesis 28:11', 'Rashi on Genesis 28:11:3'] } ] },
      { q: 'Why did God promise to protect Jacob?', keys: 'promise protect god safe why afraid', a: [
        { say: 'Because Jacob was afraid: afraid of Esau, and afraid of Laban.', src: 'Rashi on Genesis 28:15:1' } ] },
      { q: 'Did Jacob pray that night?', keys: 'pray prayer maariv evening arvit', a: [
        { say: 'Our Rabbis read the word <i>vayifga</i>, “he came upon,” as a word for praying. So Jacob started the evening prayer, Ma’ariv!', src: 'Rashi on Genesis 28:11:2' } ] },
      { q: 'What is the gateway to heaven?', keys: 'gate gateway heaven door', a: [
        { say: 'Jacob called that place “the gateway to heaven.” I explained: it’s a place of prayer, where prayers go up to heaven.', src: ['Genesis 28:17', 'Rashi on Genesis 28:17:3'] } ] },
      { q: 'Which place was “the place”?', keys: 'place where which mountain moriah', a: [
        { say: 'The Hebrew says <i>bamakom</i>, “the place,” as if we already know which place. I think it was Mount Moriah, the mountain where Abraham brought Isaac.', src: 'Rashi on Genesis 28:11:1' } ] },
      { q: 'Why are your notes so short?', keys: 'short notes write wrote why', a: [
        { say: 'I said it myself: I’m only concerned with the plain meaning of the Torah, and with the stories of the Sages that help explain its words. Everything else, I leave out!', src: 'Rashi on Genesis 3:8:1' } ] },
      { q: 'Is it true you grew grapes?', keys: 'grapes wine vineyard job work', a: [
        'People say I made my living from vineyards in Troyes, in the Champagne region of France. Nobody knows for sure!' ] }
    ] },
    { rung: true },
    { next: { say: 'Thank you, detectives! Many of my answers came from the Sages, who lived long before me. Go hear their ideas about the ladder.', ids: ['sages', 'angel', 'jacob'] } }
  ] },

  g57: { beats: [
    { say: 'I’m Rashi: Rabbi Shlomo Yitzchaki, of Troyes, in France. I lived from 1040 to 1105. For more than nine hundred years, students have opened the Torah and found my notes beside it.' },
    { say: 'My method, in my own words: “I, however, am only concerned with the plain sense of Scripture and with such Agadoth that explain the words of Scripture in a manner that fits in with them.” Agadot are the Sages’ stories.', src: 'Rashi on Genesis 3:8:1' },
    { say: 'So I read like a detective. When the Torah says something oddly, I stop and ask why. Let’s try a few.' },
    { say: 'Clue one: “Jacob left Beer-sheba, and set out for Haran.” If he set out for Haran, of course he left Beer-sheba. Why say it?', src: 'Genesis 28:10' },
    { ask: 'Why would the Torah bother to tell us that Jacob left?', discuss: true,
      tip: 'Take a few ideas. Then tap to hear Rashi.',
      reveal: [
        { say: 'Because when a good person leaves a place, it leaves a mark. While he is there, he is its glory, its splendor, and its beauty. When he leaves, they leave with him.', src: 'Rashi on Genesis 28:10:2' },
        'Who is someone whose leaving would change a place for you?' ] },
    { say: 'Clue two: the Hebrew says Jacob came upon <i>bamakom</i>, “the place,” as if we already know which one.', src: 'Genesis 28:11' },
    { ask: 'Which place is “the place”?',
      choices: [
        { label: 'A famous place', reply: [{ say: 'That’s my reading: Mount Moriah, the place Abraham saw “afar off” when he brought Isaac there.', src: 'Rashi on Genesis 28:11:1' }] },
        { label: 'Just a random spot', reply: [{ say: 'The Revised JPS reads it that way: “a certain place.” I don’t think the Torah wastes a single “the.”', src: 'Genesis 28:11' }] },
        { label: 'A name for God', reply: [{ say: 'That’s the midrash: God is called HaMakom, the Place, because God is the place of the world, and the world is not God’s place.', src: 'Bereshit Rabbah 68:9' }] }
      ],
      tip: 'Let the group argue before anyone chooses.' },
    { say: 'Clue three: “angels of God were going up and down.” Angels live in heaven, so why up first? Because the angels of the Land of Israel went up, and new ones came down to go with Jacob outside the Land.', src: ['Genesis 28:12', 'Rashi on Genesis 28:12:1'] },
    { say: 'Clue four: at night the Hebrew says Jacob took <i>me’avnei hamakom</i>, “from the stones of the place.” In the morning he took “the stone.” My answer: the stones argued over who would hold his head, and God made them one.', src: ['Rashi on Genesis 28:11:4', 'Genesis 28:18'] },
    { say: 'And sometimes a clue beats me. When Jacob leaves, the Torah calls Rebekah “mother of Jacob and Esau.” We know that already! My note says, “I do not know what the addition of these words is intended to tell us.”', src: ['Genesis 28:5', 'Rashi on Genesis 28:5:1'] },
    { ask: 'Why would a famous teacher write “I don’t know” in a book people would study for nine hundred years?', discuss: true,
      tip: 'Take a few answers. Then tap to hear Rashi.',
      reveal: ['A teacher who pretends to know everything teaches students to stop asking. I wanted you to keep asking. Maybe you’ll solve that one.'] },
    { say: 'Not everyone agrees with me. Ramban, who lived in Spain in the 1200s, read my note that Mount Moriah itself came to meet Jacob, and wrote, “I do not agree with them at all.”', src: ['Rashi on Genesis 28:17:1', 'Ramban on Genesis 28:17 (Rashi)'] },
    { prompt: 'Ask me anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'How old was Jacob when he left home?', keys: 'old age jacob years leave left home how', a: [
        { say: 'I did the math from the verses: sixty-three! And by my count he spent fourteen years studying in the school of Eber before he ever reached Laban.', src: 'Rashi on Genesis 28:9:1' } ] },
      { q: 'Did Jacob pray that night?', keys: 'pray prayer maariv evening arvit night', a: [
        { say: 'The Talmud says so: Jacob instituted the evening prayer. The word <i>vayifga</i>, “he came upon,” also means to pray.', src: ['Berakhot 26b (Jacob’s prayer)', 'Rashi on Genesis 28:11:2'] } ] },
      { q: 'Why did the sun set so suddenly?', keys: 'sun set early dark night suddenly', a: [
        { say: 'The Torah says he stopped for the night “for the sun had set,” as if it took him by surprise. I say it set early, just for Jacob, so that he would stay the night.', src: ['Genesis 28:11', 'Rashi on Genesis 28:11:3'] } ] },
      { q: 'Why did God promise to protect Jacob?', keys: 'promise protect god safe why afraid', a: [
        { say: 'Because he was afraid: afraid of Esau, and afraid of Laban.', src: 'Rashi on Genesis 28:15:1' } ] },
      { q: 'What did Jacob mean by “I did not know it”?', keys: 'know knew surely god present place did not', a: [
        { say: 'I hear: had I known, I would not have slept in such a holy place.', src: ['Genesis 28:16', 'Rashi on Genesis 28:16:1'] } ] },
      { q: 'Where did your answers come from?', keys: 'sources where answers learn learned books from midrash talmud use study studied teachers', a: [
        'Mostly from the Talmud and the midrash, often word for word. Many of my notes say where the idea comes from, so you can check me.' ] },
      { q: 'Did you have children?', keys: 'children kids family daughters grandsons', a: [
        'Three daughters. Two of my grandsons became great teachers themselves: Rashbam, who read the Torah even more plainly than I did, and Rabbeinu Tam.' ] }
    ] },
    { rung: true },
    { next: { say: 'Thank you, detectives. Ramban will tell you why he argued with me, and the Sages are where many of my answers began.', ids: ['ramban', 'sages', 'jacob'] } }
  ] },

  parents: { beats: [
    { say: 'I’m Rashi. For more than nine hundred years, Jews have learned Torah through my notes. A child in religious school today and a student in Troyes in the year 1100 open the same verse and find the same comment beside it.' },
    { say: 'My method, in my own words: “I, however, am only concerned with the plain sense of Scripture and with such Agadoth that explain the words of Scripture in a manner that fits in with them.”', src: 'Rashi on Genesis 3:8:1' },
    { ask: 'Plain sense, plus only the midrash that fits the words. What does a rule like that let in, and what does it keep out?', discuss: true,
      tip: 'Pairs first. Then tap to hear Rashi.',
      reveal: [{ say: 'Take the arguing stones. The Hebrew says “from the stones of the place” at night and “the stone” in the morning. A midrash that solves that earns its place in my notes.', src: 'Rashi on Genesis 28:11:4' }] },
    { say: 'So in Jacob’s night I keep what the words demand. “The place” is Mount Moriah, where Isaac was bound. The sun set early, just for him. And the angels go up first because the angels of the Land hand him over to angels who will go with him abroad.', src: ['Rashi on Genesis 28:11:1', 'Rashi on Genesis 28:11:3', 'Rashi on Genesis 28:12:1'] },
    { say: 'I also did the arithmetic. Working from the verses, Jacob was sixty-three when he left home, and he spent fourteen years studying in the school of Eber before he reached Laban.', src: 'Rashi on Genesis 28:9:1' },
    { ask: 'Does it change how you read Jacob, to picture a man of sixty-three running from his brother?', discuss: true,
      tip: 'Take a few reactions. Then tap to hear Rashi.',
      reveal: [{ say: 'For me it makes his fear more striking, and his faith too. At that age he still needed to hear God say, “I am with you.”', src: 'Genesis 28:15' }] },
    { say: 'On Jacob’s vow, I read the whole “if” as a request that God keep promises already made, down to “then the Eternal shall be my God.” Ramban disagreed: “This is not a condition, as Rashi would have it. It is rather a vow.”', src: ['Genesis 28:20–22', 'Rashi on Genesis 28:20:1', 'Rashi on Genesis 28:21:3', 'Ramban on Genesis 28:21:1'] },
    { say: 'He also rejected my reading that Mount Moriah itself came to meet Jacob at Beit El: “I do not agree with them at all.” A reader I never met, arguing with me by name. That is how Torah stays alive.', src: ['Rashi on Genesis 28:17:1', 'Ramban on Genesis 28:17 (Rashi)'] },
    { say: 'And sometimes I simply didn’t know. When Jacob leaves, the Torah calls Rebekah <span class="he-inline" lang="he" dir="rtl">אֵם יַעֲקֹב וְעֵשָׂו</span> “mother of Jacob and Esau.” I wrote, “I do not know what the addition of these words is intended to tell us.”', src: ['Genesis 28:5', 'Rashi on Genesis 28:5:1'] },
    { ask: 'What do you think those words teach? And what does it take for a teacher to write “I do not know”?', discuss: true,
      tip: 'Take a few answers. Then tap to hear Rashi.',
      reveal: ['Rebekah has her own answer, if you visit her. As for me: a teacher who never says “I don’t know” teaches students to stop asking.'] },
    { say: 'One more thing a parent should know. I passed on the midrash’s harsh Esau: the unborn Esau straining toward pagan temples. But on the kiss, I also recorded Rabbi Shimon bar Yochai: at that moment, Esau kissed Jacob with his whole heart.', src: ['Rashi on Genesis 25:22:1', 'Rashi on Genesis 33:4:2'] },
    { prompt: 'Ask Rashi anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Why do you quote so many midrashim?', keys: 'midrash midrashim quote why stories agadot aggadah aggadot use', a: [
        { say: 'Only the ones that answer something in the words. That’s my rule: the plain sense, and the aggadah that fits the verse.', src: 'Rashi on Genesis 3:8:1' } ] },
      { q: 'Where is Mount Moriah?', keys: 'moriah mountain where place temple jerusalem', a: [
        { say: 'Where Abraham brought Isaac. In another note I say it is where the Temple would stand, and that Jacob called it Beit El, the House of God.', src: ['Rashi on Genesis 28:11:1', 'Rashi on Genesis 28:17:1'] } ] },
      { q: 'Did Jacob pray there?', keys: 'pray prayer maariv evening arvit', a: [
        { say: 'The Talmud says Jacob instituted the evening prayer, reading <i>vayifga</i>, “he came upon,” as prayer.', src: ['Berakhot 26b (Jacob’s prayer)', 'Rashi on Genesis 28:11:2'] } ] },
      { q: 'Why did Ramban disagree with you?', keys: 'ramban disagree argue why nachmanides', a: [
        { say: 'On the place, he thought I stretched the midrash. The Rabbis said the land contracted for Jacob, as it did for Abraham’s servant, who reached Haran in a day. They never said Mount Moriah moved.', src: 'Ramban on Genesis 28:17 (Rashi)' },
        { say: 'On the vow, he read “then the Eternal shall be my God” as a vow, not a condition.', src: 'Ramban on Genesis 28:21:1' } ] },
      { q: 'What happened to Rebekah?', keys: 'rebekah mother happen happened die died death', a: [
        { say: 'I say she sent her nurse Deborah to call Jacob home, and that Deborah died on the way. At the oak where they buried her, Jacob learned that his mother had died too. The Torah kept her death quiet, so that people would not curse the mother who gave birth to Esau.', src: ['Rashi on Genesis 35:8:1', 'Rashi on Genesis 35:8'] } ] },
      { q: 'What did God promise Jacob?', keys: 'promise promised god land folded protect', a: [
        { say: 'Protection, because he was afraid of Esau and of Laban. And the land: God folded the whole Land of Israel under him, a sign that his children would take it easily.', src: ['Rashi on Genesis 28:15:1', 'Rashi on Genesis 28:13:3'] } ] },
      { q: 'Who were your teachers?', keys: 'teachers studied study learn yeshiva mainz worms school', a: [
        'I studied in the great academies of the Rhineland, in Mainz and Worms, and then came home to Troyes to teach.' ] }
    ] },
    { rung: true },
    { next: { say: 'Now hear the reader who argued with me, Ramban, or the Sages whose teachings fill my notes.', ids: ['ramban', 'sages', 'rambam'] } }
  ] }
};
