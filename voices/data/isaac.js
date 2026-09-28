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
  ] },

  g57: { beats: [
    { say: 'I’m Isaac, Yitzchak in Hebrew. My name means “he will laugh.” There wasn’t much laughing in this story.' },
    { say: '“When Isaac was old and his eyes were too dim to see,” I called my older son and told him, “Take your gear, your quiver and bow, and go out into the open and hunt me some game.” Then I would give him my innermost blessing.', src: 'Genesis 27:1–4' },
    { say: 'Someone came in and said, “Father.” I asked, “Yes, which of my sons are you?” He said, “I am Esau, your first-born.”', src: ['Genesis 27:18', 'Genesis 27:19'] },
    { say: 'He was back too soon. I asked, “How did you succeed so quickly, my son?” He said, “Because the Eternal your God granted me good fortune.”', src: 'Genesis 27:20' },
    { say: 'I said, “Come closer that I may feel you, my son.” And then: “The voice is the voice of Jacob, yet the hands are the hands of Esau.”', src: ['Genesis 27:21', 'Genesis 27:22'] },
    { ask: 'My ears said Jacob. My hands said Esau. Why did I bless him anyway?',
      choices: [
        { label: 'He trusted his hands', reply: [{ say: 'That’s what the Torah says: “He did not recognize him, because his hands were hairy like those of his brother Esau; and so he blessed him.”', src: 'Genesis 27:23' }] },
        { label: 'He wanted to believe it', reply: [{ say: 'Maybe. I asked one more time, “Are you really my son Esau?” and he said, “I am.”', src: 'Genesis 27:24' }] },
        { label: 'He knew, and did it anyway', reply: ['The Torah never says I knew, but some readers think so. What in the story makes you suspect it?'] }
      ],
      tip: 'Ask students to point to the words in the story that support their choice.' },
    { say: 'I asked him to come close and kiss me. When he did, I smelled his clothes and said, “Ah, the smell of my son is like the smell of the fields that God has blessed.”', src: 'Genesis 27:26–27' },
    { say: 'And I blessed him: “May God give you Of the dew of heaven and the fat of the earth… Be master over your brothers.”', src: 'Genesis 27:28–29' },
    { say: 'Right after Jacob left, Esau came in with his dish. I asked, “Who are you?” He said, “I am your son, Esau, your first-born!”', src: 'Genesis 27:30–32' },
    { say: '“Isaac was seized with very violent trembling.” I asked who had brought me the meal, and then I said, “I blessed him; now he must remain blessed!”', src: 'Genesis 27:33' },
    { ask: 'Why couldn’t I take it back? Is a blessing a promise, a gift, or something else?', discuss: true,
      tip: 'Split the group: “He should have taken it back” against “He was right to keep it.” Then tap to hear Isaac.',
      reveal: [
        { say: 'Rashi says I confirmed it on purpose, so that no one could say Jacob got the blessing only by tricking me.', src: 'Rashi on Genesis 27:33:4' },
        'Words spoken over a child are hard to take back. Maybe that’s the point.' ] },
    { say: 'I told Esau, “Your brother came with guile and took away your blessing.” He begged for a blessing of his own. I asked, “What, then, can I still do for you, my son?” And I found words for him too.', src: ['Genesis 27:35', 'Genesis 27:37', 'Genesis 27:38–40'] },
    { say: 'Later, “Isaac sent for Jacob and blessed him,” by his own name this time: “May El Shaddai bless you… May you and your offspring be granted the blessing of Abraham.”', src: ['Genesis 28:1', 'Genesis 28:3–4'] },
    { ask: 'What’s different about the second blessing?',
      choices: [
        { label: 'It was honest', reply: ['Yes. The first was for someone pretending to be Esau. The second was for Jacob.'] },
        { label: 'It was a different blessing', reply: [{ say: 'It was. The first was about dew, grain, wine, and power over his brothers. The second passed on the blessing of Abraham: children, and the land God promised.', src: ['Genesis 27:28–29', 'Genesis 28:3–4'] }] },
        { label: 'It was a goodbye', reply: [{ say: 'It was. Right after it, “Isaac sent Jacob off.”', src: 'Genesis 28:5' }] }
      ],
      tip: 'If there’s time, open both blessings on the source cards and compare them.' },
    { say: 'Later, in Jacob’s dream, God said, “I am the Eternal, the God of your father Abraham and the God of Isaac.” Jacob heard my name at Beit El.', src: 'Genesis 28:13' },
    { prompt: 'Ask me anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Did you know it was Jacob?', keys: 'know knew jacob recognize suspect suspected', a: [
        { say: 'I asked twice: “whether you are really my son Esau or not,” and then, “Are you really my son Esau?” He said, “I am.” The Torah leaves the rest to you.', src: ['Genesis 27:21', 'Genesis 27:24'] } ] },
      { q: 'Were you angry at Jacob?', keys: 'angry mad upset jacob trick tricked guile', a: [
        { say: 'I told Esau, “Your brother came with guile and took away your blessing.” But I didn’t take the blessing back, and later I blessed Jacob again.', src: ['Genesis 27:35', 'Genesis 28:1–4'] } ] },
      { q: 'Why were your eyes dim?', keys: 'eyes blind dim see sight why', a: [
        { say: 'Rashi gives three reasons. One: the smoke of the incense Esau’s wives burned to idols. Two: when I lay bound on the altar and my father was about to sacrifice me, the angels wept, and their tears fell into my eyes. Three: so that Jacob could receive the blessing.', src: 'Rashi on Genesis 27:1:1' } ] },
      { q: 'Why did you love Esau more?', keys: 'love loved esau more favorite why', a: [
        { say: 'The Torah gives a reason: I “had a taste for game.” What do you think the real reason was?', src: 'Genesis 25:28' } ] },
      { q: 'What did you give Esau?', keys: 'esau blessing give gave what', a: [
        { say: '“See, your abode shall enjoy the fat of the earth And the dew of heaven above. Yet by your sword you shall live, And you shall serve your brother; But when you grow restive, You shall break his yoke from your neck.”', src: 'Genesis 27:39–40' } ] },
      { q: 'Did you see Jacob again?', keys: 'see again jacob come back return home', a: [
        { say: 'Yes. “Jacob came to his father Isaac at Mamre.” And when I died, in ripe old age, “he was buried by his sons Esau and Jacob.”', src: ['Genesis 35:27', 'Genesis 35:29'] } ] },
      { q: 'Why does God say “the God of Isaac”?', keys: 'god of isaac name why say called', a: [
        { say: 'Rashi noticed that God doesn’t usually attach the divine name to someone still alive. He says God made an exception for me, because I was blind and stuck at home, as if my days of doing wrong were over.', src: 'Rashi on Genesis 28:13:2' } ] },
      { q: 'How old were you?', keys: 'old age years how', a: [
        { say: 'Sixty when the twins were born, and a hundred and eighty when I died.', src: ['Genesis 25:26', 'Genesis 35:28'] } ] },
      { q: 'What does a blessing do?', keys: 'blessing bless mean do why', a: [
        'A blessing puts a hope for someone’s future into words, out loud, where they can hear it.',
        { say: 'Jewish parents still bless their children on Friday night, with words from my son Jacob.', src: 'Genesis 48:20' } ] }
    ] },
    { rung: true },
    { next: { say: 'Go hear Rebekah, who planned it all, and Esau, who lost the blessing.', ids: ['rebekah', 'esau', 'jacob'] } }
  ] },

  parents: { beats: [
    { say: 'I’m Isaac. You first met me as a child, bound on an altar by my own father. In this story I am the father: old, blind, and holding a blessing.' },
    { say: 'Rashi gives three reasons my eyes grew dim. The one people remember: when I lay bound on the altar, the heavens opened, the angels wept, and their tears fell into my eyes.', src: 'Rashi on Genesis 27:1:1' },
    { ask: 'Rashi’s other two reasons: the smoke of my daughters-in-law’s idols, or so that Jacob could receive the blessing. Which explanation speaks to you, and why?', discuss: true,
      tip: 'Pairs first. Then tap to hear Isaac.',
      reveal: ['Maybe all three are true at once. A father can carry a wound from his own childhood, miss what is happening in his own house, and still be part of a larger story he can’t see.'] },
    { say: 'I asked Esau to hunt and prepare my favorite dish, “so that I may give you my innermost blessing before I die.” In Hebrew: <span class="he-inline" lang="he" dir="rtl">בַּעֲבוּר תְּבָרֶכְךָ נַפְשִׁי</span> “so that my soul may bless you.”', src: 'Genesis 27:4' },
    { say: 'Then Jacob came in, dressed as his brother. I felt his hands and said, <span class="he-inline" lang="he" dir="rtl">הַקֹּל קוֹל יַעֲקֹב וְהַיָּדַיִם יְדֵי עֵשָׂו</span> “The voice is the voice of Jacob, yet the hands are the hands of Esau.”', src: ['Genesis 27:21', 'Genesis 27:22'] },
    { ask: 'I heard Jacob’s voice and blessed him anyway. Did I know? Have you ever chosen not to know something about your child?', discuss: true,
      tip: 'This one is for pairs. Then tap to hear Isaac.',
      reveal: [{ say: 'The Torah says, “He did not recognize him, because his hands were hairy like those of his brother Esau.” It doesn’t say what I suspected, or what I chose not to ask.', src: 'Genesis 27:23' }] },
    { say: 'When Esau came in, “Isaac was seized with very violent trembling.” Rashi quotes the Aramaic translation, which reads it as bewilderment.', src: ['Genesis 27:33', 'Rashi on Genesis 27:33:1'] },
    { say: 'And then I said, <span class="he-inline" lang="he" dir="rtl">גַּם־בָּרוּךְ יִהְיֶה</span> “now he must remain blessed!” Rashi says I confirmed it deliberately, so that no one could say Jacob got the blessing only through deceit.', src: ['Genesis 27:33', 'Rashi on Genesis 27:33:4'] },
    { ask: 'Why would a father ratify a blessing obtained by deception? Wisdom, weakness, or faith?', discuss: true,
      tip: 'Let people disagree. Then tap to hear Isaac.',
      reveal: ['Maybe I understood that the blessing had found the son who would carry it. Maybe I simply couldn’t take my own words back. The Torah lets you decide.'] },
    { say: 'Esau cried out, and I asked him the saddest question a father can ask: “What, then, can I still do for you, my son?” Then I blessed him too.', src: ['Genesis 27:37', 'Genesis 27:39–40'] },
    { say: 'When Jacob left, I called him in and blessed him again, by his own name, with the blessing of Abraham: <span class="he-inline" lang="he" dir="rtl">וְיִתֶּן־לְךָ אֶת־בִּרְכַּת אַבְרָהָם</span> “May you and your offspring be granted the blessing of Abraham.”', src: ['Genesis 28:1', 'Genesis 28:3–4'] },
    { ask: 'What blessing did your parents give you, spoken or unspoken? What blessing do you want to give your child before they leave home?', discuss: true,
      tip: 'Pairs only, with no need to share with the room. Then tap to hear Isaac.',
      reveal: ['Later this morning, you’ll have a chance to say it out loud.'] },
    { say: 'In Jacob’s dream, God introduced Himself as “the God of your father Abraham and the God of Isaac.” Rashi notes that God doesn’t usually attach the divine name to someone still living. He says an exception was made for me: blind and confined to the house, I was as good as dead, past the reach of temptation.', src: ['Genesis 28:13', 'Rashi on Genesis 28:13:2'] },
    { prompt: 'Ask Isaac anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Did you know it was Jacob?', keys: 'know knew jacob recognize suspect suspected', a: [
        { say: 'I asked twice: “whether you are really my son Esau or not,” and then, “Are you really my son Esau?” He said, “I am.”', src: ['Genesis 27:21', 'Genesis 27:24'] },
        'The Torah leaves the rest to you.' ] },
      { q: 'Were you angry at Rebekah?', keys: 'angry rebekah wife anger blame', a: [
        'The Torah never says. It never shows Rebekah and me speaking about the blessing at all.' ] },
      { q: 'Why did you love Esau more?', keys: 'love loved esau more favorite why game', a: [
        { say: 'The Torah says, “because he had a taste for game,” literally, because game was in my mouth. Rashi also brings a midrash: that Esau “hunted” me with his words.', src: ['Genesis 25:28', 'Rashi on Genesis 25:28:1'] } ] },
      { q: 'Why were your eyes dim?', keys: 'eyes blind dim see sight why', a: [
        { say: 'Rashi’s three reasons: the smoke of the incense Esau’s wives burned to idols; the angels’ tears at the altar; or so that Jacob could receive the blessing.', src: 'Rashi on Genesis 27:1:1' } ] },
      { q: 'What did you give Esau?', keys: 'esau blessing give gave what', a: [
        { say: '“See, your abode shall enjoy the fat of the earth And the dew of heaven above. Yet by your sword you shall live, And you shall serve your brother; But when you grow restive, You shall break his yoke from your neck.”', src: 'Genesis 27:39–40' } ] },
      { q: 'Did you see Jacob again?', keys: 'see again jacob come back return home', a: [
        { say: '“Jacob came to his father Isaac at Mamre.” When I died, “he was buried by his sons Esau and Jacob.”', src: ['Genesis 35:27', 'Genesis 35:29'] } ] },
      { q: 'Where does the Friday night blessing come from?', keys: 'friday night shabbat blessing children bless kids', a: [
        { say: 'From my son. When Jacob blessed his grandsons, he said, “By you shall Israel invoke blessings, saying: God make you like Ephraim and Manasseh.”', src: 'Genesis 48:20' },
        'For daughters, parents name the four mothers: Sarah, Rebekah, Rachel, and Leah.' ] }
    ] },
    { rung: true },
    { next: { say: 'You’ve heard a father. Now hear the mother who made the plan, and the son who lost the blessing.', ids: ['rebekah', 'esau', 'ramban'] } }
  ] }
};
