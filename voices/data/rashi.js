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
    { say: 'Clue number two. At night, the Hebrew says Jacob took <i>me’avnei hamakom</i>, “from the stones of the place.” In the morning, it says he took <i>ha’even</i>, “the stone.”', src: ['Chullin 91b (the stones)', 'Genesis 28:18'] },
    { ask: 'Stones at night, one stone in the morning. How could that be?',
      choices: [
        { label: 'He only used one of them', reply: ['Possible! But then why does the Torah say “stones”? I think it’s a clue.'] },
        { label: 'The stones joined together', reply: ['You’re thinking like me! Listen to what the stones did.'] },
        { label: 'We have another idea', reply: ['Tell me! I love a new answer. Then listen to mine.'] }
      ],
      tip: 'Let students argue for a minute before anyone chooses.' },
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
        { say: 'The Torah says Jacob stopped “for the sun had set.” That sounds extra. I think the sun set early, just for Jacob, so that he would stay the night in that place.', src: ['Genesis 28:11', 'Rashi on Genesis 28:11:3'] } ] },
      { q: 'Why did God promise to protect Jacob?', keys: 'promise protect god safe why afraid', a: [
        { say: 'Because Jacob was afraid: afraid of Esau, and afraid of Laban.', src: 'Rashi on Genesis 28:15:1' } ] },
      { q: 'Did Jacob pray that night?', keys: 'pray prayer maariv evening arvit', a: [
        { say: 'Our Rabbis read the word <i>vayifga</i>, “he came upon,” as a word for praying. So Jacob started the evening prayer, Ma’ariv!', src: 'Rashi on Genesis 28:11:2' } ] },
      { q: 'What is the gateway to heaven?', keys: 'gate gateway heaven door', a: [
        { say: 'Jacob called that place “the gateway to heaven.” I explained: it’s a place of prayer, where prayers go up to heaven.', src: ['Genesis 28:17', 'Rashi on Genesis 28:17:3'] } ] },
      { q: 'Which place was “the place”?', keys: 'place where which mountain moriah', a: [
        { say: 'The Torah says “the place,” as if we already know it. I think it was Mount Moriah, the mountain where Abraham brought Isaac.', src: 'Rashi on Genesis 28:11:1' } ] },
      { q: 'Why are your notes so short?', keys: 'short notes write wrote why', a: [
        'I wanted every student to be able to open the Torah and learn with me, one verse at a time. Short notes are easy to carry.' ] },
      { q: 'Is it true you grew grapes?', keys: 'grapes wine vineyard job work', a: [
        'People say I made my living from vineyards in Troyes, in the Champagne region of France. Nobody knows for sure!' ] }
    ] },
    { rung: true },
    { next: { say: 'Thank you, detectives! Many of my answers came from the Sages, who lived long before me. Go hear their ideas about the ladder.', ids: ['sages', 'angel', 'jacob'] } }
  ] }
};
