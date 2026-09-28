/* Esau's visit. Beat types are described at the top of jacob.js. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.scripts.esau = {

  k2: { beats: [
    { say: 'Hi! I’m Esau. Jacob is my twin brother. That means we were born on the same day!', src: 'Genesis 25:24' },
    { say: 'I was born first. I was red and hairy all over, like I was wearing a fuzzy coat!', src: 'Genesis 25:25' },
    { say: 'And Jacob came out right after me, holding on to my heel!', src: 'Genesis 25:26' },
    { motion: { title: 'Hold on to a heel!', text: 'Reach down and hold your heel. In Hebrew, a heel is an akev. That’s how Jacob got his name: Ya’akov!', icon: 'walk' } },
    { say: 'When we grew up, I loved being outside. I was a hunter, with a bow and arrows. Jacob liked to stay home, near the tents.', src: ['Genesis 25:27', 'Genesis 27:3'] },
    { say: 'My father, Isaac, loved the food I brought him from hunting.', src: 'Genesis 25:28' },
    { say: 'One day, my father asked me to go hunting and cook him a special meal. Then he would give me a big blessing.', src: 'Genesis 27:1–4' },
    { say: 'But while I was out hunting, Jacob dressed up in my clothes and pretended to be me. He got my blessing!', src: 'Genesis 27:15–29' },
    { say: 'When I came home and found out, I cried and cried.', src: 'Genesis 27:34' },
    { ask: 'How do you think I felt?',
      choices: [
        { label: 'Sad', reply: ['So sad. I asked my father, “Don’t you have a blessing for me too?”'] },
        { label: 'Angry', reply: ['Very angry. I didn’t want to see Jacob at all.'] },
        { label: 'Both', reply: ['Yes. I was sad and angry at the same time. Big feelings can come together.'] }
      ],
      tip: 'Let everyone answer out loud. Then choose what most of the group said.' },
    { say: 'I was so angry that Jacob had to go far away. That’s why he was sleeping outside on a stone when he had his dream.', src: ['Genesis 27:41–45', 'Genesis 28:11'] },
    { say: 'I never saw the ladder or the angels. That was Jacob’s dream, not mine.' },
    { say: 'Jacob stayed away a long, long time. Twenty years! Then one day, he came back.', src: 'Genesis 31:41' },
    { say: 'When I saw him, I ran to him. I hugged him and kissed him, and we both cried.', src: 'Genesis 33:4' },
    { motion: { title: 'Run and hug!', text: 'Run in place… faster, faster! Now stop and give yourself a great big hug.', icon: 'heart' } },
    { ask: 'Have you ever made up with someone after a fight? What helped?', discuss: true,
      tip: 'Take a few answers out loud. Then tap to hear Esau.',
      reveal: [{ say: 'For me, it took a long time. But when I saw my brother again, I told him, “I have enough, my brother.” I didn’t need to stay angry anymore.', src: 'Genesis 33:9' }] },
    { prompt: 'What would you like to ask me?', questions: [
      { q: 'Were you really that hairy?', a: [
        { say: 'Yes! Hairy all over. Jacob’s skin was smooth.', src: ['Genesis 25:25', 'Genesis 27:11'] },
        { say: 'That’s how the trick worked. Our mother covered Jacob’s arms with goat fur, so he would feel hairy like me!', src: 'Genesis 27:16' } ] },
      { q: 'What’s your favorite food?', a: [
        { say: 'Once I came home SO hungry that I traded something very important for a bowl of red lentil stew!', src: 'Genesis 25:29–34' },
        { say: 'That’s why people call me Edom. Edom means “red.”', src: 'Genesis 25:30' } ] },
      { q: 'What did you hunt?', a: [
        { say: 'The Torah doesn’t say exactly. I took my bow and arrows out into the fields, and I brought back food for my father.', src: 'Genesis 27:3' } ] },
      { q: 'Are you still angry at Jacob?', a: [
        { say: 'Not anymore! When he came back, I ran to give him a big hug. We were brothers again.', src: 'Genesis 33:4' } ] }
    ] },
    { rung: true },
    { next: { say: 'Thanks for hearing my side of the story! Who do you want to meet next?', ids: ['jacob', 'rebekah', 'angel'] } }
  ] },

  g34: { beats: [
    { say: 'I’m Esau, Jacob’s twin. I never saw any ladder. While my brother was dreaming about angels, I was more upset than I had ever been. Want to know why?' },
    { say: 'I was born first, red and hairy. Jacob came out right behind me, holding on to my heel.', src: ['Genesis 25:25', 'Genesis 25:26'] },
    { say: 'We grew up very different. I became “a skillful hunter, a man of the outdoors.” Jacob became “a mild man who stayed in camp.”', src: 'Genesis 25:27' },
    { say: 'One day I came in from the fields, starving. Jacob was cooking a red lentil stew. I said, “Give me some of that red stuff to gulp down, for I am famished.”', src: ['Genesis 25:29', 'Genesis 25:30'] },
    { say: 'Jacob said, “First sell me your birthright.” The birthright was the special place of the first-born son. And I sold it to him, for a bowl of stew.', src: ['Genesis 25:31', 'Genesis 25:33'] },
    { ask: 'I traded my birthright for a bowl of stew. Was that a fair trade?',
      choices: [
        { label: 'Fair. Esau agreed to it.', reply: [{ say: 'I did agree. I even swore to it. But I was so hungry that I wasn’t thinking about the future.', src: 'Genesis 25:33' }] },
        { label: 'Unfair. Esau was starving.', reply: [{ say: 'That’s how it felt to me. I said, “I am at the point of death, so of what use is my birthright to me?”', src: 'Genesis 25:32' }] },
        { label: 'Esau should have said no.', reply: [{ say: 'Maybe. The Torah says, “Thus did Esau spurn the birthright.” I didn’t think it mattered. Later, I found out it did.', src: 'Genesis 25:34' }] }
      ],
      tip: 'Let students argue both sides before anyone chooses.' },
    { say: 'Years later, our father Isaac was old and couldn’t see. He asked me to hunt and cook for him, so that he could give me his blessing.', src: 'Genesis 27:1–4' },
    { say: 'While I was out hunting, our mother dressed Jacob in my clothes and covered his arms with goatskins, so he would feel hairy like me.', src: 'Genesis 27:15–16' },
    { say: 'Jacob went to our father and said, “I am Esau, your first-born.” And my father blessed him.', src: ['Genesis 27:19', 'Genesis 27:27–29'] },
    { say: 'When I came back and found out, I burst into wild and bitter sobbing. I said, “Bless me too, Father!”', src: 'Genesis 27:34' },
    { say: 'I said, “Have you not reserved a blessing for me?” My father did bless me, but it wasn’t the blessing I wanted.', src: ['Genesis 27:36', 'Genesis 27:38–40'] },
    { say: 'I was so angry that I said I would hurt Jacob. So our mother sent him far away. That’s how he ended up sleeping on a rock.', src: ['Genesis 27:41–45', 'Genesis 28:11'] },
    { say: 'Then I noticed something. My parents were unhappy with the women I had married, and they sent Jacob to find a wife from our mother’s family.', src: ['Genesis 26:34–35', 'Genesis 28:6–8'] },
    { say: 'So I married my cousin Mahalath, the daughter of Ishmael, Abraham’s son.', src: 'Genesis 28:9' },
    { ask: 'The Torah tells this right between Jacob leaving home and Jacob’s dream. Why do you think I married Mahalath?',
      choices: [
        { label: 'To make his parents happy', reply: [{ say: 'I think so. The Torah says I realized that the Canaanite women displeased my father. Maybe I was still trying to win his blessing.', src: 'Genesis 28:8' }] },
        { label: 'To get a blessing too', reply: ['Maybe. My brother had just left with our father’s blessing. Maybe I hoped there was still some left for me.'] },
        { label: 'To be more like Jacob', reply: ['Maybe. Jacob was sent to marry into the family, so I did too. And look who I married: the daughter of Ishmael. Ishmael was Abraham’s son too. God blessed him, but like me, he was the brother who didn’t carry on Abraham’s covenant with God.'] }
      ],
      tip: 'Then ask: Why would the Torah put Esau’s story right in the middle of Jacob’s?' },
    { say: 'Twenty years later, Jacob came home. I went out to meet him with four hundred men. He was terrified.', src: ['Genesis 32:7', 'Genesis 32:8'] },
    { say: 'But when I saw him, I ran to greet him. I hugged him and kissed him, and we both cried.', src: 'Genesis 33:4' },
    { prompt: 'What do you want to ask me?', questions: [
      { q: 'Did you forgive Jacob?', keys: 'forgive forgave sorry angry still mad', a: [
        { say: 'The Torah never says I forgave him. But when Jacob tried to give me hundreds of animals, I said, “I have enough, my brother; let what you have remain yours.”', src: ['Genesis 32:14–16', 'Genesis 33:9'] },
        'What do you think? Is that forgiveness?' ] },
      { q: 'Why are you called Edom?', keys: 'edom red name called nickname', a: [
        { say: 'Edom means “red.” I was born red, and I asked for “that red stuff,” the lentil stew. The name stuck.', src: ['Genesis 25:25', 'Genesis 25:30'] } ] },
      { q: 'What did you hunt?', keys: 'hunt hunting hunter game animals bow', a: [
        { say: 'The Torah just calls it “game,” wild animals from the fields. I took my quiver and bow and went out into the open.', src: 'Genesis 27:3' },
        { say: 'My father loved it. The Torah says he favored me because he had a taste for game.', src: 'Genesis 25:28' } ] },
      { q: 'What did Jacob say when he saw you?', keys: 'jacob say said saw meet face god', a: [
        { say: 'He said, “To see your face is like seeing the face of God.”', src: 'Genesis 33:10' },
        'Think about that. When Jacob was running away from me, he met God at Beit El. Twenty years later, he said he saw God in my face.' ] },
      { q: 'Did you ever see your father again?', keys: 'father isaac again die died bury', a: [
        { say: 'Yes. When our father Isaac died, Jacob and I buried him together.', src: 'Genesis 35:29' } ] }
    ] },
    { rung: true },
    { next: { say: 'Thanks for hearing my side. My mother can tell you why she helped Jacob, and my father can tell you about the blessing.', ids: ['rebekah', 'isaac', 'jacob'] } }
  ] },

  g57: { beats: [
    { say: 'I’m Esau, Esav in Hebrew. Everyone knows Jacob’s dream. Nobody asks about my week.' },
    { say: 'Jacob and I were twins, and we were fighting before we were born: “the children struggled in her womb.” I came out first, red and hairy. Jacob came out holding on to my heel.', src: ['Genesis 25:22', 'Genesis 25:25', 'Genesis 25:26'] },
    { say: 'We grew up opposites. I became “a skillful hunter, a man of the outdoors; but Jacob became a mild man who stayed in camp.” And our parents split: “Isaac favored Esau because he had a taste for game; but Rebekah favored Jacob.”', src: ['Genesis 25:27', 'Genesis 25:28'] },
    { say: 'One day I came in from the open, famished. Jacob was cooking. I said, “Give me some of that red stuff to gulp down, for I am famished.” He said, “First sell me your birthright.”', src: ['Genesis 25:29–31'] },
    { say: 'I said, “I am at the point of death, so of what use is my birthright to me?” I swore, I ate, and I left.', src: ['Genesis 25:32–34'] },
    { ask: 'The Torah’s last word on that day: “Thus did Esau spurn the birthright.” Is that fair to me?', discuss: true,
      tip: 'Split the group: one side says the Torah is fair to Esau, the other says it isn’t. A minute each. Then tap to hear Esau.',
      reveal: [
        { say: 'I was hungry, and I didn’t think past dinner. But notice who the Torah blames. Not the brother who set the price. Me.', src: 'Genesis 25:34' },
        'Maybe the Torah wants you to see both of us clearly: one who took advantage, and one who didn’t value what he had.' ] },
    { say: 'Years later, our father told me, “Take your gear, your quiver and bow, and go out into the open and hunt me some game,” so that he could give me his innermost blessing.', src: 'Genesis 27:1–4' },
    { say: 'While I was hunting, Jacob went in wearing my clothes and said, “I am Esau, your first-born.” And my father blessed him.', src: ['Genesis 27:15–19', 'Genesis 27:27–29'] },
    { say: 'When I came back, I “burst into wild and bitter sobbing,” and said, “Bless me too, Father!”', src: 'Genesis 27:34' },
    { say: 'I said, “Was he, then, named Jacob that he might supplant me these two times? First he took away my birthright and now he has taken away my blessing!” Ya’akov, supplanter. Even his name was against me.', src: 'Genesis 27:36' },
    { ask: 'Then I asked, “Have you but one blessing, Father?” Can a family run out of blessings?', discuss: true,
      tip: 'Take a few answers. Then tap to hear Esau.',
      reveal: [
        { say: 'My father did find words for me: “See, your abode shall enjoy the fat of the earth And the dew of heaven above.”', src: 'Genesis 27:39–40' },
        'But it wasn’t the blessing I wanted. I think every child wants to hear that they are the one their parent meant.' ] },
    { say: 'Then I said to myself, “Let but the mourning period of my father come, and I will kill my brother Jacob.” That’s why Jacob ran, and how he ended up asleep on a rock.', src: ['Genesis 27:41', 'Genesis 28:11'] },
    { say: 'I noticed that my Canaanite wives displeased my father, so I married my cousin Mahalath, the daughter of Ishmael. The Torah tells that between Jacob’s leaving and his dream.', src: 'Genesis 28:6–9' },
    { say: 'Twenty years later, Jacob sent messengers: “To my lord Esau, thus says your servant Jacob.” I came to meet him with four hundred men, and he “was greatly frightened.”', src: ['Genesis 32:4–8'] },
    { say: 'He bowed to the ground seven times. And then: “Esau ran to greet him. He embraced him and, falling on his neck, he kissed him; and they wept.”', src: ['Genesis 33:3', 'Genesis 33:4'] },
    { ask: 'In a Torah scroll, the word for “he kissed him” has a dot over every letter. Some rabbis said the dots mean I didn’t kiss Jacob with my whole heart. Did I mean it?',
      choices: [
        { label: 'He meant it', reply: [{ say: 'Rabbi Shimon bar Yochai agreed, and he was no fan of mine. He said: we know Esau hated Jacob, but at that moment his pity was stirred, and he kissed him with his whole heart.', src: 'Rashi on Genesis 33:4:2' }] },
        { label: 'He didn’t mean it', reply: [{ say: 'Some of the Rabbis read the dots that way. But the same verse says we both wept.', src: ['Rashi on Genesis 33:4:2', 'Genesis 33:4'] }] },
        { label: 'Both at once', reply: ['Can you be hurt and still love someone, both at once? I think I was.'] }
      ],
      tip: 'Open the Genesis 33:4 card to show the dots over וישקהו. Let the group argue before anyone chooses.' },
    { prompt: 'Ask me anything about that week, or the twenty years after. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Did you forgive Jacob?', keys: 'forgive forgave forgiveness sorry angry still mad make up', a: [
        { say: 'The Torah never says I forgave him. But when he pushed his gifts on me, I said, “I have enough, my brother; let what you have remain yours.”', src: 'Genesis 33:9' },
        { say: 'He answered, “to see your face is like seeing the face of God.” He kept urging, and in the end I accepted. What do you think happened between us?', src: ['Genesis 33:10', 'Genesis 33:11'] } ] },
      { q: 'What blessing did your father give you?', keys: 'blessing father isaac give gave you your say said tell told', a: [
        { say: '“See, your abode shall enjoy the fat of the earth And the dew of heaven above. Yet by your sword you shall live, And you shall serve your brother; But when you grow restive, You shall break his yoke from your neck.”', src: 'Genesis 27:39–40' } ] },
      { q: 'Why is your other name Edom?', keys: 'edom red name called nickname', a: [
        { say: 'Edom sounds like <i>adom</i>, red. I was born red, and I asked for “that red stuff,” which is why I was named Edom.', src: ['Genesis 25:25', 'Genesis 25:30'] } ] },
      { q: 'Were you a bad person?', keys: 'bad evil villain wicked good person mean', a: [
        'The Torah never calls me wicked. I lost a birthright and a blessing, and I was furious.',
        'Many later stories about me are much harsher. But in the Torah’s own story, I’m the one who runs to hug my brother.' ] },
      { q: 'Why did you bring four hundred men?', keys: 'four hundred 400 men army soldiers why bring', a: [
        { say: 'The Torah doesn’t say. Jacob assumed the worst and split his camp in two. Then I ran to hug him, and I went home to Seir that same day.', src: ['Genesis 32:7–8', 'Genesis 33:16'] } ] },
      { q: 'Did you want the birthright back?', keys: 'birthright back want regret sold stew', a: [
        { say: 'By the time I understood what it meant, it was gone. That’s why I said he took it from me “these two times.”', src: 'Genesis 27:36' } ] },
      { q: 'Did you and Jacob meet again?', keys: 'meet again see saw jacob brother later father isaac die died bury buried', a: [
        { say: 'Yes. When our father died, the Torah says, “he was buried by his sons Esau and Jacob.”', src: 'Genesis 35:29' } ] }
    ] },
    { rung: true },
    { next: { say: 'Want another side? My mother can tell you why she chose Jacob, and the Sages have plenty to say about all of us.', ids: ['rebekah', 'sages', 'jacob'] } }
  ] },

  parents: { beats: [
    { say: 'I’m Esau: the son who wept for a blessing, and the brother who ran to embrace. The Torah tells both stories. Most people remember only the first.' },
    { say: 'The Torah says it plainly: “Isaac favored Esau because he had a taste for game; but Rebekah favored Jacob.” Each of us knew exactly where we stood.', src: 'Genesis 25:28' },
    { say: 'I was the first-born, and I sold that birthright for a bowl of stew. “I am at the point of death, so of what use is my birthright to me?”', src: 'Genesis 25:29–34' },
    { say: 'When our father was old and blind, he asked me to hunt and prepare the dish he loved, “so that I may give you my innermost blessing before I die.” My mother was listening.', src: ['Genesis 27:1–4', 'Genesis 27:5'] },
    { say: 'By the time I came back, my brother had already been blessed. I “burst into wild and bitter sobbing.” Then I said, <span class="he-inline" lang="he" dir="rtl">הַבְרָכָה אַחַת הִוא־לְךָ אָבִי</span> “Have you but one blessing, Father? Bless me too, Father!” And I wept aloud.', src: ['Genesis 27:34', 'Genesis 27:38'] },
    { ask: 'Is there such a thing as a blessing that only one child can have?', discuss: true,
      tip: 'Give pairs a minute. Then take a few answers and tap to hear Esau.',
      reveal: [
        { say: 'In our family there was. The blessing of Abraham went to one son.', src: 'Genesis 28:4' },
        'Under my question was another one, and I think every child asks it: Was there enough of you for me?' ] },
    { say: 'I said to myself, “Let but the mourning period of my father come, and I will kill my brother Jacob.” My mother heard of it, and Jacob fled.', src: ['Genesis 27:41', 'Genesis 27:42–45'] },
    { say: 'When I saw that my Canaanite wives displeased my father, I married Mahalath, Ishmael’s daughter: a cousin, the child of Abraham’s elder son. The Torah sets that in the middle of Jacob’s journey, between his leaving and his dream.', src: 'Genesis 28:6–9' },
    { say: 'Twenty years later, Jacob sent word ahead, calling me “my lord” and himself “your servant.” I came with four hundred men. He bowed to the ground seven times.', src: ['Genesis 32:4–7', 'Genesis 33:3'] },
    { say: '“Esau ran to greet him. He embraced him and, falling on his neck, he kissed him; and they wept.” When he pressed his gifts on me, I said, <span class="he-inline" lang="he" dir="rtl">יֶשׁ־לִי רָב אָחִי</span> “I have enough, my brother; let what you have remain yours.”', src: ['Genesis 33:4', 'Genesis 33:9'] },
    { say: 'Now something you may not know. The Rabbis lived under Rome, the empire that destroyed the Temple, and they began to call Rome by my other name, Edom. Rashi says it outright about one of my descendants: “Magdiel: this is Rome.”', src: 'Rashi on Genesis 36:43:1' },
    { say: 'And in the midrash, I became a villain from the womb. Rashi passes it on: whenever my mother walked past a pagan temple, I struggled to get out. At thirteen, it says, Jacob went to the houses of study and I went to the idols.', src: ['Rashi on Genesis 25:22:1', 'Rashi on Genesis 25:27:1'] },
    { ask: 'Why would a people living under Rome read Esau this way? And what does it cost to turn a brother into a symbol of the enemy?', discuss: true,
      tip: 'Pairs first, then a few answers for the room. Then tap to hear Esau.',
      reveal: [
        { say: 'Even the Rabbis couldn’t quite let go of the brother. In a Torah scroll, the word “he kissed him” carries a dot over every letter. Some said the dots mean I didn’t mean it. Rabbi Shimon bar Yochai said: we know Esau hated Jacob, but at that moment his pity was stirred, and he kissed him with his whole heart.', src: ['Genesis 33:4', 'Rashi on Genesis 33:4:2'] },
        { say: 'And the Torah itself says, <span class="he-inline" lang="he" dir="rtl">לֹא־תְתַעֵב אֲדֹמִי כִּי אָחִיךָ הוּא</span> “You shall not abhor an Edomite, for they are your kin.”', src: 'Deuteronomy 23:8' } ] },
    { prompt: 'Ask Esau anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Did you forgive Jacob?', keys: 'forgive forgave forgiveness reconcile reconciliation sorry angry', a: [
        { say: 'The Torah never says I forgave him. It says I ran, embraced him, kissed him, and wept. At first I refused his gifts: “I have enough, my brother.”', src: ['Genesis 33:4', 'Genesis 33:9'] },
        { say: 'Jacob answered, “to see your face is like seeing the face of God.” He urged me, and I accepted. When he fled from me, he met God at Beit El. Twenty years later, he said he saw God in my face.', src: ['Genesis 33:10', 'Genesis 33:11'] } ] },
      { q: 'What blessing did your father give you?', keys: 'blessing father isaac give gave you your say said tell told', a: [
        { say: '“See, your abode shall enjoy the fat of the earth And the dew of heaven above. Yet by your sword you shall live, And you shall serve your brother; But when you grow restive, You shall break his yoke from your neck.”', src: 'Genesis 27:39–40' } ] },
      { q: 'Why do the Rabbis call you wicked?', keys: 'wicked evil villain rabbis midrash bad rome rashi esau edom', a: [
        { say: 'Partly because I came to stand for Rome. Partly because of what the Torah does say: “Thus did Esau spurn the birthright.” Rashi even reads my father’s love against me: in the midrash, there was “hunting in Esau’s mouth,” words I used “to entrap and deceive” him.', src: ['Rashi on Genesis 36:43:1', 'Genesis 25:34', 'Rashi on Genesis 25:28:1'] },
        'The Torah itself never calls me wicked.' ] },
      { q: 'Why did you sell your birthright?', keys: 'birthright sell sold stew lentil why first-born firstborn', a: [
        { say: '“I am at the point of death, so of what use is my birthright to me?” I was starving, and tomorrow felt very far away. The Torah’s verdict is short: “Thus did Esau spurn the birthright.”', src: ['Genesis 25:32', 'Genesis 25:34'] } ] },
      { q: 'Who wrestled with Jacob?', keys: 'wrestle wrestled wrestling angel night man', a: [
        { say: 'The Hebrew says only <i>ish</i>, “a man.” Rashi says the Rabbis identified him as my guardian angel. Even on the night before our meeting, the tradition put me in the ring.', src: ['Genesis 32:25–29', 'Rashi on Genesis 32:25:2'] } ] },
      { q: 'Why did you bring four hundred men?', keys: 'four hundred 400 men army why bring', a: [
        { say: 'The Torah doesn’t say. Jacob assumed the worst and split his camp in two. After we met, I went home to Seir that same day.', src: ['Genesis 32:7–8', 'Genesis 33:16'] } ] },
      { q: 'Did you and Jacob meet again?', keys: 'meet again later father death bury buried', a: [
        { say: 'At our father’s grave. The Torah says, “he was buried by his sons Esau and Jacob.”', src: 'Genesis 35:29' } ] },
      { q: 'What does Edom mean?', keys: 'edom red name meaning adom', a: [
        { say: 'Red. I was born red, and I asked for “that red stuff,” the lentil stew, “which is why he was named Edom.”', src: ['Genesis 25:25', 'Genesis 25:30'] } ] }
    ] },
    { rung: true },
    { next: { say: 'You’ve heard me as a son and as a brother. Visit my mother and father to hear what they were thinking.', ids: ['rebekah', 'isaac', 'jacob'] } }
  ] }
};
