/* Isaac's visit. Beat types are described at the top of jacob.js. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.scripts.isaac = {

  g34: { beats: [
    { say: 'I’m Isaac, father of Jacob and Esau. When this story happened, I was old, and my eyes were too dim to see.', src: 'Genesis 27:1' },
    { say: 'I called my older son, Esau. I asked him to hunt some game and cook me the dish I love, so that I could give him my innermost blessing before I died.', src: 'Genesis 27:1–4' },
    { say: 'Soon, someone came in and said, “Father.” I asked, “Which of my sons are you?”', src: 'Genesis 27:18' },
    { say: 'He said, “I am Esau, your first-born.” But he had come back so fast! I asked, “How did you succeed so quickly, my son?”', src: ['Genesis 27:19', 'Genesis 27:20'] },
    { say: 'So I said, “Come closer that I may feel you, my son.”', src: 'Genesis 27:21' },
    { motion: { title: 'Guess the voice!', text: 'Everyone close your eyes. The teacher taps one person, who says “Shalom!” Can you guess who it was, just from the voice?', icon: 'voice' } },
    { say: 'His arms felt hairy, like Esau’s. But his voice… I said, “The voice is the voice of Jacob, yet the hands are the hands of Esau.”', src: 'Genesis 27:22' },
    { say: 'I said, “Come close and kiss me, my son.” When he kissed me, I smelled his clothes. They smelled like the fields, like Esau. So I blessed him.', src: 'Genesis 27:26–29' },
    { say: 'Right after Jacob left, Esau came in with his food. I asked, “Who are you?” He said, “I am your son, Esau, your first-born!”', src: 'Genesis 27:30–32' },
    { say: 'I was seized with very violent trembling. I had blessed someone else! But I said, “Now he must remain blessed!”', src: 'Genesis 27:33' },
    { ask: 'Why do you think I didn’t take the blessing back?',
      choices: [
        { label: 'A blessing can’t be taken back', reply: ['That’s how it felt to me. Once words are spoken, they’re out in the world.'] },
        { label: 'Maybe God wanted it that way', reply: [{ say: 'Maybe. Before the twins were born, God told Rebekah that the older would serve the younger.', src: 'Genesis 25:23' }] },
        { label: 'He still loved Jacob', reply: ['I did. Jacob tricked me, but he was still my son.'] }
      ],
      tip: 'Let students explain their choice before you tap it.' },
    { say: 'Esau begged me, “Bless me too, Father!” So I gave him a blessing too.', src: ['Genesis 27:38', 'Genesis 27:39–40'] },
    { say: 'Later, Rebekah told me she didn’t want Jacob marrying one of the local women. So I called Jacob in, and I blessed him again.', src: ['Genesis 27:46', 'Genesis 28:1'] },
    { say: 'This time, I knew exactly who he was. I said, “May you and your offspring be granted the blessing of Abraham.”', src: 'Genesis 28:3–4' },
    { ask: 'Jacob already had my blessing. Why would I bless him again?', discuss: true,
      tip: 'Take a few answers. Then tap to hear Isaac.',
      reveal: [
        'The first blessing was for someone pretending to be Esau. This one was for Jacob, as himself.',
        'And a blessing is a way to say goodbye. He was leaving home, and I wanted him to carry something from me.' ] },
    { say: 'Later, in Jacob’s dream, God said, “I am the Eternal, the God of your father Abraham and the God of Isaac.” That’s me! Jacob heard my name in his dream.', src: 'Genesis 28:13' },
    { prompt: 'What do you want to ask me?', questions: [
      { q: 'Were you angry at Jacob?', keys: 'angry mad upset jacob trick', a: [
        { say: 'I told Esau, “Your brother came with guile and took away your blessing.” Guile means sneaky tricks.', src: 'Genesis 27:35' },
        { say: 'But I didn’t take the blessing back. And later, I blessed Jacob again.', src: 'Genesis 28:1–4' } ] },
      { q: 'What’s your favorite food?', keys: 'food favorite eat game meat taste', a: [
        { say: 'The Torah says I “had a taste for game,” the wild animals Esau hunted.', src: 'Genesis 25:28' },
        { say: 'But Rebekah cooked two young goats just the way I liked, and I couldn’t tell the difference!', src: ['Genesis 27:9', 'Genesis 27:14'] } ] },
      { q: 'What does a blessing do?', keys: 'blessing bless mean do', a: [
        'A blessing is a wish for someone’s future, said out loud. In my family, a father’s blessing was a very big deal.',
        { say: 'Jewish parents still bless their children on Friday night, with words that go back to my son Jacob blessing his grandsons.', src: 'Genesis 48:20' },
        'For daughters, parents say, “May God make you like Sarah, Rebekah, Rachel, and Leah.” That’s my Rebekah!' ] },
      { q: 'Did you ever see Jacob again?', keys: 'see again jacob come back return', a: [
        { say: 'Yes! Many years later, Jacob came home to me at Mamre, in Hebron.', src: 'Genesis 35:27' },
        { say: 'When I died, both of my sons, Esau and Jacob, buried me together.', src: 'Genesis 35:29' } ] },
      { q: 'How old were you?', keys: 'old age years how', a: [
        { say: 'I was sixty when the twins were born, and I lived to be a hundred and eighty!', src: ['Genesis 25:26', 'Genesis 35:28'] } ] }
    ] },
    { rung: true },
    { next: { say: 'Thank you for visiting an old man. Rebekah can tell you why she helped Jacob, and Esau can tell you how it felt to lose the blessing.', ids: ['rebekah', 'esau', 'jacob'] } }
  ] }
};
