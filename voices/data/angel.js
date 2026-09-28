/* The angel's visit. Beat types are described at the top of jacob.js. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.scripts.angel = {

  k2: { beats: [
    { say: 'Hello! I’m an angel. In Hebrew, an angel is a <i>malach</i>. That means “messenger.”' },
    { say: 'I was on the ladder in Jacob’s dream!', src: 'Genesis 28:12' },
    { picture: { style: 'stained-glass' } },
    { say: 'Lots of angels were going up and down, up and down.', src: 'Genesis 28:12' },
    { motion: { title: 'Fly like an angel!', text: 'Stretch your arms out like wings. Float up high on your tiptoes… now float down low. Up… and down!', icon: 'updown' } },
    { say: 'Do you know why we were going up and down? We wanted to see Jacob!' },
    { say: 'First, we went up to heaven to look at a picture of Jacob there.', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
    { say: 'Then we came down the ladder to see the real Jacob. And there he was… fast asleep!', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
    { motion: { title: 'Shh! He’s sleeping!', text: 'Finger on your lips: shhh! Tiptoe down the ladder, very, very quietly.', icon: 'moon' } },
    { ask: 'Why do you think the angels wanted to see Jacob?',
      choices: [
        { label: 'He was special', reply: ['Yes! The Sages said Jacob’s picture was up in heaven because God was so proud of him.'] },
        { label: 'To keep him safe', reply: ['We did want him to be safe. And God was right there with him, too.'] },
        { label: 'They were curious', reply: ['We were! We wanted to see the real Jacob, not just his picture.'] }
      ],
      tip: 'Let everyone answer out loud. Then choose what most of the group said.' },
    { say: 'Then God was right there beside Jacob. God said, “I am with you. I will keep you safe wherever you go.”', src: ['Genesis 28:13', 'Genesis 28:15'] },
    { ask: 'Who helps keep you safe?', discuss: true,
      tip: 'Take a few answers out loud. Then tap to hear the angel.',
      reveal: ['Your grown-ups, your teachers, your friends… And Jacob learned that God is with you, too, wherever you go.'] },
    { prompt: 'What would you like to ask me?', questions: [
      { q: 'Do you have wings?', a: [
        'The Torah doesn’t say what we look like! Artists have imagined us in lots of ways.',
        { gallery: ['origami', 'blown-glass', '3d-animated', 'embroidery'], caption: 'Here’s how some artists pictured us.' } ] },
      { q: 'How many angels were there?', a: [
        { say: 'The Torah just says “angels.” The Talmud says there were at least four: two going up and two coming down, all at the same time!', src: 'Chullin 91b (the ladder)' } ] },
      { q: 'How big was the ladder?', a: [
        { say: 'Enormous! The Talmud says angels are huge, and the ladder was wide enough for four of us to pass each other.', src: 'Chullin 91b (the ladder)' } ] },
      { q: 'Why did you go up first?', a: [
        { say: 'Good question! A teacher named Rashi noticed that too. He said the angels who took care of Jacob at home went up, and new angels came down to take care of him on his trip.', src: 'Rashi on Genesis 28:12:1' } ] }
    ] },
    { rung: true },
    { next: { say: 'Thanks for visiting me! Who do you want to meet next?', ids: ['jacob', 'stone', 'rebekah'] } }
  ] },

  g34: { beats: [
    { say: 'Shalom! I’m one of the angels from Jacob’s dream. In Hebrew, I’m a <i>malach</i>, a messenger.' },
    { say: 'Jacob dreamed of a ladder set on the ground with its top reaching the sky, and angels of God going up and down on it. That was us!', src: 'Genesis 28:12' },
    { picture: { style: 'persian-miniature' } },
    { say: 'Here’s a secret about the last word of that verse, <i>bo</i>. It can mean “on it,” on the ladder. It can also mean “on him,” on Jacob.', src: 'Genesis 28:12' },
    { ask: 'Two rabbis, Rabbi Chiya and Rabbi Yannai, argued about it. Were the angels going up and down on the ladder, or up and down because of Jacob?',
      choices: [
        { label: 'On the ladder', reply: ['That’s the simple reading, and one of the rabbis said so. But listen to what the other rabbi said.'] },
        { label: 'Because of Jacob', reply: ['That’s what one of the rabbis said! Listen to why.'] },
        { label: 'Both', reply: ['The Sages liked to keep both answers. Now listen to the surprising one.'] }
      ],
      tip: 'Let students argue for a minute before anyone chooses.' },
    { say: 'He said that Jacob’s picture was carved up in heaven. So we angels went up to look at it…', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
    { say: '…and then we came down to see the real Jacob. And we found him fast asleep on a rock!', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
    { ask: 'Jacob had just tricked his father and run away from home. Why would his picture be up in heaven?', discuss: true,
      tip: 'Take a few answers. Then tap to hear the angel.',
      reveal: [
        { say: 'The Sages quoted God’s words in the book of Isaiah: “Israel, in whom I glory.” God was proud of Jacob, even on his worst night.', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
        'Maybe God could see who Jacob would become, not just what he had done.' ] },
    { say: 'Then God was standing beside Jacob, and said, “Remember, I am with you: I will protect you wherever you go.”', src: ['Genesis 28:13', 'Genesis 28:15'] },
    { say: 'The Talmud tells one more story. Some angels were not so friendly. They wanted to harm Jacob! So right away, God stood over him to protect him.', src: 'Chullin 91b (the fan)' },
    { say: 'Rabbi Shimon ben Lakish said God was like a parent standing over their child, waving a fan to keep them cool.', src: 'Chullin 91b (the fan)' },
    { ask: 'When have you felt like someone was watching over you?', discuss: true,
      tip: 'Take a few answers. Then tap to hear the angel.',
      reveal: ['Jacob felt all alone that night. He didn’t know that God, and a whole ladder full of angels, were right there with him.'] },
    { prompt: 'What do you want to ask me?', questions: [
      { q: 'What do angels look like?', keys: 'look like wings face body see', a: [
        'The Torah doesn’t say. Artists have imagined us in many different ways.',
        { gallery: ['manuscript', 'mosaic', 'blown-glass', 'holographic'], caption: 'Four artists, four ideas.' } ] },
      { q: 'Why did the angels go up first?', keys: 'up first down order why', a: [
        { say: 'Good eye! Rashi noticed that too. He said the angels who guarded Jacob in the Land of Israel went up, and new angels came down to go with him outside the Land. Like changing shifts!', src: 'Rashi on Genesis 28:12:1' } ] },
      { q: 'How many angels were there?', keys: 'many angels number count four', a: [
        { say: 'The Talmud counts at least four: two going up and two coming down, passing each other on the ladder.', src: 'Chullin 91b (the ladder)' } ] },
      { q: 'How wide was the ladder?', keys: 'wide big size ladder huge', a: [
        { say: 'The Talmud says eight thousand parasangs! A parasang is a few miles, so that’s thousands and thousands of miles wide.', src: 'Chullin 91b (the ladder)' },
        'Why so wide? Four angels had to fit, and the Talmud says each of us is gigantic!' ] },
      { q: 'Do angels watch over us today?', keys: 'today now us watch protect bedtime night', a: [
        { say: 'Many Jewish families say a bedtime prayer that asks for four angels: Michael on your right, Gabriel on your left, Uriel in front of you, Raphael behind you, and above your head, God’s presence.', src: 'bedtime' },
        'Just like Jacob that night: his head on a stone, and God standing over him.' ] }
    ] },
    { rung: true },
    { next: { say: 'Thanks for climbing up to see me! Rashi has more to say about why we went up first, and the Sages have lots of ideas about the ladder.', ids: ['rashi', 'sages', 'jacob'] } }
  ] }
};
