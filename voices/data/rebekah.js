/* Rebekah's visit. Beat types are described at the top of jacob.js. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.scripts.rebekah = {

  k2: { beats: [
    { say: 'Hello! I’m Rebekah. I’m Jacob’s mother, and Esau’s mother too.' },
    { say: 'When I was young, I went to the well to get water. A man was there with ten camels.', src: ['Genesis 24:10–11', 'Genesis 24:15'] },
    { say: 'He asked me for a drink, so I gave him some water. Then I said, “I will also draw for your camels, until they finish drinking.”', src: 'Genesis 24:17–20' },
    { motion: { title: 'Water for the camels!', text: 'Pull the bucket up from the well… pull, pull, pull! Pour it out. Again! Ten thirsty camels!', icon: 'water' } },
    { say: 'That man had come a long way to find a wife for Isaac. My family asked me, “Will you go with this man?” And I said, “I will.”', src: ['Genesis 24:14', 'Genesis 24:58'] },
    { say: 'So I rode a camel all the way to my new home, and I married Isaac.', src: ['Genesis 24:61', 'Genesis 24:67'] },
    { say: 'Later, I had twin boys: Esau and Jacob! Esau loved to be outside. Jacob liked to stay home, near the tents.', src: ['Genesis 25:24–26', 'Genesis 25:27'] },
    { say: 'When they grew up, Jacob tricked his father to get a special blessing, and I helped him. But the trick made Esau very, very angry.', src: ['Genesis 27:5–17', 'Genesis 27:41'] },
    { say: 'I was scared for Jacob. So I told him, “Go far away to my brother Laban. Stay there until Esau isn’t angry anymore.”', src: 'Genesis 27:42–45' },
    { motion: { title: 'Pack a bag!', text: 'Let’s help Jacob pack. Put in some bread… a warm blanket… and a big hug from Mom. Zip it up!', icon: 'bag' } },
    { ask: 'How do you think I felt when Jacob left?',
      choices: [
        { label: 'Sad', reply: ['Yes. It’s hard to say goodbye to someone you love.'] },
        { label: 'Worried', reply: ['Yes. He was going so far away, all by himself.'] },
        { label: 'Hopeful', reply: ['Yes! I hoped he would be safe, and that one day he would come home.'] }
      ],
      tip: 'Let everyone answer out loud. Then choose what most of the group said.' },
    { say: 'Jacob was gone for a long, long time. But he wasn’t alone. That very first night, God told him, “I am with you.”', src: 'Genesis 28:15' },
    { ask: 'Have you ever said goodbye to someone you love? What helped?', discuss: true,
      tip: 'Take a few answers out loud. Then tap to hear Rebekah.',
      reveal: ['A hug helps. So do the words you say. I wanted Jacob to know that I sent him away because I love him.'] },
    { prompt: 'What would you like to ask me?', questions: [
      { q: 'Did you ride a camel?', a: [
        { say: 'I did! When I first saw Isaac, walking in a field, I got down off my camel to meet him.', src: ['Genesis 24:61', 'Genesis 24:64–65'] } ] },
      { q: 'Why did you help with the trick?', a: [
        { say: 'Before my boys were born, God told me that the older one would serve the younger one. I thought I was helping that happen.', src: 'Genesis 25:23' },
        'But the trick hurt people I loved. What do you think I should have done?' ] },
      { q: 'Were you brave?', a: [
        { say: 'I think so! I said “I will” and went far away to a new home, where I didn’t know anyone.', src: 'Genesis 24:58' } ] },
      { q: 'What was Jacob like?', a: [
        { say: 'Quiet. He liked to stay home near the tents. His brother Esau loved being outside.', src: 'Genesis 25:27' } ] }
    ] },
    { rung: true },
    { next: { say: 'Thank you for visiting me! Who do you want to meet next?', ids: ['jacob', 'esau', 'stone'] } }
  ] },

  g34: { beats: [
    { say: 'I’m Rebekah, Jacob’s mother. I’m the one who sent him away, and I’ll tell you why. But my story starts at a well.' },
    { say: 'A stranger came to our town with ten camels and asked me for a drink. I gave him water, and then I said, “I will also draw for your camels, until they finish drinking.”', src: ['Genesis 24:10', 'Genesis 24:17–20'] },
    { say: 'He turned out to be the servant of Abraham, my grandfather’s brother. He had come to find a wife for Abraham’s son, Isaac.', src: ['Genesis 24:14', 'Genesis 24:15'] },
    { say: 'My family asked me, “Will you go with this man?” And I said, “I will.”', src: 'Genesis 24:58' },
    { ask: 'Would you leave home to go somewhere you’d never been, to live with people you’d never met?',
      choices: [
        { label: 'Yes, what an adventure!', reply: [{ say: 'That’s how I felt. My family wanted me to wait about ten days. When they asked me, I said I would go right away.', src: ['Genesis 24:55', 'Genesis 24:58'] }] },
        { label: 'No way!', reply: ['It was a big step. I had never even met Isaac. But when they asked me, I said yes.'] },
        { label: 'Only if someone came with me', reply: [{ say: 'Someone did! My nurse came with me. Her name was Deborah. Remember her: she comes back at the end of my story.', src: ['Genesis 24:59', 'Genesis 35:8'] }] }
      ],
      tip: 'Hear a few answers. Then choose one.' },
    { say: 'I married Isaac. For years we had no children. Then I was expecting twins, and they struggled inside me so much that I said, “If so, why do I exist?”', src: ['Genesis 25:21', 'Genesis 25:22'] },
    { say: 'I went to ask God. God told me that two nations were inside me, and “the older shall serve the younger.”', src: 'Genesis 25:23' },
    { say: 'My boys grew up very different. And the Torah says it plainly: “Isaac favored Esau because he had a taste for game; but Rebekah favored Jacob.”', src: 'Genesis 25:28' },
    { say: 'When Isaac was old and blind, I heard him tell Esau to hunt and cook for him, so that he could bless him.', src: 'Genesis 27:1–5' },
    { say: 'I told Jacob to bring me two young goats. I cooked them the way Isaac liked, dressed Jacob in Esau’s best clothes, and covered his arms and neck with the goatskins.', src: ['Genesis 27:9', 'Genesis 27:14–16'] },
    { say: 'Jacob was afraid he’d be caught and get a curse instead of a blessing. I said, “Your curse, my son, be upon me!”', src: ['Genesis 27:12', 'Genesis 27:13'] },
    { ask: 'Was I right to help Jacob trick his father?', discuss: true,
      tip: 'Let students argue both sides. Then tap to hear Rebekah.',
      reveal: [
        { say: 'I believed what God told me: the older would serve the younger. I thought I was helping it come true.', src: 'Genesis 25:23' },
        'But look what happened. Esau was heartbroken, and I had to send my son away. What do you think now?' ] },
    { say: 'When I heard that Esau wanted to hurt Jacob, I told Jacob, “Flee at once to Haran, to my brother Laban.”', src: ['Genesis 27:42', 'Genesis 27:43'] },
    { say: 'I told him to stay there awhile. In Hebrew I said <i>yamim achadim</i>, “a few days.” And I promised, “Then I will fetch you from there.”', src: ['Genesis 27:44', 'Genesis 27:45'] },
    { say: 'But I didn’t tell Isaac about Esau’s threat. I told him I was worried that Jacob would marry one of the local women.', src: 'Genesis 27:46' },
    { ask: 'Why do you think I didn’t tell Isaac the real reason?',
      choices: [
        { label: 'So Isaac wouldn’t be upset', reply: ['Maybe. He was old and blind. Hearing that one son wanted to hurt the other might have been too much.'] },
        { label: 'To keep Esau out of trouble', reply: ['Maybe. Esau is my son too.'] },
        { label: 'So Isaac would bless Jacob again', reply: [{ say: 'It worked. Isaac called Jacob in and blessed him again, and this time he knew exactly who Jacob was.', src: 'Genesis 28:1–4' }] }
      ],
      tip: 'Let students explain their choice before you tap it.' },
    { say: 'It wasn’t a few days. Jacob stayed away for twenty years.', src: 'Genesis 31:41' },
    { prompt: 'What do you want to ask me?', questions: [
      { q: 'Did you ever see Jacob again?', keys: 'see again jacob come back return home reunion', a: [
        'The Torah never tells us. It doesn’t even tell us when I died.',
        { say: 'But Rashi noticed something. When Jacob was on his way home, my old nurse Deborah was with him. Why? Rashi says I kept my promise: I sent Deborah to tell Jacob it was time to come home.', src: ['Genesis 35:8', 'Rashi on Genesis 35:8:1'] },
        { say: 'Deborah died on the way, near Beit El. They buried her under an oak tree and named it Allon-bacuth, the Oak of Weeping.', src: 'Genesis 35:8' } ] },
      { q: 'Why did you love Jacob more?', keys: 'love loved favorite favor more why', a: [
        { say: 'The Torah doesn’t say why. It tells us that Isaac favored Esau because of the game Esau hunted, and that I favored Jacob.', src: 'Genesis 25:28' },
        { say: 'Maybe it was because of what God told me before my boys were born.', src: 'Genesis 25:23' } ] },
      { q: 'Was it hard to leave home?', keys: 'leave home hard scared brave family', a: [
        { say: 'My family wanted me to wait about ten days. When they asked me, I said I would go right away.', src: ['Genesis 24:55', 'Genesis 24:58'] } ] },
      { q: 'What was Jacob like?', keys: 'jacob like boy kid young quiet', a: [
        { say: 'The Torah says Jacob was “a mild man who stayed in camp,” and Esau was “a skillful hunter, a man of the outdoors.”', src: 'Genesis 25:27' } ] }
    ] },
    { rung: true },
    { next: { say: 'Thank you for visiting. Isaac can tell you about the blessing, and Esau has his own side of the story.', ids: ['isaac', 'esau', 'jacob'] } }
  ] }
};
