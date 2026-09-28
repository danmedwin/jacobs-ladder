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
    { say: 'When the boys grew up, I made a plan so that Jacob would get his father’s special blessing. Jacob tricked his father, and the trick made Esau very, very angry.', src: ['Genesis 27:5–17', 'Genesis 27:41'] },
    { say: 'I was scared for Jacob. So I told him, “Go far away to my brother Laban. Stay there until Esau isn’t angry anymore.”', src: 'Genesis 27:42–45' },
    { motion: { title: 'Pack a bag!', text: 'Let’s help Jacob pack. Put in some bread… a warm blanket… and a big hug from Mom. Zip it up!', icon: 'bag' } },
    { ask: 'How do you think I felt when Jacob left?',
      choices: [
        { label: 'Sad', reply: ['Yes. It’s hard to say goodbye to someone you love.'] },
        { label: 'Worried', reply: ['Yes. He was going so far away, all by himself.'] },
        { label: 'Hopeful', reply: ['Yes! I hoped he would be safe, and that one day he would come home.'] }
      ],
      tip: 'Let everyone answer out loud. Then choose what most of the group said.' },
    { say: 'Jacob was gone for a long, long time. But he wasn’t alone. On his way, God told him, “I am with you.”', src: 'Genesis 28:15' },
    { ask: 'Have you ever said goodbye to someone you love? What helped?', discuss: true,
      tip: 'Take a few answers out loud. Then tap to hear Rebekah.',
      reveal: ['A hug helps. So do the words you say. I wanted Jacob to know that I sent him away because I love him.'] },
    { prompt: 'What would you like to ask me?', questions: [
      { q: 'Did you ride a camel?', a: [
        { say: 'I did! When I first saw Isaac, walking in a field, I got down off my camel to meet him.', src: ['Genesis 24:61', 'Genesis 24:64–65'] } ] },
      { q: 'Why did you make that plan?', a: [
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
        { say: 'Deborah died on the way, near Beit El. They buried her under an oak and named it Allon-bacuth, the Oak of Weeping. Rashi says that there, Jacob also learned that I had died.', src: ['Genesis 35:8', 'Rashi on Genesis 35:8'] } ] },
      { q: 'Why did you love Jacob more?', keys: 'love loved favorite favor more why pick picked choose chose', a: [
        { say: 'The Torah doesn’t say why. It tells us that Isaac favored Esau because of the game Esau hunted, and that I favored Jacob.', src: 'Genesis 25:28' },
        { say: 'Maybe it was because of what God told me before my boys were born.', src: 'Genesis 25:23' } ] },
      { q: 'Was it hard to leave home?', keys: 'leave home hard scared brave family', a: [
        { say: 'My family wanted me to wait about ten days. When they asked me, I said I would go right away.', src: ['Genesis 24:55', 'Genesis 24:58'] } ] },
      { q: 'What was Jacob like?', keys: 'jacob like boy kid young quiet', a: [
        { say: 'The Torah says Jacob was “a mild man who stayed in camp,” and Esau was “a skillful hunter, a man of the outdoors.”', src: 'Genesis 25:27' } ] }
    ] },
    { rung: true },
    { next: { say: 'Thank you for visiting. Isaac can tell you about the blessing, and Esau has his own side of the story.', ids: ['isaac', 'esau', 'jacob'] } }
  ] },

  g57: { beats: [
    { say: 'I’m Rebekah, Rivkah in Hebrew. In this story I’m the one who chooses. I chose to leave home. I chose which son would get the blessing. And I chose to send that son away.' },
    { say: 'It started at a well. A stranger asked me for a drink, and I said, “Drink, my lord.” Then I said, “I will also draw for your camels, until they finish drinking.” He had ten camels.', src: ['Genesis 24:10', 'Genesis 24:17–20'] },
    { say: 'He had come to find a wife for Isaac. My family asked me, “Will you go with this man?” I answered with one Hebrew word: <i>Eilech</i>, “I will.”', src: ['Genesis 24:14', 'Genesis 24:58'] },
    { say: 'Years later I was carrying twins, and “the children struggled in her womb.” I said, “If so, why do I exist?” and I went to inquire of God.', src: 'Genesis 25:22' },
    { say: 'The answer came to me: “Two nations are in your womb… And the older shall serve the younger.”', src: 'Genesis 25:23' },
    { ask: 'Imagine knowing something about your children’s future that no one else knows. What would you do with it?', discuss: true,
      tip: 'Take a few answers. Then tap to hear Rebekah.',
      reveal: ['I kept it. And when the moment came, I acted on it.'] },
    { say: 'The boys grew up, and the Torah says, “Isaac favored Esau because he had a taste for game; but Rebekah favored Jacob.” Notice: it gives a reason for Isaac’s love. It gives none for mine.', src: 'Genesis 25:28' },
    { say: '“Rebekah had been listening as Isaac spoke to his son Esau.” He was about to bless him. So I told Jacob, “Now, my son, listen carefully as I instruct you.”', src: ['Genesis 27:5', 'Genesis 27:8'] },
    { say: 'Jacob was afraid: “If my father touches me, I shall appear to him as a trickster and bring upon myself a curse, not a blessing.” I answered, “Your curse, my son, be upon me!”', src: ['Genesis 27:12', 'Genesis 27:13'] },
    { say: 'I cooked the dish Isaac liked, dressed Jacob in Esau’s best clothes, and covered his hands and neck with the skins of the young goats.', src: 'Genesis 27:14–17' },
    { ask: 'Was I right? Put me on trial.', discuss: true,
      tip: 'Split the group into prosecution and defense: two minutes to prepare, one minute each. Then tap to hear Rebekah.',
      reveal: [
        { say: 'My defense: God told me the older would serve the younger. I made sure it happened.', src: 'Genesis 25:23' },
        'My sentence: my son had to run for his life, and the Torah never shows me with him again.' ] },
    { say: 'When I heard that Esau planned to kill Jacob, I said, “Flee at once to Haran, to my brother Laban. Stay with him awhile, until your brother’s fury subsides.”', src: ['Genesis 27:42', 'Genesis 27:43', 'Genesis 27:44'] },
    { say: '“Awhile” in Hebrew is <i>yamim achadim</i>, “a few days.” It became twenty years.', src: ['Genesis 27:44', 'Genesis 31:41'] },
    { ask: 'Then I said, “Let me not lose you both in one day!” Both? Jacob was the one in danger. Who else was I afraid to lose?', discuss: true,
      tip: 'Let the group work it out. Then tap to hear Rebekah.',
      reveal: [
        { say: 'Esau. Rashi imagines it this way: if Esau attacks Jacob and Jacob kills him, Esau’s sons will rise and kill Jacob. One fight, and I bury both of my boys.', src: 'Rashi on Genesis 27:45:2' },
        'When your two children are at war, a parent can’t win.' ] },
    { say: 'Then I went to Isaac. I didn’t mention Esau’s threat. I said, “I am disgusted with my life because of the Hittite women.” And Isaac called Jacob in, blessed him again, and sent him to my family.', src: ['Genesis 27:46', 'Genesis 28:1–5'] },
    { prompt: 'Ask me anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Did you ever see Jacob again?', keys: 'see again jacob come back return home reunion', a: [
        'The Torah never tells us. It doesn’t even tell us when I died.',
        { say: 'Rashi says I kept my promise to send for him: I sent my old nurse Deborah to tell Jacob to come home. She died on the way, near Beit El, and they named the oak where she was buried Allon-bacuth, the Oak of Weeping.', src: ['Genesis 35:8', 'Rashi on Genesis 35:8:1'] },
        { say: 'And Rashi says that there, Jacob learned that I had died too.', src: 'Rashi on Genesis 35:8' } ] },
      { q: 'How did you know what Esau was planning?', keys: 'know knew esau plan planning kill heard reported how', a: [
        { say: 'Good question. The Torah says Esau said it “to himself.” Then it says his words “were reported to Rebekah.” Reported by whom?', src: ['Genesis 27:41', 'Genesis 27:42'] },
        { say: 'Rashi says the holy spirit told me what Esau was thinking in his heart.', src: 'Rashi on Genesis 27:42:1' } ] },
      { q: 'Did you tell Isaac what God told you?', keys: 'tell told isaac prophecy oracle secret older younger god', a: [
        'The Torah never says. What do you think would have happened if I had?' ] },
      { q: 'Why did you love Jacob more?', keys: 'love loved favorite favor more why pick picked choose chose', a: [
        { say: 'The Torah gives no reason. It says only, “but Rebekah favored Jacob.”', src: 'Genesis 25:28' },
        { say: 'Maybe it was what God told me before they were born.', src: 'Genesis 25:23' } ] },
      { q: 'Did you ever talk to Esau about it?', keys: 'esau talk talked say said speak tell', a: [
        'The Torah never records a single word between Esau and me. Not one.' ] },
      { q: 'Who was Deborah?', keys: 'deborah nurse who', a: [
        { say: 'My nurse. When I left home, “they sent off their sister Rebekah and her nurse.” The Torah names her only when she dies, years later, near Beit El.', src: ['Genesis 24:59', 'Genesis 35:8'] } ] },
      { q: 'Where are you buried?', keys: 'buried bury grave cave machpelah where die died', a: [
        { say: 'In the cave of Machpelah, where Abraham and Sarah are buried. Jacob mentions it at the end of his life: “there Isaac and his wife Rebekah were buried.”', src: 'Genesis 49:29–31' } ] }
    ] },
    { rung: true },
    { next: { say: 'You’ve heard me. Now hear Isaac, who blessed Jacob twice, and Esau, who wept.', ids: ['isaac', 'esau', 'jacob'] } }
  ] },

  parents: { beats: [
    { say: 'I’m Rebekah. I’d like to speak with you parent to parent, about sending a child away.' },
    { say: 'I left home myself. My brother and mother asked that I stay “some ten days.” When they asked me, “Will you go with this man?” I said, <span class="he-inline" lang="he" dir="rtl">אֵלֵךְ</span> “I will.”', src: ['Genesis 24:55', 'Genesis 24:58'] },
    { say: 'My pregnancy was so hard that I said, <span class="he-inline" lang="he" dir="rtl">אִם־כֵּן לָמָּה זֶּה אָנֹכִי</span> “If so, why do I exist?” No one is sure what the words mean. Rashi heard them as: if the pain is this great, why did I long and pray to become pregnant?', src: ['Genesis 25:22', 'Rashi on Genesis 25:22 (why do I exist)'] },
    { say: 'I went to inquire of God, and the answer came to me: “Two nations are in your womb… And the older shall serve the younger.”', src: 'Genesis 25:23' },
    { say: 'Then the Torah says, “Isaac favored Esau because he had a taste for game; but Rebekah favored Jacob.” In Hebrew, Isaac’s love is told in the past tense and comes with a reason. Mine is in the present tense and comes with none: <span class="he-inline" lang="he" dir="rtl">וְרִבְקָה אֹהֶבֶת אֶת־יַעֲקֹב</span>', src: 'Genesis 25:28' },
    { ask: 'Is a love with a reason different from a love without one? What did each of my sons hear?', discuss: true,
      tip: 'Pairs first. Then take a few answers and tap to hear Rebekah.',
      reveal: ['Children notice. Both of my sons knew exactly where they stood with each of us.'] },
    { say: 'When I heard Isaac promise Esau his blessing, I made a plan. Jacob feared he would earn a curse. I told him, <span class="he-inline" lang="he" dir="rtl">עָלַי קִלְלָתְךָ בְּנִי</span> “Your curse, my son, be upon me!”', src: ['Genesis 27:5–12', 'Genesis 27:13'] },
    { ask: 'Faith in what God told me, favoritism, or both? What would you have done?', discuss: true,
      tip: 'Let people disagree. Then tap to hear Rebekah.',
      reveal: [
        { say: 'I had God’s word, and I acted on it.', src: 'Genesis 25:23' },
        'And I paid for it with my son.' ] },
    { say: 'When I learned that Esau meant to kill his brother, I told Jacob to flee to my brother Laban and stay there <span class="he-inline" lang="he" dir="rtl">יָמִים אֲחָדִים</span> “a few days.” The Revised JPS translates it “awhile.”', src: ['Genesis 27:42–44'] },
    { say: 'The same two words come back later. Jacob served seven years for Rachel, “and they seemed to him but a few days.” For him, love made seven years into a few days. For me, a few days became twenty years.', src: ['Genesis 29:20', 'Genesis 31:41'] },
    { say: 'And I said, <span class="he-inline" lang="he" dir="rtl">לָמָה אֶשְׁכַּל גַּם־שְׁנֵיכֶם יוֹם אֶחָד</span> “Let me not lose you both in one day!” Rashi explains: if Esau attacks and Jacob kills him, Esau’s sons will kill Jacob. I would bury both.', src: ['Genesis 27:45', 'Rashi on Genesis 27:45:2'] },
    { say: 'I went to Isaac and spoke only of the Hittite women. He blessed Jacob again, knowingly this time, and sent him off.', src: ['Genesis 27:46', 'Genesis 28:1–5'] },
    { say: 'In that verse, the Torah calls me <span class="he-inline" lang="he" dir="rtl">אֵם יַעֲקֹב וְעֵשָׂו</span> “mother of Jacob and Esau.” Rashi wrote, “I do not know what the addition of these words is intended to tell us.” I think I know. On the day one son left because of the other, I was still the mother of both.', src: ['Genesis 28:5', 'Rashi on Genesis 28:5:1'] },
    { ask: 'When you imagine your child leaving home someday, what do you most want them to carry with them?', discuss: true,
      tip: 'This one is for pairs, with no need to share with the room. Then tap to hear Rebekah.',
      reveal: [{ say: 'I sent mine with a promise: “Then I will fetch you from there.” I hope he heard the love in it.', src: 'Genesis 27:45' }] },
    { say: 'The Torah never shows me with Jacob again, and never records my death. Rashi says I sent my nurse Deborah to call him home, that she died on the way, and that under the oak where they buried her, Jacob learned I had died too.', src: ['Genesis 35:8', 'Rashi on Genesis 35:8:1', 'Rashi on Genesis 35:8'] },
    { say: 'Rashi also says why the Torah keeps quiet about my death: so that people would not curse the mother who gave birth to Esau.', src: 'Rashi on Genesis 35:8' },
    { prompt: 'Ask Rebekah anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Did you ever see Jacob again?', keys: 'see again jacob come back return home reunion saw', a: [
        { say: 'The Torah never shows it. Rashi says my nurse Deborah died on the way to bring him home, and that at her grave Jacob learned I had died too.', src: ['Genesis 35:8', 'Rashi on Genesis 35:8:1', 'Rashi on Genesis 35:8'] } ] },
      { q: 'Why did you favor Jacob?', keys: 'favor favored favorite love loved pick picked choose chose why', a: [
        { say: 'The Torah gives no reason, only the present tense: I love him. And there was what God told me before my sons were born.', src: ['Genesis 25:28', 'Genesis 25:23'] } ] },
      { q: 'Did you tell Isaac what God told you?', keys: 'tell told isaac prophecy oracle secret older younger god', a: [
        'The Torah never says. It never shows Isaac and me talking about our sons’ futures at all, until the day I sent Jacob away.' ] },
      { q: 'How did you know what Esau was planning?', keys: 'know knew esau plan planning kill heard reported how', a: [
        { say: 'The Torah says Esau said it “to himself,” and then that his words “were reported to Rebekah.” Rashi says the holy spirit told me what he was thinking in his heart.', src: ['Genesis 27:41', 'Genesis 27:42', 'Rashi on Genesis 27:42:1'] } ] },
      { q: 'Were you a prophet?', keys: 'prophet prophetess prophecy holy spirit oracle', a: [
        { say: 'When I went to inquire, God answered me. Rashi says the answer came through a messenger, Shem, and that later the holy spirit showed me Esau’s thoughts.', src: ['Genesis 25:23', 'Rashi on Genesis 25:23:1', 'Rashi on Genesis 27:42:1'] } ] },
      { q: 'Did you ever talk to Esau about it?', keys: 'esau talk talked say said speak tell', a: [
        'The Torah never records a single word between Esau and me. Not one.' ] },
      { q: 'Why did Isaac love Esau?', keys: 'isaac love loved esau why game taste', a: [
        { say: 'The Torah says, “because he had a taste for game,” literally, because game was in his mouth. Rashi gives two readings: the Targum’s, that the game was in Isaac’s mouth, and a midrash that Esau “hunted” his father with his words.', src: ['Genesis 25:28', 'Rashi on Genesis 25:28:1'] } ] },
      { q: 'Who was Deborah?', keys: 'deborah nurse who', a: [
        { say: 'My nurse. When I left home, “they sent off their sister Rebekah and her nurse.” The Torah names her only when she dies, near Beit El.', src: ['Genesis 24:59', 'Genesis 35:8'] } ] },
      { q: 'Where are you buried?', keys: 'buried bury grave cave machpelah where die died', a: [
        { say: 'In the cave of Machpelah. Jacob says it at the end of his life: “there Isaac and his wife Rebekah were buried.”', src: 'Genesis 49:29–31' } ] }
    ] },
    { rung: true },
    { next: { say: 'Now visit Isaac, who blessed our son twice, the second time knowing exactly who he was.', ids: ['isaac', 'jacob', 'esau'] } }
  ] }
};
