/* Voices of the Ladder: the cast, the four versions, and each character's rung.
   Scripts live in one file per character (jacob.js, ...). Source cards live in sources.js. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.levels = {
  k2: {
    label: 'Grades K–2', short: 'K–2',
    group: 'Four or five students',
    how: 'Short lines, pictures, and moving around. The teacher reads aloud.',
    extraLabel: 'The motion'
  },
  g34: {
    label: 'Grades 3–4', short: '3–4',
    group: 'About seven students',
    how: 'Short lines, choices, and puzzles. Students read along.',
    extraLabel: 'The secret'
  },
  g57: {
    label: 'Grades 5–7', short: '5–7',
    group: 'About twelve students',
    how: 'The fuller story, the sources, debate, and typed questions.',
    extraLabel: 'Ask your parents'
  },
  parents: {
    label: 'Parents', short: 'Parents',
    group: 'The adult session',
    how: 'Adult depth, with the Hebrew and the commentators.',
    extraLabel: 'Ask your child'
  }
};

VOICES.cast = {
  k2: ['jacob', 'esau', 'rebekah', 'angel', 'stone'],
  g34: ['jacob', 'esau', 'rebekah', 'isaac', 'angel', 'rashi', 'sages'],
  g57: ['jacob', 'esau', 'rebekah', 'isaac', 'angel', 'rashi', 'sages', 'ramban', 'rambam'],
  parents: ['jacob', 'esau', 'rebekah', 'isaac', 'angel', 'rashi', 'sages', 'ramban', 'rambam']
};

/* Everyone, for the opening screen. */
VOICES.everyone = ['jacob', 'esau', 'rebekah', 'isaac', 'angel', 'stone', 'rashi', 'sages', 'ramban', 'rambam'];

/* Titles of the Jacob's Dream gallery styles used in the visits. */
VOICES.styles = {
  'claymation': 'Claymation',
  'papercut': 'Jewish Papercut',
  'woodcut': 'Expressionist Woodcut',
  'manuscript': 'Illuminated Manuscript',
  'stained-glass': 'Stained Glass',
  'origami': 'Origami',
  'pixel-art': 'Pixel Art',
  'persian-miniature': 'Persian Miniature'
};

VOICES.characters.jacob = {
  name: 'Jacob', he: 'יַעֲקֹב',
  color: { room: '#121a38', room2: '#23306a', accent: '#e2b563' },
  role: { all: 'The dreamer' },
  tease: {
    k2: 'I had the most amazing dream!',
    g34: 'I slept on a stone and dreamed of a ladder to the sky.',
    g57: 'I ran from my brother and found God in the middle of nowhere.',
    parents: 'I left home with a stolen blessing and found a place I didn’t know was holy.'
  },
  rung: {
    k2: { line: 'God was here, and I didn’t even know it!',
          extra: 'Hands on your cheeks like you’re surprised. Then open your arms wide: here!' },
    g34: { line: 'God was in this place, and I didn’t know it.',
           extra: 'I gave the place a new name: Beit El, House of God. Its old name was Luz.' },
    g57: { line: 'God was in this place, and I didn’t know it.',
           extra: 'When have you been somewhere ordinary and only later realized it was special?' },
    parents: { line: 'Surely God is present in this place, and I did not know it!',
               he: 'אָכֵן יֵשׁ יְהוָה בַּמָּקוֹם הַזֶּה וְאָנֹכִי לֹא יָדָעְתִּי',
               extra: 'Where is a place that feels special to you? Did you know it was special the first time you were there?' }
  }
};

VOICES.characters.esau = {
  name: 'Esau', he: 'עֵשָׂו',
  color: { room: '#2b1510', room2: '#5e2c1b', accent: '#e79a5c' },
  role: { all: 'Jacob’s twin brother' },
  tease: {
    k2: 'My brother tricked me!',
    g34: 'I never saw any ladder. I was home, crying.',
    g57: 'Everyone knows Jacob’s dream. Nobody asks about my week.',
    parents: 'A son who wept for a blessing, and a brother who ran to embrace.'
  },
  rung: {
    k2: { line: 'I was so angry… but one day I hugged my brother again.',
          extra: 'Cross your arms and make an angry face. Then open your arms for a big hug.' },
    g34: { line: 'Don’t you have a blessing for me too?',
           extra: 'Twenty years later, I ran to hug my brother, and we both cried.' },
    g57: { line: 'Have you only one blessing?',
           extra: 'Is there enough blessing in our family for everyone?' },
    parents: { line: 'Have you but one blessing, Father?',
               extra: 'Do you ever feel like there isn’t enough of me to go around?' }
  }
};

VOICES.characters.rebekah = {
  name: 'Rebekah', he: 'רִבְקָה',
  color: { room: '#0e2729', room2: '#1c4a4a', accent: '#8fd0c0' },
  role: { all: 'Jacob’s mother' },
  tease: {
    k2: 'I helped Jacob get somewhere safe.',
    g34: 'I sent my son away to save him.',
    g57: 'I told him “a few days.” It became twenty years.',
    parents: 'I sent my son away to save his life, and the Torah never shows us together again.'
  },
  rung: {
    k2: { line: 'I sent you away because I love you.',
          extra: 'Give yourself a hug. Then wave goodbye.' },
    g34: { line: 'Sometimes loving someone means letting them go.',
           extra: 'I told Jacob to stay away “a few days.” It became twenty years.' },
    g57: { line: 'I sent him away to keep him safe.',
           extra: 'What’s the hardest thing you’ve ever done because you love someone?' },
    parents: { line: 'I said “a few days.” It became twenty years.',
               extra: 'What do you want to take with you when you leave home someday?' }
  }
};

