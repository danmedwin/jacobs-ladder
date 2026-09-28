/* The stone's visit (K–2 only). Beat types are described at the top of jacob.js. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.scripts.stone = {

  k2: { beats: [
    { say: 'Hi! I’m the stone. I’m just one stone now. But I used to be lots of stones!' },
    { say: 'One night, Jacob came to our place. The sun had gone down, and he needed somewhere to sleep.', src: 'Genesis 28:11' },
    { say: 'He was all alone, and he was afraid of wild animals. So he put us stones all around his head, to keep him safe.', src: 'Rashi on Genesis 28:11:4' },
    { motion: { title: 'Be the stones!', text: 'Curl up small and round, like a stone. Now everybody, all together: “Pick me! Pick me!”', icon: 'stones' } },
    { say: 'Then we started to argue! Every stone said, “Let this good man put his head on me!”', src: 'Rashi on Genesis 28:11:4' },
    { ask: 'Why did we all want to help Jacob?',
      choices: [
        { label: 'He was tired', reply: ['Yes! He walked a long way, and he needed a good rest.'] },
        { label: 'He was all alone', reply: ['Yes. When someone is all alone, it feels good to help.'] },
        { label: 'He was a good person', reply: ['That’s what we said! Every stone wanted to hold the head of a good person.'] }
      ],
      tip: 'Let everyone answer out loud. Then choose what most of the group said.' },
    { say: 'So God did something amazing. God made all of us into one big stone!', src: 'Rashi on Genesis 28:11:4' },
    { motion: { title: 'Become one stone!', text: 'Everybody squeeze in close together… closer… closer! Now you’re all one big stone.', icon: 'stone' } },
    { say: 'Jacob put his head on me and fell asleep. And right on top of me, he had his dream!', src: 'Genesis 28:12' },
    { picture: { style: '3d-animated' } },
    { say: 'In the morning, Jacob stood me up tall, like a tower. And he poured oil on top of me, to show that this place was special.', src: 'Genesis 28:18' },
    { motion: { title: 'Stand up tall!', text: 'Stand up straight and tall, like a tower of stone. Now hold very, very still!', icon: 'pillar' } },
    { say: 'Jacob gave our place a new name: Beit El. That means “House of God.”', src: 'Genesis 28:19' },
    { ask: 'What helps you feel safe when you go to sleep?', discuss: true,
      tip: 'Take a few answers out loud. Then tap to hear the stone.',
      reveal: [{ say: 'For Jacob, it was me! And God, who told him, “I am with you.”', src: 'Genesis 28:15' }] },
    { prompt: 'What would you like to ask me?', questions: [
      { q: 'Were you comfy?', a: [
        'Well… I’m a stone! Not very soft. But Jacob was tired from walking all day, and I did my best.' ] },
      { q: 'Can stones really talk?', a: [
        { say: 'Not really! This is a midrash, a story our teachers told about the Torah. It shows that everything wanted to help Jacob, even the stones.', src: 'Rashi on Genesis 28:11:4' } ] },
      { q: 'Who told your story?', a: [
        { say: 'A teacher named Rashi wrote it down, about a thousand years ago. He learned it from the Talmud, an even older book.', src: ['Rashi on Genesis 28:11:4', 'Chullin 91b (the stones)'] } ] },
      { q: 'Where are you now?', a: [
        { say: 'Nobody knows! But many years later, Jacob came back to Beit El and set up a stone there again.', src: 'Genesis 35:14' } ] }
    ] },
    { rung: true },
    { next: { say: 'Thanks for visiting me! Who do you want to meet next?', ids: ['jacob', 'angel', 'esau'] } }
  ] }
};
