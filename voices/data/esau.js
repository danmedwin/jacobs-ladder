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
  ] }
};