VOICES.characters.isaac = {
  name: 'Isaac', he: 'יִצְחָק',
  color: { room: '#241a1d', room2: '#4d3334', accent: '#eab382' },
  role: { all: 'Jacob’s father' },
  tease: {
    g34: 'I blessed my son twice.',
    g57: 'The second blessing was the one I meant.',
    parents: 'I blessed my son knowing he had deceived me.'
  },
  rung: {
    g34: { line: 'I gave you the blessing of Abraham. Take it with you.',
           extra: 'I blessed Jacob twice: once when he tricked me, and once when he left home.' },
    g57: { line: 'The second blessing was the one he didn’t have to steal.',
           extra: 'What blessing would you give me as I grow up?' },
    parents: { line: 'May God give you the blessing of Abraham.',
               extra: 'What blessing would you want from me?' }
  }
};

VOICES.characters.angel = {
  name: 'An angel', he: 'מַלְאָךְ',
  color: { room: '#0c1836', room2: '#22407e', accent: '#f6dc8b' },
  role: { all: 'On the ladder' },
  tease: {
    k2: 'I went up and down the ladder!',
    g34: 'We came down to see Jacob sleeping.',
    g57: 'We went up to see his face in heaven, and down to see him asleep.',
    parents: 'We went up to see his face in heaven, and down to see him asleep.'
  },
  rung: {
    k2: { line: 'Up and down, God is all around!',
          extra: 'Climb with your hands: up, up, up… and down, down, down.' },
    g34: { line: 'Your face is known in heaven.',
           extra: 'The Sages said the angels went up to look at Jacob’s picture in heaven, then came down and found him sleeping.' },
    g57: { line: 'We went up and down to look at him.',
           extra: 'Where do you see a little bit of God in me?' },
    parents: { line: 'They looked for his face in heaven and found him asleep on earth.',
               extra: 'Where do you feel closest to God?' }
  }
};

VOICES.characters.stone = {
  name: 'The stone', he: 'הָאֶבֶן',
  color: { room: '#212429', room2: '#3d424b', accent: '#cdc4b0' },
  role: { all: 'Jacob’s pillow' },
  tease: { k2: 'I was Jacob’s pillow!' },
  rung: {
    k2: { line: 'We all wanted to help Jacob, so God made us one.',
          extra: 'Make two fists and press them together into one.' }
  }
};

VOICES.characters.rashi = {
  name: 'Rashi', he: 'רַשִׁ״י',
  color: { room: '#172317', room2: '#2c4a2a', accent: '#c9d68f' },
  role: { g34: 'A teacher from long ago', g57: 'Teacher · France, 1040–1105', parents: 'Teacher · France, 1040–1105' },
  tease: {
    g34: 'I noticed something funny about the angels.',
    g57: 'Every strange word in the Torah is a clue.',
    parents: 'A thousand years of students have read this story with me.'
  },
  rung: {
    g34: { line: 'Look closely. Every word is a clue.',
           extra: 'The angels changed shifts! The angels of the Land of Israel went up, and new angels came down to go with Jacob.' },
    g57: { line: 'Every word is a clue.',
           extra: 'What’s a small detail about our family that tells a big story?' },
    parents: { line: 'Every oddity in the text is a question waiting for you.',
               extra: 'What’s a question you have about the story?' }
  }
};

VOICES.characters.sages = {
  name: 'The Sages', he: 'חֲכָמֵי הַמִּדְרָשׁ',
  color: { room: '#1d1830', room2: '#3a2f5c', accent: '#cbb6f2' },
  role: { g34: 'Rabbis who loved to argue', g57: 'The Midrash · about 1,500 years ago', parents: 'B’reishit Rabbah and Vayikra Rabbah' },
  tease: {
    g34: 'We have lots of answers, and we like to argue!',
    g57: 'The ladder is Sinai. Or the Temple. Or you.',
    parents: 'Our readings argue with each other, on purpose.'
  },
  rung: {
    g34: { line: 'The ladder could be many things.',
           extra: 'Sulam (ladder) and Sinai add up to the same number: 130!' },
    g57: { line: 'Would you have climbed?',
           extra: 'Would you have climbed? Why or why not?' },
    parents: { line: 'Would you have climbed?',
               extra: 'Would you have climbed? What would have held you back?' }
  }
};

VOICES.characters.ramban = {
  name: 'Ramban', he: 'רַמְבַּ״ן',
  color: { room: '#2a1220', room2: '#56203b', accent: '#f0a6ad' },
  role: { g57: 'Nachmanides · Spain, 1194–1270', parents: 'Nachmanides · Spain, 1194–1270' },
  tease: {
    g57: 'The dream shows how God runs the world.',
    parents: 'Jacob would not be left to the angels.'
  },
  rung: {
    g57: { line: 'You are in God’s own care.',
           extra: 'When have you felt taken care of by something bigger than you?' },
    parents: { line: 'You will be God’s own portion.',
               extra: 'When do you feel protected?' }
  }
};

VOICES.characters.rambam = {
  name: 'Rambam', he: 'רַמְבַּ״ם',
  color: { room: '#232010', room2: '#4b4420', accent: '#e6d47e' },
  role: { g57: 'Maimonides · Spain and Egypt, 1138–1204', parents: 'Maimonides · Spain and Egypt, 1138–1204' },
  tease: {
    g57: 'The ladder is a path you can climb too.',
    parents: 'The angels are prophets: up to learn, down to teach.'
  },
  rung: {
    g57: { line: 'Climb up to learn, then come back down to teach.',
           extra: 'What’s something you learned today that you could teach me?' },
    parents: { line: 'Climb up to learn, then come back down to teach.',
               extra: 'Teach me something you learned today.' }
  }
};
