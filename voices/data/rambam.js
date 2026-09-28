/* Rambam's visit (5–7 and parents). Beat types are described at the top of jacob.js. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

VOICES.scripts.rambam = {

  g57: { beats: [
    { say: 'I’m Rambam: Rabbi Moshe ben Maimon, also called Maimonides. I was born in Córdoba, in Spain, around 1138. My family had to flee, and I ended up in Egypt, where I was a doctor at the sultan’s court and a leader of the Jewish community.' },
    { say: 'I wrote the Mishneh Torah, a code of all of Jewish law, and the Guide for the Perplexed, a book for people who love both Torah and philosophy and feel torn between them.' },
    { say: 'In the Guide, I say that some prophetic parables are built so that every word stands for a separate idea. My example is Jacob’s ladder. I counted seven parts.', src: 'Guide, Introduction' },
    { ask: 'Can you find all seven? Here’s the verse: “a stairway was set on the ground and its top reached to the sky, and angels of God were going up and down on it. And standing beside him was God.”', discuss: true,
      tip: 'Give the group a minute to count. Then tap to hear Rambam.',
      reveal: [
        { say: 'My seven: the ladder; set on the ground; its top reaching the sky; angels of God; going up; going down; and God standing above it. Every word adds an idea.', src: 'Guide, Introduction' },
        { say: 'That’s the first kind of parable, where every word counts. In the second kind, only the whole story carries the idea, and many details are there just to shape the story.', src: 'Guide, Introduction' } ] },
    { say: 'Later in the Guide, I explain some of the seven. “Angels of God” who were going up represent the prophets.', src: 'Guide 1:15' },
    { say: 'Why up first? Because a prophet first climbs, “arriving at a certain height of the ladder,” and then comes down to use that knowledge “for the training and instruction of mankind.”', src: 'Guide 1:15' },
    { picture: { style: 'classical' } },
    { ask: 'Which is harder: climbing up to learn, or coming back down to teach?',
      choices: [
        { label: 'Climbing up', reply: ['Learning takes a lifetime. I studied all of mine.'] },
        { label: 'Coming down', reply: ['Teaching means finding the right words for each student. I spent my life trying.'] },
        { label: 'Both', reply: ['A prophet does both. So does every good teacher.'] }
      ],
      tip: 'Let students defend their answers.' },
    { say: 'And “the Lord stood upon it”? I don’t think God stands anywhere. The word <i>nitzav</i>, used of God, means permanent and unchanging: God at the top of a ladder that anyone may climb.', src: 'Guide 1:15' },
    { say: 'In my words: “This ladder all may climb up who wish to do so.”', src: 'Guide 1:15' },
    { ask: 'What would climbing that ladder look like for you?', discuss: true,
      tip: 'Take a few answers. Then tap to hear Rambam.',
      reveal: ['Today you climbed in your group. When you go back to your family, you come down and teach. That’s the whole ladder.'] },
    { prompt: 'Ask me anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'Did Jacob really see a ladder?', keys: 'real really see ladder dream vision parable parables kinds', a: [
        { say: 'He saw a prophetic vision, and I read it as a parable, where each part stands for an idea.', src: 'Guide, Introduction' } ] },
      { q: 'What are the seven parts?', keys: 'seven parts ideas elements list', a: [
        { say: 'The ladder; set on the ground; its top reaching the sky; angels of God; going up; going down; and God standing above it.', src: 'Guide, Introduction' } ] },
      { q: 'Were you really a doctor?', keys: 'doctor physician medicine sultan court', a: [
        'Yes. I went to the court in Cairo every day and saw patients at home until night. I barely had time to write.' ] },
      { q: 'Why did your family leave Spain?', keys: 'leave spain cordoba flee why family live lived where fez morocco egypt', a: [
        'When I was a boy, new rulers took Córdoba and would not let Jews live there openly. We wandered in Spain for years. In my twenties we moved to Fez, in Morocco, then to the Land of Israel, and then to Egypt: first Alexandria, then Fustat, near Cairo.' ] },
      { q: 'What is the Guide for the Perplexed?', keys: 'guide perplexed book write wrote why arabic language', a: [
        'A book for readers who take both Torah and philosophy seriously and feel torn. Its first part goes word by word through the Bible’s language about God.' ] },
      { q: 'Are angels real?', keys: 'angels real exist', a: [
        { say: 'In this dream, I read the angels as prophets: human beings.', src: 'Guide 1:15' } ] },
      { q: 'Why does God stand at the top?', keys: 'god stand stood top above nitzav', a: [
        { say: 'Not standing like a person. <i>Nitzav</i> means God is constant: the one thing on the ladder that never moves.', src: 'Guide 1:15' } ] },
      { q: 'Can anyone climb the ladder?', keys: 'anyone climb ladder prophet become who can everyone', a: [
        { say: 'In my words: “This ladder all may climb up who wish to do so, and they must ultimately attain to a knowledge of Him who is above the summit of the ladder.”', src: 'Guide 1:15' } ] }
    ] },
    { rung: true },
    { next: { say: 'For another great reading of the angels, visit Ramban. Or hear the Sages, who read the ladder many ways at once.', ids: ['ramban', 'sages', 'jacob'] } }
  ] },

  parents: { beats: [
    { say: 'I am Maimonides. I was born in Córdoba around 1138. My family fled when I was a boy, and after years of wandering I settled in Egypt, as a physician and a leader of the Jewish community. I wrote the Guide for the Perplexed in Arabic.' },
    { say: 'The Guide was written for a reader who takes both Torah and philosophy seriously and feels torn between them. Its first part goes word by word through the Bible’s language about God, so that no one imagines God with a body.' },
    { say: 'Take <i>nitzav</i>, “stood.” In my words: “Whenever this term is applied to God it must be understood in the latter sense,” that is, continuance and permanence. God does not stand anywhere.', src: 'Guide 1:15' },
    { ask: 'The Revised JPS reads, “standing beside him was God.” I read God as permanent, above the ladder. What is gained, and what is lost, with each?', discuss: true,
      tip: 'Pairs first. Then tap to hear Rambam.',
      reveal: ['A God beside you is close, and a God who never changes is reliable. Jacob needed both that night, and so do most of us.'] },
    { picture: { style: 'classical' } },
    { say: 'Then the angels: “Angels of God” who were going up represent the prophets. They go up first, because “the ‘ascending’ and arriving at a certain height of the ladder precedes the ‘descending,’ i.e., the application of the knowledge acquired in the ascent for the training and instruction of mankind.”', src: 'Guide 1:15' },
    { say: 'Samuel ibn Tibbon’s Hebrew translation of my Arabic puts it plainly: <span class="he-inline" lang="he" dir="rtl">ובו יעלה כל מי שיעלה</span> “on it will climb whoever climbs.” In Friedlander’s English: “This ladder all may climb up who wish to do so.”', src: 'Guide 1:15' },
    { ask: 'What does climbing look like for an adult: study, practice, character? And who has come down the ladder for you, to teach you what they learned?', discuss: true,
      tip: 'Pairs, then a few for the room. Then tap to hear Rambam.',
      reveal: ['This morning is built on that reading. Your children climbed in their groups. At the family tables, they come down and teach you. Let them.'] },
    { say: 'One more thing, about how I read. In the Guide’s introduction I describe two kinds of prophetic parable. In one, every word carries an idea. In the other, only the whole carries the idea, and many details are there to shape the story, “or better to conceal the idea.” I added, “Consider this well.” Then I gave Jacob’s ladder as the first kind: seven parts, seven ideas.', src: 'Guide, Introduction' },
    { prompt: 'Ask Rambam anything. Choose a question, or type your own.', typing: true, questions: [
      { q: 'What are the seven parts?', keys: 'seven parts ideas elements list', a: [
        { say: 'The ladder; set on the ground; its top reaching the sky; angels of God; going up; going down; and God standing above it.', src: 'Guide, Introduction' } ] },
      { q: 'Did Jacob see a real ladder?', keys: 'real really see ladder dream vision parable', a: [
        { say: 'He saw a prophetic vision. I read it as a parable in which every word carries an idea.', src: 'Guide, Introduction' } ] },
      { q: 'How is your reading different from Ramban’s?', keys: 'ramban different nachmanides compare disagree', a: [
        { say: 'Ramban reads the angels as God’s messengers, who carry out God’s decrees in the world. I read them, in this dream, as prophets: human beings who climb in understanding and come down to teach.', src: ['Ramban on Genesis 28:12:1', 'Guide 1:15'] } ] },
      { q: 'Why did you write in Arabic?', keys: 'arabic language write wrote hebrew translation', a: [
        'It was the language of my world and of my readers. Samuel ibn Tibbon translated the Guide into Hebrew, and we wrote to each other about the translation.' ] },
      { q: 'Can anyone climb the ladder?', keys: 'anyone climb prophet who can everyone', a: [
        { say: 'In my words: “This ladder all may climb up who wish to do so, and they must ultimately attain to a knowledge of Him who is above the summit of the ladder.”', src: 'Guide 1:15' } ] },
      { q: 'Is God far away, then?', keys: 'god far distant close near personal', a: [
        { say: 'Unchanging is not the same as far. The ladder is there for anyone who wants to climb.', src: 'Guide 1:15' } ] },
      { q: 'What are the two kinds of parable?', keys: 'two kinds parable parables types figures consider well', a: [
        { say: 'In the first, every word stands for its own idea, as in Jacob’s ladder. In the second, the parable as a whole carries one idea, and most of its details are there to give it form, or to hide the idea better.', src: 'Guide, Introduction' } ] },
      { q: 'Where did you live?', keys: 'live lived where egypt fustat cairo cordoba leave spain flee doctor physician', a: [
        'I was born in Córdoba. After we fled, my family wandered in Spain for years. In my twenties we moved to Fez, in Morocco. Then came a short stay in the Land of Israel, and then Egypt: Alexandria first, then Fustat, near Cairo, for the rest of my life.' ] }
    ] },
    { rung: true },
    { next: { say: 'For a reading of the same angels as God’s messengers, visit Ramban. For many readings at once, the Sages.', ids: ['ramban', 'sages', 'jacob'] } }
  ] }
};
