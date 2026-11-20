/* Jacob's visit, in four versions.

   Staying in character: a character speaks only from their own life and what they could know. They never cite
   the Torah as a book about themselves, a translation, or a teacher who lived after them. Those lines belong to
   the teacher: add teacher: '…' to any line, question, or goodbye, and it appears under it as “Teacher says.”
   Use teacher: { say, src } when the teacher's line opens source cards. A line with only teacher is the teacher's alone.
   imagined: true marks a line that fits the story and its world but that no text says; the page labels it “Imagined.”

   Beat types (one per line of the conversation):
     { say, src }                 Jacob speaks. src is a source-card reference, or a list of them.
     { picture: { style } }       A looping animation from the Jacob's Dream gallery.
     { motion: { title, text, icon } }   Everybody moves (K–2 mostly).
     { ask, choices, tip }        Jacob asks the group; each choice has its own reply.
     { ask, discuss: true, reveal, tip }  The group talks it over, then hears Jacob's answer.
     { questions: [...], prompt, typing } Question buttons the group can choose; typing adds a box.
     { rung: true }               The rung for this level (from characters.js).
     { next: { say, ids } }       Goodbye, and who to visit next.
   A reply can be a string, { say, src }, or { gallery: [...], caption }. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.scripts.jacob = {

  k2: { beats: [
    { say: 'Hi! I’m Jacob. I had the most amazing dream. Do you want to hear about it?' },
    { say: 'First, I had to leave home. My brother Esau was very, very angry with me.', src: 'Genesis 27:41' },
    { say: 'My mother said, “Go to your uncle’s house, far away. You’ll be safe there.”', src: 'Genesis 27:42–45' },
    { motion: { title: 'Walk with me!', text: 'Walk in place… walk, walk, walk. The sun is going down!', icon: 'walk' } },
    { say: 'When it got dark, I stopped to sleep, right there on the ground.', src: 'Genesis 28:11' },
    { say: 'I didn’t have a pillow, so I used a stone!', src: 'Genesis 28:11' },
    { ask: 'How do you think I felt, sleeping outside all alone?',
      choices: [
        { label: 'Scared', reply: ['I was scared. It was dark, and I was far from home.'] },
        { label: 'Brave', reply: ['I tried to be brave, even though I was scared.'] },
        { label: 'Both', reply: ['You’re right. I was scared and brave at the same time.'] }
      ],
      tip: 'Let everyone answer out loud. Then choose what most of the group said.' },
    { say: 'Then I fell asleep… and I had a dream!' },
    { picture: { style: 'claymation' } },
    { say: 'I saw a ladder! The bottom stood on the ground, and the top reached all the way up to the sky.', src: 'Genesis 28:12' },
    { motion: { title: 'How tall was it?', text: 'Crouch down low. Now reach up, up, up, as high as you can!', icon: 'reach' } },
    { say: 'Angels were going up and down the ladder.', src: 'Genesis 28:12' },
    { motion: { title: 'Be the angels!', text: 'Stand up tall… crouch down low… up… and down!', icon: 'updown' } },
    { say: 'Then God was right there beside me. God said, “I am with you. I will keep you safe wherever you go.”', src: ['Genesis 28:13', 'Genesis 28:15'] },
    { say: 'When I woke up, I said, “God was here, and I didn’t even know it!”', src: 'Genesis 28:16' },
    { ask: 'Is there a place that feels special to you?', discuss: true,
      tip: 'Take a few answers out loud. Then tap to hear Jacob.',
      reveal: ['For me, it was a place with just a stone and the sky. A special place can be anywhere!'] },
    { prompt: 'What would you like to ask me?', questions: [
      { q: 'Why was Esau angry?', a: [
        { say: 'I did something unfair. I tricked our father so that I would get the blessing that was meant for Esau.', src: 'Genesis 27:18–29' },
        'Esau was so angry that I had to go away until he calmed down.' ] },
      { q: 'Were you scared of the dark?', a: [
        { say: 'A little! But then God said, “I am with you.” After that, I felt safe.', src: 'Genesis 28:15' } ] },
      { q: 'What did the angels look like?', a: [
        { say: 'I wish I could show you! What do you think they looked like?', teacher: 'The Torah doesn’t say what the angels looked like.' },
        { gallery: ['stained-glass', 'origami', 'pixel-art', 'papercut'], caption: 'Here’s how some artists pictured them.' } ] },
      { q: 'What did you do in the morning?', a: [
        { say: 'I took my stone pillow and stood it up tall, so I would always remember this place.', src: 'Genesis 28:18' },
        { say: 'And I gave the place a name: Beit El. That means “House of God.”', src: 'Genesis 28:19' } ] }
    ] },
    { rung: true },
    { next: { say: 'Thank you for visiting me! Who do you want to meet next?', ids: ['esau', 'angel', 'stone'] } }
  ] },

  g34: { beats: [
    { say: 'Shalom! I’m Jacob. You’ve probably heard about my dream. But do you know why I was sleeping outside on a rock?' },
    { say: 'I had tricked my father, Isaac, into giving me the blessing he meant for my twin brother, Esau. Esau was furious.', src: 'Genesis 27:30–41' },
    { say: 'He was so angry that he wanted to hurt me. So my mother, Rebekah, told me to run to her brother Laban in Haran and stay there until Esau calmed down.', src: 'Genesis 27:41–45' },
    { ask: 'If you had to leave home in a hurry, what’s one thing you would take?',
      choices: [
        { label: 'A pillow', reply: ['Ha! I wish I’d had one. I ended up using a stone.'] },
        { label: 'Food', reply: ['Smart. It was a long walk to Haran, hundreds of miles.'] },
        { label: 'Something from my family', reply: [
          { say: 'Me too. Before I left, my father blessed me again. This time, he knew it was me.', src: 'Genesis 28:1–4' } ] }
      ],
      tip: 'Hear a few answers. Then choose one.' },
    { say: 'So I left home in Beersheba, all alone. I walked until the sun went down.', src: ['Genesis 28:10', 'Genesis 28:11'] },
    { say: 'I took one of the stones of that place, put it under my head, and lay down to sleep.', src: 'Genesis 28:11' },
    { picture: { style: 'papercut' } },
    { say: 'I dreamed of a ladder. It stood on the ground, and its top reached the sky. Angels of God were going up and down on it.', src: 'Genesis 28:12' },
    { ask: 'Here’s a puzzle. The angels went <b>up</b> first, then <b>down</b>. But angels live in heaven! Why would they start on the ground?',
      choices: [
        { label: 'They were already down here with Jacob', reply: [
          { say: 'I like that idea! I’ve wondered about it ever since that night.', teacher: 'That’s close to what a teacher named Rashi said, about a thousand years ago. Visit him to hear the rest!' } ] },
        { label: 'They went up to tell God about Jacob', reply: [
          { say: 'Maybe! I never found out.', teacher: 'The Torah doesn’t say. A teacher named Rashi had an idea about it, too.' } ] },
        { label: 'We have another idea', reply: [
          { say: 'I’d love to hear it!', teacher: 'A teacher named Rashi had an idea, too. You can ask him.' } ] }
      ],
      tip: 'Let students argue for a minute before anyone chooses.' },
    { say: 'Then God was standing beside me, and God made me promises.', src: 'Genesis 28:13' },
    { say: 'God said my family would spread out west and east, north and south, like the dust of the earth, and every family on earth would be blessed through us.', src: 'Genesis 28:14' },
    { say: 'And God said, “Remember, I am with you: I will protect you wherever you go and will bring you back to this land. I will not leave you.”', src: 'Genesis 28:15' },
    { say: 'When I woke up, I said, “God is in this place, and I did not know it!”', src: 'Genesis 28:16' },
    { say: 'I was afraid and amazed at the same time. I said, “How awesome is this place! This is the house of God, and the gateway to heaven.”', src: 'Genesis 28:17' },
    { ask: 'Why didn’t I know God was there?',
      choices: [
        { label: 'He was asleep', reply: ['True! But I was awake when I got there, too. I only noticed after the dream.'] },
        { label: 'He was too worried', reply: ['I was running from my brother. When you’re worried, it’s hard to notice anything else.'] },
        { label: 'He wasn’t paying attention', reply: ['Maybe. I was in such a hurry that I never looked around.'] }
      ],
      tip: 'After Jacob answers, ask: Is there a place you go every week that might be more special than you think?' },
    { say: 'In the morning, I stood my stone pillow up like a pillar and poured oil on top, to mark the spot.', src: 'Genesis 28:18' },
    { say: 'The place used to be called Luz. I gave it a new name: Beit El, House of God.', src: 'Genesis 28:19' },
    { say: 'Then I made a promise. If God stayed with me and brought me home safely, I would give back a tenth of everything I got.', src: 'Genesis 28:20–22' },
    { prompt: 'What do you want to ask me?', questions: [
      { q: 'Where were you going?', keys: 'going destination haran laban uncle travel far', a: [
        { say: 'To Haran, where my uncle Laban lived. That’s hundreds of miles, and I walked.', src: 'Genesis 28:10' } ] },
      { q: 'Why a stone for a pillow?', keys: 'stone pillow rock sleep head', a: [
        { say: 'It was all I had!', teacher: 'Some teachers imagined that the stones argued over which one would get to hold Jacob’s head. Ask Rashi about that.' } ] },
      { q: 'What did God promise you?', keys: 'promise promised god said land family dust', a: [
        { say: 'Three things. This land would belong to my family. My family would spread everywhere, like the dust of the earth. And God would be with me and bring me home.', src: ['Genesis 28:13', 'Genesis 28:14', 'Genesis 28:15'] } ] },
      { q: 'Why did you pour oil on the stone?', keys: 'oil pour stone pillar', a: [
        { say: 'To show that this place was special. In my time, we used oil to mark something as holy.', src: 'Genesis 28:18' } ] },
      { q: 'What does “a tenth” mean?', keys: 'tenth ten give tzedakah vow promise', a: [
        { say: 'One out of every ten. If I had ten sheep, one would be for God.', src: 'Genesis 28:22',
          teacher: 'Jewish people still set aside part of what they have for tzedakah.' } ] },
      { q: 'Did you ever go home?', keys: 'home back return esau again twenty years', a: [
        { say: 'Yes, but not for twenty years! I got married, had a big family, and worked for my uncle Laban.', src: 'Genesis 31:38–41' },
        { say: 'When I finally came back, my brother Esau ran to meet me and hugged me, and we both cried.', src: 'Genesis 33:4' } ] },
      { q: 'Did you ever go back to Beit El?', keys: 'bethel beit el back again altar', a: [
        { say: 'Yes. Years later, God told me to go back there, and I built an altar in that same place.', src: 'Genesis 35:1–7' } ] }
    ] },
    { rung: true },
    { next: { say: 'Thanks for listening! My brother Esau has his own side of this story.', teacher: 'And Rashi has an answer to Jacob’s up-and-down puzzle.', ids: ['rashi', 'esau', 'angel'] } }
  ] },

  g57: { beats: [
    { say: 'I’m Jacob, Ya’akov in Hebrew. Let me tell you about the worst night of my life. It turned out to be one of the best.' },
    { say: 'Some background. My twin brother Esau was born first, so the birthright should have been his. One day he came in from the field starving, and I sold him a bowl of stew in exchange for it.', src: 'Genesis 25:29–34' },
    { say: 'Years later, with my mother’s help, I dressed up as Esau and tricked our blind father into giving me the blessing meant for my brother.', src: 'Genesis 27:18–29' },
    { say: 'When Esau found out, he cried out loud and bitterly. Then he told himself that once our father died, he would kill me.', src: ['Genesis 27:34', 'Genesis 27:41'] },
    { say: 'My mother sent me to her brother Laban in Haran to stay “awhile,” until Esau cooled off. Before I left, my father blessed me again. This time, he knew exactly who I was.', src: ['Genesis 27:42–45', 'Genesis 28:1–4'] },
    { say: 'I set out from Beersheba toward Haran. At sunset I stopped, took one of the stones of that place, put it under my head, and lay down.', src: ['Genesis 28:10', 'Genesis 28:11'] },
    { picture: { style: 'woodcut' } },
    { say: 'Then I dreamed. A <i>sulam</i> was set on the ground with its top reaching the sky, and angels of God were going up and down on it.', src: 'Genesis 28:12' },
    { ask: 'The word I used to describe it is <i>sulam</i>, and no one has used that word since, as far as I know. It’s a little bit like a ladder, but also like a stairway to heaven. Maybe even like a ramp. It’s hard to explain. How do you picture it?', discuss: true,
      teacher: 'The word <i>sulam</i> appears only this once in the whole Bible, so no one knows exactly what it looked like.',
      tip: 'Take a few answers. Then tap to hear Jacob.',
      reveal: [
        { say: 'I only saw it once, and I was asleep! I remember that it was steep and bright, and wide enough for angels to pass each other. However you picture it, you may be closer than my words can get.', imagined: true,
          teacher: { say: 'Translators can’t agree either. The Revised JPS says “stairway.” Robert Alter says “ramp.” Most people say “ladder.” Each word paints a different picture.', src: ['rjps', 'alter'] } } ] },
    { say: 'God was standing beside me and gave me the promises God had made to my grandfather Abraham: this land, a family as countless as the dust of the earth, and a blessing for every family on earth through us.', src: ['Genesis 28:13', 'Genesis 28:14'] },
    { say: 'Then God said, “Remember, I am with you: I will protect you wherever you go and will bring you back to this land. I will not leave you until I have done what I have promised you.”', src: 'Genesis 28:15' },
    { say: 'I woke up and said, “Surely God is present in this place, and I did not know it!”', src: 'Genesis 28:16' },
    { ask: 'Why didn’t I know? What was I missing?', discuss: true,
      tip: 'Let the group talk for a minute or two. Then tap to hear Jacob.',
      reveal: [
        'I think I was too busy running: from my brother, from what I had done, from home. When you’re running, you don’t notice where you are.',
        'Maybe God had been there the whole time, and I finally stopped long enough to notice.' ] },
    { say: 'I was shaken, and I said, “How awesome is this place! This is none other than the abode of God, and that is the gateway to heaven.”', src: 'Genesis 28:17' },
    { say: 'In the morning I set up my stone as a pillar, poured oil on it, and named the place Beit El, House of God. It used to be called Luz.', src: ['Genesis 28:18', 'Genesis 28:19'] },
    { say: 'Then I made a vow: “If God remains with me, protecting me on this journey that I am making… the Eternal shall be my God.” I also promised to set aside a tenth of everything God gave me.', src: 'Genesis 28:20–22' },
    { ask: 'Notice the word “if.” Is it OK to make a deal with God?', discuss: true,
      tip: 'Split the group: one side argues yes, the other argues no. Then tap to hear Jacob.',
      reveal: [
        'I made deals my whole young life: stew for a birthright, a disguise for a blessing. That night, I made a deal with God, too.',
        { say: 'It took me twenty years and a wrestling match before I became someone who didn’t need the “if.” That’s when I got a new name: Israel.', src: 'Genesis 32:25–29' } ] },
    { prompt: 'Ask me anything about that night. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Why did you trick your father?', keys: 'trick tricked lie lied deceive father isaac blessing why disguise steal', a: [
        { say: 'My mother overheard my father planning to bless Esau, and she told me what to do. I was afraid I’d get caught.', src: 'Genesis 27:5–13' },
        'Why did I go along with it? I wanted that blessing. I’m not proud of how I got it.' ] },
      { q: 'What was the sulam, really?', keys: 'sulam ladder stairway ramp stairs mean symbol really what', a: [
        { say: 'In my dream, it was something to climb, reaching from the ground to the sky. What did it mean? I’ve been turning that over ever since.',
          teacher: 'People have argued for centuries about what it meant. The Sages said it might be Mount Sinai. Rambam said it’s the path people climb to understand God. Go ask them!' } ] },
      { q: 'Where exactly was God standing?', keys: 'god standing stood where beside above over top nitzav alav', a: [
        { say: 'My words for it were <i>nitzav alav</i>. Beside me, or above the ladder? I can’t tell you. I know what it felt like: close.', src: 'Genesis 28:13',
          teacher: { say: '<i>Nitzav alav</i> can mean “standing beside him” or “standing over it,” over the ladder. The Revised JPS says God stood beside Jacob. The King James Bible says God stood above the ladder.', src: ['rjps', 'kjv'] } } ] },
      { q: 'What did God promise you?', keys: 'promise promised god said land family dust descendants', a: [
        { say: 'The land I was lying on. Descendants as many as the dust of the earth, spreading in every direction. A blessing for all the families of the earth through us.', src: ['Genesis 28:13', 'Genesis 28:14'] },
        { say: 'And the one I needed most: that God would be with me, protect me, and bring me home.', src: 'Genesis 28:15' } ] },
      { q: 'Why were you afraid when you woke up?', keys: 'afraid scared fear awe woke wake frightened', a: [
        { say: 'I was afraid, and I was full of awe, both at once. I had been sleeping in God’s house without knowing it!', src: 'Genesis 28:17',
          teacher: 'The Hebrew word is <i>vayira</i>. It means afraid, and it also means full of awe. The Revised JPS translates it “shaken.”' } ] },
      { q: 'Why did you set up the stone as a pillar?', keys: 'stone pillar oil mark set up monument', a: [
        { say: 'To mark the place, so I would remember that God met me here. I said this stone would become God’s house.', src: ['Genesis 28:18', 'Genesis 28:22'] } ] },
      { q: 'Did you ever see Esau again?', keys: 'esau brother again see meet reunion forgive hug', a: [
        { say: 'Twenty years later. I was terrified he still wanted to kill me, so I sent him hundreds of animals as gifts.', src: 'Genesis 32:14–16' },
        { say: 'But Esau ran to meet me. He hugged me and kissed me, and we both cried.', src: 'Genesis 33:4' } ] },
      { q: 'Did you ever come back to Beit El?', keys: 'back return bethel beit el again altar', a: [
        { say: 'Yes. God told me to go back and build an altar there. At Beit El, God blessed me again and confirmed my new name, Israel.', src: 'Genesis 35:1–15' } ] }
    ] },
    { rung: true },
    { next: { say: 'Want another side of this story? My brother Esau remembers that week very differently.', teacher: 'And the Sages have ideas about what the ladder really was.', ids: ['sages', 'esau', 'rashi', 'rambam'] } }
  ] },

  parents: { beats: [
    { say: 'I’m Jacob. You’re parents, so let me start with mine.' },
    { say: 'I’ll say it plainly: my father loved Esau, and my mother loved me.', src: 'Genesis 25:28' },
    { say: 'My mother helped me deceive my father so that I would receive the blessing meant for my brother. When Esau swore to kill me, she sent me to her brother in Haran to stay “awhile,” until his fury subsided.', src: ['Genesis 27:5–13', 'Genesis 27:41–45'] },
    { say: 'My father blessed me twice. The first time, he thought I was Esau. The second time, as I was leaving, he knew exactly who I was, and he gave me the blessing of Abraham.', src: ['Genesis 27:18–29', 'Genesis 28:1–4'] },
    { say: 'Neither of them knew I would be gone twenty years.', src: 'Genesis 31:38–41',
      teacher: 'The Torah never shows Jacob and his mother together again.' },
    { ask: 'What did you carry with you when you first left home? What did your parents send you off with?', discuss: true,
      tip: 'Give people a minute to answer in pairs. Then tap to hear Jacob.',
      reveal: ['I carried my father’s second blessing. It was the first blessing I didn’t have to steal.'] },
    { say: 'I set out from Beersheba toward Haran, and I came upon the place. At sunset I took one of its stones, put it under my head, and lay down.', src: ['Genesis 28:10', 'Genesis 28:11'],
      teacher: 'The Hebrew is <i>vayifga bamakom</i>, “he came upon the place”: not “a place” but “the place,” as if it were already known.' },
    { picture: { style: 'manuscript' } },
    { say: 'Then the dream: a <i>sulam</i> set on the ground with its top reaching the sky, and angels of God going up and down on it.', src: 'Genesis 28:12',
      teacher: 'In the Hebrew, the angels go up and down <i>bo</i>, “on it.” The same word can mean “on him”: on Jacob.' },
    { say: 'God stood <i>alav</i>. Beside me, or above it? I can’t tell you which. And God renewed Abraham’s promises to me: the land, descendants like the dust of the earth, and blessing for all the families of the earth.', src: ['Genesis 28:13', 'Genesis 28:14'] },
    { say: 'Then the words I needed most: “Remember, I am with you: I will protect you wherever you go and will bring you back to this land. I will not leave you until I have done what I have promised you.”', src: 'Genesis 28:15' },
    { say: 'I woke and said, <span class="he-inline" lang="he" dir="rtl">אָכֵן יֵשׁ ה׳ בַּמָּקוֹם הַזֶּה וְאָנֹכִי לֹא יָדָעְתִּי</span> “Surely God is present in this place, and I did not know it!”', src: 'Genesis 28:16' },
    { ask: 'I said “I” twice: <i>v’anochi lo yadati</i>, “and I, I did not know.” Why do you think I needed the extra “I”?', discuss: true,
      tip: 'Take a few ideas. Then tap to hear Jacob.',
      reveal: [
        { say: 'Maybe because the “I” was the problem. I was so full of myself, my fear, my guilt, my plans, that there was no room left to notice God.',
          teacher: { say: 'Lawrence Kushner built a whole book around that extra word: <i>God Was in This Place &amp; I, i Did Not Know</i>.', src: 'kushner' } } ] },
    { say: 'Shaken, I said, “How awesome is this place! This is none other than the abode of God, and that is the gateway to heaven.”', src: 'Genesis 28:17' },
    { say: 'In the morning I set up my stone as a pillar, poured oil on it, and named the place Beit El.', src: ['Genesis 28:18', 'Genesis 28:19'] },
    { say: 'And I made a vow that begins with “if”: if God stays with me and protects me, gives me bread to eat and clothing to wear, and I return safely to my father’s house, then God shall be my God.', src: 'Genesis 28:20–22' },
    { ask: 'Is a faith that begins with “if” a weak faith, or an honest one?', discuss: true,
      tip: 'Let people argue both sides. Then tap to hear Jacob.',
      reveal: [
        'I bargained for a birthright with a bowl of stew. I took a blessing in disguise. Of course I bargained with God.',
        { say: 'It took twenty years, a night of wrestling, and a new name, Israel, before I could stop negotiating.', src: 'Genesis 32:25–29' } ] },
    { prompt: 'Ask me anything about that night. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Why did Rebekah choose you?', keys: 'rebekah mother chose choose favorite why love loved', a: [
        { say: 'Before we were born, God told her that the older would serve the younger.', src: 'Genesis 25:23' },
        { say: 'And it was plain to all of us: my father loved Esau, and my mother loved me. Children notice that kind of thing.', src: 'Genesis 25:28' } ] },
      { q: 'Did you feel guilty?', keys: 'guilt guilty sorry regret feel ashamed shame', a: [
        { say: 'I never said so out loud. But notice what God offered me first that night: protection and presence.',
          teacher: 'The Torah doesn’t say what Jacob felt.' },
        'I think I needed to hear that I wasn’t abandoned, even after what I had done.' ] },
      { q: 'What does “the place” mean?', keys: 'place hamakom makom mean name', a: [
        { say: 'When I got there, it was only a place to stop: stones, and the sun going down. I learned what it was after I slept there.', src: 'Genesis 28:11',
          teacher: { say: 'The Hebrew says <i>makom</i>, “place,” three times in one verse, as if it were a place already known. The Sages heard <i>hamakom</i> as a name for God, the Place of the world.', src: 'Bereshit Rabbah 68:9' } } ] },
      { q: 'Where was God standing?', keys: 'god standing stood where beside above over nitzav alav', a: [
        { say: 'My words for it were <i>nitzav alav</i>. Beside me, or above the ladder? I can’t tell you. I can tell you how it felt: close.', src: 'Genesis 28:13',
          teacher: { say: '<i>Nitzav alav</i> can mean “standing beside him” or “standing over it.” The Revised JPS reads beside Jacob. The King James reads above the ladder. One is a God at the top of the ladder. The other is a God standing next to you.', src: ['rjps', 'kjv'] } } ] },
      { q: 'What happened to your mother?', keys: 'mother rebekah happen happened die died death again see', a: [
        { say: 'Years later, on my way home, her nurse Deborah died near Beit El. We buried her under an oak and named it Allon-bacuth, the Oak of Weeping.', src: 'Genesis 35:8',
          teacher: { say: 'The Torah never tells of a reunion, or even of Rebekah’s death. Rashi says that under that oak, Jacob learned his mother had died.', src: 'Rashi on Genesis 35:8' } } ] },
      { q: 'Did you keep your vow?', keys: 'vow keep kept promise tenth return bethel altar', a: [
        { say: 'I came back to Beit El years later and built an altar there, as God told me to. There God blessed me and confirmed my name, Israel.', src: 'Genesis 35:1–15' } ] },
      { q: 'Why did you pour oil on the stone?', keys: 'oil stone pillar anoint pour', a: [
        { say: 'To set it apart. The stone that held my head became the marker of God’s house.', src: ['Genesis 28:18', 'Genesis 28:22'] } ] }
    ] },
    { rung: true },
    { next: { say: 'You’ve heard me as a son. Visit my mother and father to hear what it was like to send me away.', ids: ['rebekah', 'isaac', 'ramban', 'rambam'] } }
  ] }
};
