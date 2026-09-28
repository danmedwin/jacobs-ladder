/* The angel's visit. Beat types are described at the top of jacob.js. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.scripts.angel = {

  k2: { beats: [
    { say: 'Hello! I’m an angel. In Hebrew, an angel is a <i>malach</i>. That means “messenger.”' },
    { say: 'I was on the ladder in Jacob’s dream!', src: 'Genesis 28:12' },
    { picture: { style: 'stained-glass' } },
    { say: 'Lots of angels were going up and down, up and down.', src: 'Genesis 28:12' },
    { motion: { title: 'Fly like an angel!', text: 'Stretch your arms out like wings. Float up high on your tiptoes… now float down low. Up… and down!', icon: 'updown' } },
    { say: 'Do you know why we were going up and down? We wanted to see Jacob!', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
    { say: 'First, we went up to heaven to look at a picture of Jacob there.', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
    { say: 'Then we came down the ladder to see the real Jacob. And there he was… fast asleep!', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
    { motion: { title: 'Shh! He’s sleeping!', text: 'Finger on your lips: shhh! Tiptoe down the ladder, very, very quietly.', icon: 'moon' } },
    { ask: 'Why do you think the angels wanted to see Jacob?',
      choices: [
        { label: 'He was special', reply: [{ say: 'Yes! The Sages said Jacob’s picture was up in heaven because God was so proud of him.', src: 'Bereshit Rabbah 68:12 (on Jacob)' }] },
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
        'The Torah doesn’t say what the angels on the ladder looked like! Artists have imagined us in lots of ways.',
        { gallery: ['origami', 'blown-glass', '3d-animated', 'embroidery'], caption: 'Here’s how some artists pictured us.' } ] },
      { q: 'How many angels were there?', a: [
        { say: 'The Torah just says “angels.” The Talmud says there were at least four: two going up and two coming down, all at the same time!', src: 'Chullin 91b (the ladder)' } ] },
      { q: 'How big was the ladder?', a: [
        { say: 'Enormous! The Talmud says angels are huge, and the ladder was wide enough for four of us to pass each other.', src: 'Chullin 91b (the ladder)' } ] },
      { q: 'Why did you go up first?', a: [
        { say: 'Good question! A teacher named Rashi noticed that too. He said the angels who took care of Jacob in the Land of Israel went up, and new angels came down to take care of him on his trip.', src: 'Rashi on Genesis 28:12:1' } ] }
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
    { say: 'The Talmud tells the story a little differently, and we angels don’t look so good in it. The angels who looked at Jacob’s picture wanted to harm him! Rashi says they were jealous. So right away, God stood over Jacob to protect him.', src: ['Chullin 91b (the fan)', 'Rashi on Chullin 91b'] },
    { say: 'Rabbi Shimon ben Lakish said that if the Torah didn’t say it, we would never dare to: God stood over Jacob like a parent waving over their child. Rashi explains that the parent is waving a fan, to protect the child from the heat.', src: ['Chullin 91b (the fan)', 'Rashi on Chullin 91b'] },
    { ask: 'When have you felt like someone was watching over you?', discuss: true,
      tip: 'Take a few answers. Then tap to hear the angel.',
      reveal: ['Jacob felt all alone that night. He didn’t know that God, and a whole ladder full of angels, were right there with him.'] },
    { prompt: 'What do you want to ask me?', questions: [
      { q: 'What do angels look like?', keys: 'look like wings face body see', a: [
        'The Torah doesn’t say what the angels on the ladder looked like. Artists have imagined us in many different ways.',
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
  ] },

  g57: { beats: [
    { say: 'I’m a <i>malach</i>. The word means “messenger,” and the Torah uses it for human messengers too. When Jacob sends messengers to Esau, the Hebrew calls them <i>malachim</i>.', src: 'Genesis 32:4' },
    { say: 'In Jacob’s dream, “a stairway was set on the ground and its top reached to the sky, and angels of God were going up and down on it.” That was us.', src: 'Genesis 28:12' },
    { picture: { style: 'blown-glass' } },
    { say: 'What were we doing? There are at least three answers, and each comes from a different teacher.' },
    { say: 'Rashi: changing shifts. The angels who guarded Jacob in the Land of Israel went up, and new ones came down to go with him outside the Land.', src: 'Rashi on Genesis 28:12:1' },
    { say: 'The midrash: we went up to look at Jacob’s image, carved on high, and came down to find him asleep.', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
    { say: 'Ramban: this is how God runs the world. “Whatever is done on earth is effected by means of the angels.” We go up to report, and come back down with orders.', src: 'Ramban on Genesis 28:12:1' },
    { ask: 'A shift change, a trip to see Jacob, or messengers reporting in. Which would you want to be true, and why?', discuss: true,
      tip: 'Let students argue for their pick. Then tap to hear the angel.',
      reveal: ['Each one tells Jacob something he needed that night. You’re not alone. You’re known in heaven. And God is watching over you directly.'] },
    { say: 'The Talmud tells a sharper story. The angels who gazed at Jacob’s image wanted to endanger him. Rashi says they were jealous. So right away, God stood over Jacob to guard him.', src: ['Chullin 91b (the fan)', 'Rashi on Chullin 91b'] },
    { say: 'Rabbi Shimon ben Lakish said that if the verse didn’t say it, no one would dare to: God stood over Jacob like a parent waving over a child. Rashi explains: waving a fan, to save the child from the heat.', src: ['Chullin 91b (the fan)', 'Rashi on Chullin 91b'] },
    { ask: 'Why would angels be jealous of a human being?', discuss: true,
      tip: 'Take a few theories. Then tap to hear the angel.',
      reveal: [{ say: 'Here’s my guess: you can change, and we can’t. Jacob left home a trickster. Twenty years later, after a night of wrestling, he came back with a new name: Israel.', src: 'Genesis 32:25–29' }] },
    { say: 'We were there at the end of the story too. On his way home, “Jacob went on his way, and angels of God encountered him.” He named the place Mahanaim, from the word for “camp.”', src: 'Genesis 32:2–3' },
    { prompt: 'Ask me anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'What do angels look like?', keys: 'look like wings face body see appearance', a: [
        'The Torah doesn’t say what the angels on the ladder looked like. Artists have imagined us in many ways.',
        { gallery: ['manuscript', 'tapestry', 'classical', 'modernist-dream'], caption: 'Four artists, four answers.' } ] },
      { q: 'Do angels have free will?', keys: 'free will choose choice decide obey orders', a: [
        { say: 'Ramban says we do nothing, great or small, without orders from above.', src: 'Ramban on Genesis 28:12:1' },
        { say: 'But the Talmud’s jealous angels seem to have minds of their own. You decide.', src: 'Chullin 91b (the fan)' } ] },
      { q: 'Are angels real?', keys: 'real exist believe true', a: [
        { say: 'Rambam said the angels in this dream stand for prophets: people who climb up to understand and then come down to teach. Visit him to hear more.', src: 'Guide 1:15' } ] },
      { q: 'How big was the ladder?', keys: 'big wide size tall ladder huge', a: [
        { say: 'The Talmud says eight thousand parasangs wide, so that four giant angels could pass each other.', src: 'Chullin 91b (the ladder)' } ] },
      { q: 'Why did the angels go up first?', keys: 'up first down order why', a: [
        { say: 'Rashi’s answer: the angels of the Land of Israel went up, and new ones came down. The midrash has another: we went up first to see his image.', src: ['Rashi on Genesis 28:12:1', 'Bereshit Rabbah 68:12 (on Jacob)'] } ] },
      { q: 'Who wrestled with Jacob?', keys: 'wrestle wrestled wrestling fight man angel night', a: [
        { say: 'The Torah says “a man.” Rashi says the Rabbis identified him as Esau’s guardian angel.', src: ['Genesis 32:25–29', 'Rashi on Genesis 32:25:2'] } ] },
      { q: 'Do angels watch over us?', keys: 'watch protect guardian bedtime night sleep', a: [
        { say: 'Many families say a bedtime prayer asking for four of us: Michael on your right, Gabriel on your left, Uriel in front of you, Raphael behind you, and above your head, God’s presence.', src: 'bedtime' } ] }
    ] },
    { rung: true },
    { next: { say: 'Want the full answers? Rambam says we stand for prophets, and Ramban says we run the world.', ids: ['rambam', 'ramban', 'jacob'] } }
  ] },

  parents: { beats: [
    { say: 'I’m a <i>malach</i>, a messenger. The Torah uses the same word when Jacob sends messengers to Esau. Angel or human, a malach is defined by the errand.', src: 'Genesis 32:4' },
    { say: 'The verse about us ends with a small word: <span class="he-inline" lang="he" dir="rtl">וְהִנֵּה מַלְאֲכֵי אֱלֹהִים עֹלִים וְיֹרְדִים בּוֹ</span> The angels go up and down <i>bo</i>: “on it,” or “on him.”', src: 'Genesis 28:12' },
    { picture: { style: 'embroidery' } },
    { say: 'Rabbi Chiya and Rabbi Yannai split on it. One read “on the ladder.” The other read “on Jacob.” The midrash doesn’t say which rabbi held which view.', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
    { say: 'The one who read “on Jacob” said: your likeness is engraved on high. The midrash borrows a Greek word for it, <i>ikonin</i>, an icon. We went up and saw his image, and came down and found him asleep.', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
    { say: 'The midrash compares it to a king: in the basilica they find him sitting in judgment; out in the courtyard, they find him asleep.', src: 'Bereshit Rabbah 68:12 (on Jacob)' },
    { ask: 'The image in heaven and the man asleep on a stone. Which is the real Jacob? How do you hold both, about yourself or about your child?', discuss: true,
      tip: 'Pairs first. Then tap to hear the angel.',
      reveal: [{ say: 'The midrash answers with a verse from Isaiah: “Israel, in whom I glory.” The pride is for the sleeper too.', src: 'Bereshit Rabbah 68:12 (on Jacob)' }] },
    { say: 'The Talmud tells it darker. The same angels who gazed at his image wanted to endanger him, and Rashi supplies the motive: jealousy. So God stood over Jacob to guard him.', src: ['Chullin 91b (the fan)', 'Rashi on Chullin 91b'] },
    { say: 'Reish Lakish said that were it not written in the verse, it would be impossible to say: God stood over Jacob “like a man who waves… over his son.” Rashi adds: with a fan, to save him from the heat.', src: ['Chullin 91b (the fan)', 'Rashi on Chullin 91b'] },
    { say: 'Ramban reads us as the machinery of providence. We go up to report and come down with orders. But God stands above the ladder and promises Jacob he will not be left to us: he will be God’s own portion.', src: 'Ramban on Genesis 28:12:1' },
    { ask: 'Ramban says most of the world runs through intermediaries, but Jacob receives God directly. Where do you meet God through messengers, and where, if anywhere, directly?', discuss: true,
      tip: 'Give pairs a few minutes. Then tap to hear the angel.',
      reveal: [{ say: 'The bedtime Sh’ma asks for both: four of us, Michael, Gabriel, Uriel, and Raphael, and then, over your head, the Presence of God.', src: 'bedtime' }] },
    { say: 'Rambam goes further: the angels on the ladder are prophets, human beings who climb in understanding and come down to teach.', src: 'Guide 1:15' },
    { say: 'Vayeitzei opens and closes with us. Leaving home, Jacob dreams of angels going up and down. Coming home, “angels of God encountered him,” and he named the place Mahanaim.', src: ['Genesis 28:12', 'Genesis 32:2–3'] },
    { prompt: 'Ask the angel anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'What do angels look like?', keys: 'look like wings face body see appearance', a: [
        'The Torah doesn’t say what the angels on the ladder looked like. Artists have imagined us in every way.',
        { gallery: ['manuscript', 'tapestry', 'classical', 'modernist-dream'], caption: 'Four artists, four answers.' } ] },
      { q: 'Why do the angels go up first?', keys: 'up first down order why ascend descend', a: [
        { say: 'The midrash, which Rashi follows: the angels who accompanied Jacob in the Land of Israel ascend, and those who will accompany him outside the Land descend.', src: ['Bereshit Rabbah 68:12 (his guardians)', 'Rashi on Genesis 28:12:1'] } ] },
      { q: 'What does ikonin mean?', keys: 'ikonin icon image likeness greek word', a: [
        { say: 'It’s the Greek <i>eikon</i>, an image or portrait, borrowed into the Rabbis’ Hebrew: Jacob’s likeness, engraved on high.', src: 'Bereshit Rabbah 68:12 (on Jacob)' } ] },
      { q: 'Do angels have wills of their own?', keys: 'free will choose independent orders obey jealous', a: [
        { say: 'Ramban says we do nothing, great or small, without orders. The Talmud’s jealous angels suggest otherwise.', src: ['Ramban on Genesis 28:12:1', 'Chullin 91b (the fan)'] } ] },
      { q: 'Who wrestled with Jacob?', keys: 'wrestle wrestled wrestling fight man angel night', a: [
        { say: 'The Torah says “a man.” Rashi says the Rabbis identified him as Esau’s guardian angel.', src: ['Genesis 32:25–29', 'Rashi on Genesis 32:25:2'] } ] },
      { q: 'What does Mahanaim mean?', keys: 'mahanaim camp camps name place', a: [
        { say: 'Jacob said, “This is God’s camp,” and named the place Mahanaim. The name comes from <i>machaneh</i>, “camp,” and its form suggests two camps. The next day, afraid of Esau, Jacob split his own people into two camps.', src: ['Genesis 32:2–3', 'Genesis 32:8'] } ] },
      { q: 'Where are angels in our prayers?', keys: 'prayer pray siddur liturgy kedushah bedtime', a: [
        'In the Kedushah, the congregation repeats the angels’ words from Isaiah: “Holy, holy, holy.”',
        { say: 'And at bedtime, many families ask for four angels to surround them.', src: 'bedtime' } ] },
      { q: 'Are angels real?', keys: 'real exist believe true', a: [
        { say: 'Ramban reads us as real messengers who carry out God’s decrees. Rambam reads the angels of this dream as prophets. Visit them both.', src: ['Ramban on Genesis 28:12:1', 'Guide 1:15'] } ] }
    ] },
    { rung: true },
    { next: { say: 'For the two great readings of us, visit Rambam and Ramban.', ids: ['rambam', 'ramban', 'jacob'] } }
  ] }
};
