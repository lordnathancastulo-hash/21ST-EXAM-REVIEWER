/* ===== DATA: TOPICS & QUESTION BANK ===== */
const TOPICS = [
  { id: "intro",   name: "Intro to Literature & Literary Standards", src: "Lesson 1 (Part 1)" },
  { id: "appr",    name: "Literary Approaches",                      src: "Lesson 1 (Part 2)" },
  { id: "world",   name: "Compositions That Influenced the World",   src: "Lesson 2" },
  { id: "phlit",   name: "Philippine Literature: Types & Periods",   src: "Lesson 2" },
  { id: "natart",  name: "National Artists for Literature",          src: "Lesson 3" },
  { id: "poetry",  name: "Imagery & Regional Poetry (Gabu)",         src: "Lesson 4" },
  { id: "context", name: "Context & Text Meaning",                   src: "Lesson 5" },
  { id: "genres",  name: "21st Century Literary Genres",             src: "Lesson 6" },
  { id: "story",   name: "Short Story Elements & \"Sinigang\"",      src: "Lesson 7" },
  { id: "multi",   name: "Anecdotes, Multimedia & ICT Skills",       src: "Lesson 7" },
  { id: "read",    name: "Reading Approaches",                       src: "Lesson 7" },
  { id: "adapt",   name: "Literary Adaptation & Self/Peer Assessment", src: "Lesson 8" },
  { id: "asia",    name: "Asian & African Literature",               src: "Lesson 9" },
  { id: "na",      name: "North American Literature",                src: "Lesson 10" }
];

const QUESTIONS = [];
const _counter = {};
/* Q(topic, difficulty 1-3, question, correct, [3 wrong], explanation, concept, whyWrong, memoryTip)
   The correct answer is always written first; the app shuffles choices at runtime. */
function Q(t, d, q, a, w, e, c, ww, m) {
  _counter[t] = (_counter[t] || 0) + 1;
  QUESTIONS.push({ id: t + "-" + _counter[t], t, d, q, opts: [a, ...w], e, c, w: ww, m });
}

/* ---------- INTRO TO LITERATURE ---------- */
Q("intro",1,"The word 'literature' comes from the Latin word 'litera.' What does litera literally mean?","An acquaintance with letters",["A love of wisdom","The art of storytelling","A collection of printed stories"],"The lesson explains that litera literally means 'an acquaintance with letters,' and that literature is also a form of art.","Etymology: Latin litera = letters.","'Love of wisdom' describes philosophy; storytelling and printed collections describe kinds of literature, not the literal meaning of the word.","Litera = Letters → Literature.");
Q("intro",1,"Which major form of literature uses a highly controlled choice and arrangement of language, with devices for sound and rhythm, to convey meaning and an emotional response?","Poetry",["Prose","Drama","Non-fiction"],"Poetry is described as a highly controlled manner of choosing and arranging language using regularity devices for sound and rhythm.","Poetry = controlled language + sound + rhythm.","Prose is the opposite (free flow of sentences); drama and non-fiction are genres, not the form defined by sound and rhythm devices.","Poetry = Pattern; Prose = Plain flow.");
Q("intro",1,"Which major form of literature has a free flow of sentences with no measurement scheme?","Prose",["Poetry","Verse","Lyric"],"Prose is the free flow of sentences and has no measurement scheme; it resembles ordinary speech patterns.","Prose = free flow of sentences.","Poetry, verse and lyric all rely on measured, controlled language.","Prose = 'Plain' like normal talking.");
Q("intro",2,"Which list correctly gives the four GENRES of literature in the lesson?","Poetry, Prose Fiction, Drama, Non-Fiction Prose",["Poetry, Prose, Epic, Drama","Fiction, Essay, Ballad, Drama","Poetry, Novel, Oratory, Biography"],"The lesson lists four genres: Poetry, Prose Fiction, Drama and Non-Fiction Prose. The 'major forms' are only two: poetry and prose.","Genres of literature (L1).","The other lists mix forms, types, and sub-types (epic, ballad, novel, oratory, biography) that are not the four genres.","P-P-D-N: Poetry, Prose fiction, Drama, Non-fiction.");
Q("intro",2,"A teacher says a work is 'timeless and timely' and appeals to everyone, anywhere, because it deals with elemental feelings and fundamental truths. Which literary standard is this?","Universality",["Permanence","Artistry","Style"],"Universality means great literature is forever relevant and appeals to all, anytime and anywhere. Permanence is different: it is about enduring and being re-read.","Universality = appeals to all, everywhere.","Permanence is about re-reading with new insight; artistry is beauty; style is the writer's individual way of expressing ideas.","Universal = Uni (one) for all.");
Q("intro",2,"A novel can be read again and again, and each reading gives fresh delight and new insights. Which standard is shown?","Permanence",["Universality","Intellectual value","Suggestiveness"],"Permanence: a great work endures, and each reading opens new meaning. Its appeal is lasting.","Permanence = enduring, re-readable.","Universality is about appealing to all people; intellectual value stimulates thought; suggestiveness is emotional power.","Permanent = it stays and stays.");
Q("intro",2,"Which standard is associated with the emotional power of literature that stirs feeling and imagination beyond ordinary experience?","Suggestiveness",["Spiritual value","Artistry","Intellectual value"],"Suggestiveness is the emotional power of literature, evoking visions beyond the plane of ordinary life.","Suggestiveness = emotional power.","Spiritual value elevates the spirit through moral values; artistry is beauty; intellectual value stimulates thought.","Suggest → Stir feelings.");
Q("intro",3,"Which pairing of literary standard and meaning is correct?","Style – the peculiar way a writer sees life, forms ideas and expresses them",["Artistry – the capacity to inspire through moral values","Intellectual value – appeals to our sense of beauty","Spiritual value – a work that can be re-read endlessly"],"Style is the writer's own way of seeing and expressing. Artistry appeals to beauty; intellectual value stimulates thought; spiritual value elevates the spirit through moral values.","Seven standards: Universality, Artistry, Intellectual Value, Permanence, Style, Spiritual Value, Suggestiveness.","The wrong options swap the meanings: moral inspiration is spiritual value, beauty is artistry, and re-readability is permanence.","UAIPSSS – 'U Are I'm Perfectly Sure Style Sells'.");

/* ---------- LITERARY APPROACHES ---------- */
Q("appr",1,"Analyzing the symbolism of the forest, the characterization of Florante and Adolfo, and how conflict develops the plot is an example of which approach?","Formalistic / Literary Approach",["Historical Approach","Cultural Approach","Reader-Response Approach"],"The Formalistic approach examines the work's own elements and structure: plot, character, setting, symbolism, imagery and language.","Formalistic = 'How is the work constructed?'","Historical looks at the period; cultural looks at traditions; reader-response looks at the reader's experience.","Form = the shape/structure of the text.");
Q("appr",1,"Discussing friendship, love, responsibility and seeing beyond appearances in The Little Prince is which approach?","Moral / Humanistic Approach",["Sociological Approach","Psychological Approach","Formalistic Approach"],"The Moral/Humanistic approach focuses on lessons, values and human experiences presented in the work.","Moral = 'What values or lessons does it teach?'","Sociological studies society; psychological studies characters' minds; formalistic studies structure.","Moral = Lessons.");
Q("appr",2,"Analyzing how Spanish colonial rule and the abuses of the friars are reflected in Noli Me Tangere uses which approach?","Historical Approach",["Sociological Approach","Cultural Approach","Moral Approach"],"The Historical approach examines the work in relation to the historical period and events when it was written or set.","Historical = 'What historical context is reflected?'","Sociological focuses on social groups and problems in general; cultural on customs and traditions.","History = events and period.");
Q("appr",2,"Examining family expectations, sibling roles, financial differences and social pressures in Four Sisters and a Wedding is which approach?","Sociological Approach",["Psychological Approach","Impressionistic Approach","Historical Approach"],"The Sociological approach examines how literature reflects society, social relationships and problems.","Sociological = 'What does it show about society?'","Psychological focuses on inner thoughts of characters; impressionistic on the reader's feelings; historical on past events.","Socio = Society.");
Q("appr",2,"Comparing the Madrigal family's traditions and values in Encanto with Filipino family traditions is which approach?","Cultural Approach",["Sociological Approach","Formalistic Approach","Moral Approach"],"The Cultural approach focuses on culture, traditions, beliefs, customs and values presented in a work.","Cultural = 'What culture and traditions are represented?'","Sociological is about social relationships and problems; the others do not compare cultural practices.","Culture = Customs.");
Q("appr",2,"Analyzing Simba's fear, guilt and sense of responsibility in The Lion King, and how these affect his decisions, is which approach?","Psychological Approach",["Moral Approach","Cultural Approach","Historical Approach"],"The Psychological approach examines the thoughts, emotions, motivations, behavior and inner conflicts of characters.","Psychological = 'What are the characters thinking and feeling?'","Moral looks at lessons; cultural at traditions; historical at time period.","Psycho = Mind.");
Q("appr",3,"A reader explains how Seven Sundays made THEM feel about family, forgiveness and spending time with loved ones. Which approach is this?","Impressionistic Approach",["Reader-Response Approach","Sociological Approach","Psychological Approach"],"The Impressionistic approach focuses on the reader's personal feelings and impressions after experiencing the work. It asks 'What feelings does the work leave on me?'","Impressionistic = feelings/impressions left on the reader.","Reader-Response is close, but it focuses on how the reader's experiences and beliefs shape the interpretation, not on the feelings left.","Impression = Emotion afterwards.");
Q("appr",3,"Two classmates interpret the sibling conflicts in Seven Sundays differently because of their own experiences with family relationships. Which approach?","Reader-Response Approach",["Impressionistic Approach","Sociological Approach","Cultural Approach"],"Reader-Response focuses on how the reader's own experiences, beliefs and perspectives influence interpretation. Different readers can reach different meanings.","Reader-Response = 'How does my experience shape my interpretation?'","Impressionistic is about the feeling left behind; sociological and cultural look at society and traditions.","Response = my background shapes my reading.");

/* ---------- WORLD COMPOSITIONS ---------- */
Q("world",1,"Which composition is a collection of sacred books by ancient prophets and historians that recorded the relationship between God and His people for over 4,000 years?","The Bible",["The Koran","The Mahabharata","The Book of the Dead"],"The lesson says the Bible originated from Palestine and is a collection of sacred books written by ancient prophets and historians.","Bible: Palestine; sacred books.","The Koran is Islamic and from Saudi Arabia; the Mahabharata is an Indian epic; the Book of the Dead is Egyptian funerary spells.","Bible = Palestine.");
Q("world",2,"How many units (suras) does the Koran consist of?","114",["99","66","150"],"The Koran consists of 114 suras of varying length; the first sura is said as part of the ritual prayer. It is believed to be God's word dictated to Muhammad by the archangel Gabriel in Arabic.","Koran: Saudi Arabia, 114 suras.","The other numbers are not supported by the lesson.","114 = 'Koran Counting'.");
Q("world",2,"Which work tells the story of Odysseus's journey home after the war is over?","The Odyssey",["The Iliad","The Divine Comedy","The Song of Roland"],"Homer wrote both. The Iliad tells part of the mythical Trojan War, while The Odyssey tells of Odysseus's journey home.","Homer: Iliad (war) vs Odyssey (journey home).","The Iliad covers the war itself; the Divine Comedy is Dante's; Roland is French.","Odyssey = Odysseus' trip home.");
Q("world",2,"The Pandavas and Kauravas battle for the throne of Hastinapura in the Kurukshetra War. Which epic is this?","The Mahabharata",["The Iliad","El Cid Compeador","Canterbury Tales"],"The Mahabharata is the longest epic and contains the history of religion in India, with smaller stories and philosophical discourses interwoven.","Mahabharata: India; longest epic.","The Iliad is Greek; El Cid is Spanish; Canterbury Tales is English.","Maha = Great (long) epic.");
Q("world",2,"Which work is a collection of stories told by pilgrims travelling to Canterbury Cathedral to visit the shrine of Saint Thomas Becket?","Canterbury Tales by Geoffrey Chaucer",["The Divine Comedy by Dante","Uncle Tom's Cabin","One Thousand and One Nights"],"Chaucer wrote it in the 14th century; each story is narrated by a pilgrim.","Canterbury Tales: Chaucer, 14th century, pilgrims.","Dante's work is a pilgrim's journey through hell and salvation; Arabian Nights uses Scheherazade as a storyteller.","Canterbury = Chaucer = Cathedral.");
Q("world",1,"Which novel by Harriet Beecher Stowe unmasked the horrors of slavery and brought millions to the abolitionist movement in America?","Uncle Tom's Cabin",["The Song of Roland","El Cid Compeador","The Book of the Days"],"Uncle Tom's Cabin pushed back against dominant beliefs about black people and exposed the injustices of slavery.","Uncle Tom's Cabin: Stowe; anti-slavery.","The other works are epics or philosophical texts unrelated to American abolition.","Tom's Cabin = Slavery exposed.");
Q("world",2,"Dante's Divine Comedy is essentially about:","How people learn to attain salvation",["A king's conquest of Valencia","The chivalry of Charlemagne's knights","Funeral spells for the dead"],"The main idea is how people attain salvation, with a long narration of the pilgrim going through hell in the Inferno.","Divine Comedy: salvation; Inferno.","Valencia = El Cid; Charlemagne = Song of Roland; funeral spells = Book of the Dead.","Dante = Divine = Salvation.");
Q("world",3,"Which pairing of work and country/culture is correct?","Song of Roland – France; El Cid Compeador – Spain",["Song of Roland – Spain; El Cid Compeador – France","Song of Roland – Italy; El Cid Compeador – Spain","Song of Roland – France; El Cid Compeador – Italy"],"The Song of Roland is an 11th-century French epic poem about Charlemagne's knights fighting Muslim Saracens in Spain. El Cid represents the cultural characteristic and national history of Spain; he ruled Valencia from 1094 until 1099.","Roland = France; El Cid = Spain.","Roland is set partly in Spain, which makes swapping them tempting, but the Song of Roland is a French work (Golden Age of France).","Roland = Royal France; Cid = Castile/Spain.");
Q("world",3,"In the lesson, 'Book of the Dead' refers to:","A modern term for ancient Egyptian funerary spells that helped the dead reach the afterlife and unite with Osiris",["An Indian epic about two branches of a family","A Chinese book reflecting Confucius's vision of an ideal society","A Greek poem about the Trojan War"],"There are nearly 200 known spells, but they were not collected into books in the modern sense.","Book of the Dead: Egypt; Osiris.","The wrong options describe the Mahabharata, the Book of the Days (Analects) and the Iliad.","Dead → Osiris → Egypt.");
Q("world",3,"In the lesson on 'The Book of the Days' (Confucius), which virtue refers to filial piety?","Xiao",["Ren","Li","Tianming"],"The lesson lists ren (humanity), li (ritual), xiao (filial piety) and tianming (heavenly mandate). Confucius hoped to restore the Zhou dynasty's rites to bring peace.","Confucian virtues: ren, li, xiao, tianming.","Ren = humanity, li = ritual, tianming = heavenly mandate.","Xiao = 'Child respects parents'.");
Q("world",2,"Why does Scheherazade end each night's tale without finishing it in One Thousand and One Nights?","So the king will postpone her execution to hear the ending",["Because she forgets the endings","Because her father forbids her to finish","Because the Vizier wants to delay the wedding"],"King Shahryar executed each bride the morning after the wedding. Scheherazade survived by leaving each story unfinished so he would delay her execution.","Frame story: Scheherazade and Shahryar.","The other reasons are not supported by the story summary.","Cliffhanger = survival.");

/* ---------- PHILIPPINE LITERATURE ---------- */
Q("phlit",2,"Which type of prose is a narrative with one or more characters, one plot and one single impression (example: 'Footnote to Youth')?","Short story",["Novel","Legend","Oration"],"A short story has one plot and one single impression. A novel is long and divided into chapters.","Short story vs novel.","A novel is long; a legend is about origins; oration is a formal public speech.","Short story = 1 plot, 1 impression.");
Q("phlit",2,"Which fictitious narrative has animals or inanimate things that speak and act like people, meant to mold children's ways and attitudes?","Fable",["Legend","Anecdote","Biography"],"Fables (e.g., 'The Monkey and the Turtle') use talking animals to teach lessons.","Fable = talking animals + lesson.","Legends explain origins; biographies tell a life story.","Fable = Furry characters.");
Q("phlit",1,"Which is NOT one of the three types of poetry in the lesson?","Descriptive poetry",["Narrative poetry","Lyric poetry","Dramatic poetry"],"The three types are narrative, lyric and dramatic poetry.","Three types of poetry.","The other three are the types listed in the lesson.","N-L-D: Narrative, Lyric, Dramatic.");
Q("phlit",2,"Which lyric poem is of 14 lines and has two types, the Italian and the Shakespearean?","Sonnet",["Ode","Elegy","Psalm"],"A sonnet deals with an emotion, a feeling, or an idea in 14 lines.","Sonnet = 14 lines.","An ode has no definite number of lines; an elegy is about death; a psalm praises God or the Virgin.","Sonnet = Sixteen? No! Fourteen.");
Q("phlit",2,"An awit has measures of how many syllables, and a corrido has how many?","Awit: 12 syllables; Corrido: 8 syllables",["Awit: 8 syllables; Corrido: 12 syllables","Awit: 7 syllables; Corrido: 5 syllables","Awit: 14 syllables; Corrido: 12 syllables"],"Awit (Florante at Laura) has twelve syllables and is slowly sung; corrido (Ibong Adarna) has eight syllables and is recited to a martial beat.","Awit 12 / Corrido 8.","The other options reverse or invent the syllable counts.","Awit = A-twelve; Corrido = Core-eight.");
Q("phlit",3,"Which dramatic form is an exaggerated comedy with laughable lines and situations too ridiculous to be true, with caricatured characters?","Farce",["Comedy","Melodrama","Tragedy"],"A farce exaggerates comedy to arouse mirth. Comedy is light with a happy ending; melodrama arouses intense emotion; tragedy ends in ruin.","Farce = exaggerated comedy.","Regular comedy is not exaggerated to absurdity; melodrama and tragedy are serious.","Farce = Far-out funny.");
Q("phlit",2,"Why is pre-colonial (pre-Spanish) literature open to many alterations?","Because it is oral in nature",["Because it was written in Alibata only","Because it was printed in xylography","Because it was translated by the friars"],"Pre-Spanish literature was passed on orally, which allowed many alterations.","Pre-Spanish literature = oral.","Printing and writing systems came into play more strongly with Spanish colonization.","Oral = Always changing.");
Q("phlit",2,"Which was the first book printed in the Philippines (1593, xylography, in Tagalog and Spanish)?","Doctrina Christiana",["Nuestra Señora del Rosario","Urbana at Felisa","Ang Barlaan at Josephat"],"Doctrina Christiana was written by Fr. Juan de Placencia and Fr. Domingo Nieva.","Doctrina Christiana = first book (1593).","Nuestra Señora del Rosario was the second printed book; the others are later works.","First = Doctrina.");
Q("phlit",3,"Which was a result of Spanish colonization on Philippine literature, according to the lesson?","The Alibata was replaced by the Roman alphabet",["Oral literature disappeared completely","Tagalog became the only literary language","Christian doctrine was removed from religious practice"],"Spanish influence replaced Alibata with the Roman alphabet, made Spanish the literary language and made Christian doctrine the basis of religious practices.","Influences of Spanish colonization.","The other options contradict the lesson's account of Spanish influence.","Alibata → Roman.");
Q("phlit",2,"Which pre-Spanish form is a chant used in witchcraft or enchantment?","Bulong",["Salawikain","Sawikain","Kasabihan"],"Bulong is a chant used in witchcraft or enchantment. Salawikain are epigrams about good behavior; sawikain emphasize points vividly; kasabihan convey wisdom.","Pre-Spanish forms of expression.","The other three are wise sayings and proverbs.","Bulong = Whisper spell.");
Q("phlit",2,"Which of the following is an Ilokano epic?","Biag ni Lam-ang",["Maragtas","Bidasari","Kumintang"],"Biag ni Lam-ang is an Ilokano epic; Maragtas is Visayan; Bidasari is a Moro epic; Kumintang is a Tagalog epic.","Epics by region.","Each distractor is an epic from another region.","Lam-ang → Ilocos.");

/* ---------- NATIONAL ARTISTS ---------- */
Q("natart",1,"Who was the first National Artist of the Philippines, known as the 'Grand Old Man of Philippine Art'?","Fernando C. Amorsolo",["Amado V. Hernandez","Jose Garcia Villa","Levi Celerio"],"Fernando C. Amorsolo was the first National Artist for Visual Arts.","First National Artist.","The others are National Artists for Literature or music-related literature.","Amorsolo = Art first.");
Q("natart",2,"Who proclaims the rank and title of National Artist?","The President of the Philippines",["The Cultural Center of the Philippines board only","The Palanca Awards Committee","The Bangko Sentral ng Pilipinas"],"The panel of literary experts, NCCA commissioners and the CCP Board participate in selection, and the President proclaims the title.","Selection process.","BSP only mints the gold-plated medallion; Palanca is a separate literary award.","President = proclaims.");
Q("natart",2,"Which National Artist is called 'Makata ng Manggagawa' and practiced 'committed art'?","Amado V. Hernandez",["Nick Joaquin","N.V.M. Gonzalez","Carlos P. Romulo"],"Hernandez was a poet, playwright and novelist who believed writers act as the conscience of society.","Hernandez = Poet of the Workers.","The others are known for other works and styles.","Hernandez = Hands of workers.");
Q("natart",2,"Which National Artist is the 'master of the comma poem' with the pen name Doveglion (Dove, Eagle, Lion)?","Jose Garcia Villa",["Francisco Arcellana","Rolando Tinio","Edith Tiempo"],"Villa used commas in every word and compared his style to pointillism.","Villa = comma poems.","The other writers are known for other styles.","Villa = Comma.");
Q("natart",2,"Who is known as 'Quijano de Manila' and pioneered literary journalism?","Nick Joaquin",["Carlos P. Romulo","Carlos L. Quirino","Levi Celerio"],"Nick Joaquin wrote The Woman Who Had Two Navels, among others.","Joaquin = Quijano de Manila.","Romulo was a Pulitzer winner; Quirino was a biographer; Celerio a lyricist.","Nick = Quick journalist.");
Q("natart",3,"Which National Artist was the only Asian to win a Pulitzer Prize in Journalism, for articles forecasting the outbreak of World War II?","Carlos P. Romulo",["Carlos L. Quirino","Nick Joaquin","Francisco Arcellana"],"Romulo was a reporter at 16, newspaper editor at 20 and publisher at 32, and wrote 18 books.","Romulo = Pulitzer.","Quirino wrote Man of Destiny; Joaquin and Arcellana are known for other works.","Romulo = Asian Pulitzer.");
Q("natart",2,"Which National Artist made it into the Guinness Book of World Records as the only person able to make music using just a leaf?","Levi Celerio",["Rolando Tinio","N.V.M. Gonzalez","Edith Tiempo"],"Levi Celerio was a lyricist and composer with more than 4,000 songs.","Celerio = leaf music.","The others were writers, not known for leaf music.","Levi = Leaf.");
Q("natart",2,"Which National Artist wrote 'Man of Destiny,' a biography of President Manuel L. Quezon?","Carlos L. Quirino",["Carlos P. Romulo","Nick Joaquin","Amado Hernandez"],"Quirino was the first Filipino recognized as National Artist for Historical Literature in 1997.","Quirino = Biographer.","Romulo wrote memoirs; Joaquin wrote fiction and history; Hernandez wrote poetry.","Quirino = Quezon's biographer.");
Q("natart",3,"Which organization was established in 1950 to inspire and recognize Philippine writers?","Carlos Palanca Memorial Awards for Literature",["Cultural Center of the Philippines","National Commission for Culture and the Arts","Bangko Sentral ng Pilipinas"],"The Palanca Awards began in 1950 and gave first prizes in the Short Story in 1951. The CCP was created in 1966.","Palanca = 1950; CCP = 1966.","CCP is 1966; NCCA is the policy body; BSP mints the medallion.","Palanca = Palanca 1950.");
Q("natart",3,"Which National Artist wrote 'The Bamboo Dancers' and 'The Bread of Salt'?","N.V.M. Gonzalez",["Edith Tiempo","Francisco Arcellana","Rolando Tinio"],"N.V.M. Gonzalez was a poet, essayist, novelist and teacher who received a Rockefeller Foundation Fellowship in 1948.","Gonzalez = Bamboo Dancers.","Tiempo wrote Bonsai; Arcellana wrote Frankie; Tinio was a playwright.","NVM = Bread of Salt.");
Q("natart",3,"Who is credited with establishing Filipino-language drama and claimed for theater a place among the arts in the 1960s?","Rolando S. Tinio",["Levi Celerio","Edith Tiempo","Jose Garcia Villa"],"Tinio was a playwright, poet, teacher, critic and translator.","Tinio = Filipino drama.","The others are known for music, fiction and poetry.","Tinio = Theater.");

/* ---------- POETRY / IMAGERY / GABU ---------- */
Q("poetry",1,"Imagery is a poetic element that:","Creates a mental picture using figurative language that appeals to the senses",["Counts the syllables in each line","Rhymes the ends of lines","Tells the history of the poem"],"Imagery represents objects, places, ideas, or actions that appeal to the readers' senses.","Imagery = mental picture + senses.","The other options describe meter, rhyme and background context.","Image = Picture in the mind.");
Q("poetry",2,"Who wrote the poem 'Gabu,' which depicts a coastline in Ilocos battered by the sea?","Carlos A. Angeles",["Danton Remoto","Jose Garcia Villa","Amado Hernandez"],"Angeles is the poet of A Stun of Jewels, which won a Palanca prize and the Republic Cultural Heritage Award in 1964.","Gabu = Carlos A. Angeles.","Remoto wrote the Rizal execution poem; the others are other National Artists.","Gabu = Angeles.");
Q("poetry",3,"Why is Carlos A. Angeles's A Stun of Jewels historically notable in the Palanca Awards?","It won first prize in 1964, when poetry was first considered in the awards",["It was the first book ever printed in the Philippines","It was the first epic published in Ilocos","It was written in the pre-Spanish period"],"The collection of 17 poems won first prize and also received the Republic Cultural Heritage Award in the same year.","A Stun of Jewels: 17 poems; 1964.","The other options are unrelated to the collection.","1964 = poetry's first year at Palanca.");
Q("poetry",2,"Which body of water borders the Ilocos Region to the west?","South China Sea",["Philippine Sea","Sulu Sea","Celebes Sea"],"The Ilocos Region (Region 1) is in northwest Luzon and is bordered on the west by the turbulent South China Sea.","Region 1: Ilocos Norte, Ilocos Sur, La Union, Pangasinan.","The other seas are not named as its border in the lesson.","Ilocos = west = South China Sea.");
Q("poetry",3,"According to the lesson, why do Ilocanos often experience heavy rains and violent typhoons?","Because of their geographical boundaries along a narrow coastal plain",["Because they live in the Cordillera mountains","Because they are bordered by Central Luzon","Because they have no coastline"],"Most Ilocanos live along a narrow coastal plain, and because of geographical boundaries they face heavy rains and violent typhoons.","Geography shapes literature.","The wrong options contradict the geography described.","Coastal = Storms.");
Q("poetry",3,"According to the lesson, Philippine literary masterpieces resonate strongly because they:","Speak of the collective experiences of Filipinos, such as struggles, triumphs and revolutions",["Are written only in English","Avoid talking about conflict","Come from a single region"],"They are rooted in the diverse cultural heritage and the shared experiences of Filipinos.","Philippine poetry: diverse heritage + collective experience.","The lesson stresses diversity of heritage and varied texts.","Many voices, one archipelago.");

/* ---------- CONTEXT & TEXT MEANING ---------- */
Q("context",1,"Context originates from the notion of 'weaving together.' It refers to:","The circumstances that form the setting of events, statements or ideas so they can be fully understood",["The rhyme scheme of a poem","The number of lines in a stanza","The summary of a story"],"Context helps readers understand and assess a text fully.","Context = circumstances/setting of meaning.","The other options describe poetic structure or summary.","Con-text = woven together.");
Q("context",2,"Knowing about the writer's life, values, assumptions, gender, race, sexual orientation, and political and economic issues is called:","The writer's context",["Text context","Social context","Visual imagery"],"The slide describes the writer's context as understanding the author's background and issues.","Writer's context.","Text context is the publishing story; social context is the society of characters and author.","Writer = Who wrote it.");
Q("context",2,"Which type of context deals with a text's publishing story, such as its place in a newspaper, history, or events?","Text context",["Writer's context","Socio-cultural context","Imagery"],"The text's context is about its publishing story.","Text context = publication.","Writer's context is about the author; socio-cultural is about society.","Text = Where printed.");
Q("context",2,"The society in which the characters live and the author's text was produced is the:","Social and socio-cultural context",["Text context","Writer's context","Auditory imagery"],"It features the society of both characters and author.","Social/socio-cultural context.","The other contexts focus on publication or the author.","Social = Society.");
Q("context",2,"In Danton Remoto's 'Padre Faura Witnesses the Execution of Rizal,' who speaks, and who is 'Pepe'?","Padre Faura speaks; Pepe is Rizal",["Rizal speaks; Pepe is Padre Faura","A soldier speaks; Pepe is a student","The poet speaks; Pepe is Remoto"],"The speaker stands on the roof of the Ateneo municipal and recalls Pepe, a former student, now a blur between soldiers with raised Mausers.","Speaker and subject of the poem.","The other options swap or invent identities.","Faura watches; Pepe falls.");
Q("context",3,"In the poem, 'The star itself is already dead' while the star is 'still shimmering.' The best interpretation is that:","Rizal's light/legacy still shines even after his death",["The soldiers are afraid of the stars","The speaker is studying astronomy","Rizal has escaped the execution"],"The image contrasts a dead star whose light still reaches us with Rizal's execution; his influence remains visible. This is an interpretation supported by the poem's imagery.","Imagery builds layered meaning.","The other options ignore the poem's context.","Dead star, living light.");
Q("context",2,"Which type of imagery appeals to actions and movement?","Kinesthetic imagery",["Visual imagery","Auditory imagery","Olfactory imagery"],"Visual appeals to sight, auditory to hearing, and kinesthetic to actions and movement.","Types of imagery in the lesson.","Olfactory is not one of the three listed types.","Kine = Motion.");
Q("context",2,"According to the lesson, imagery is important to context and meaning because it:","Builds context, creates emotion and reveals meaning",["Replaces the theme of the text","Makes a text shorter","Eliminates the need for context"],"Imagery helps the reader understand setting, mood and situation, evokes feelings and adds deeper layers of interpretation.","Three roles of imagery.","The others are false.","Imagery = Context + Emotion + Meaning.");
Q("context",3,"What did 'Pepe' ask Padre Faura about, instead of the stars, in the poem?","Purgatory",["Heaven","Freedom","Europe"],"The speaker thought they would talk about stars that do not collide in the sky; instead Pepe asked about purgatory.","Poem details.","Europe is mentioned only as the place of the bitter winter.","Pepe asked about purgatory.");

/* ---------- 21ST CENTURY GENRES ---------- */
Q("genres",1,"21st Century Literature refers to:","New literary work created within the last decade by contemporary authors, reflecting a technological culture",["Only works printed on paper","Only works from the Spanish period","Epics from ancient times"],"It deals with current themes and issues and reflects technological culture.","21st Century Literature defined.","The other options describe older or narrower categories.","21st = Tech + Today.");
Q("genres",2,"In an illustrated novel, about how much of the narrative is presented without words?","50%",["10%","25%","90%"],"The reader must interpret the images to fully understand the story.","Illustrated novel = ~50% pictures.","The other percentages are not stated.","Half-half.");
Q("genres",1,"The Japanese word for comics, also used as a generic term for comics originally published in Japan, is:","Manga",["Manhwa","Manhua","Anime"],"Manhwa is Korean, manhua is Chinese, and anime is Japanese animation.","Manga vs manhwa vs manhua vs anime.","Each distractor is a related but different term.","Manga = Japan.");
Q("genres",3,"Which manga pairing of category and example is correct?","Seinen – men's manga (Akira)",["Shojo – boys' manga (Naruto)","Kodomo – women's manga (Paradise Kiss)","Josei – children's manga (Doraemon)"],"Shonen = boys (Naruto, Bleach, One Piece); Shojo = girls (Sailor Moon); Seinen = men (Akira); Josei = women (Loveless, Paradise Kiss); Kodomo = children (Doraemon, Hello Kitty).","Manga demographics.","The wrong options mismatch audience and example.","Shonen Boys; Shojo Girls; Seinen Seniors-men; Josei Jewels-women; Kodomo Kids.");
Q("genres",2,"Which term is the general Korean word for comics and print cartoons?","Manhwa",["Manhua","Manga","Anime"],"Manhwa is Korean; manhua is Chinese.","Asian comics terms.","Manga is Japanese, manhua is Chinese, anime is animation.","Manhwa → Hangul → Korean.");
Q("genres",3,"How is a traditional manga page read?","Right to left, including panels and text",["Left to right","Top to bottom only","Bottom to top"],"Manga usually follows the traditional Japanese style of reading from right to left.","Reading manga.","Western comics are read left to right.","Manga flips: right → left.");
Q("genres",2,"Text tula is mobile phone poetry that uses short traditional forms such as the tanaga. What is its syllable count?","7-7-7-7",["5-7-5","12-12-12-12","8-8-8-8"],"Tanaga has four lines of seven syllables with an aabb, abab or abba rhyme scheme.","Text tula / tanaga.","5-7-5 is haiku.","Tanaga = Four 7s.");
Q("genres",2,"Speculative fiction, also called 'literature of ideas,' deals with:","Futuristic science and technology, space or time travel, parallel universes and extraterrestrial life",["Only romantic comedy","Only true events","Only blogs and emails"],"It deals with imaginative concepts.","Speculative fiction.","The other options describe other genres.","Speculate = imagine the future.");
Q("genres",2,"Digi-fiction is called 'Triple Media Literature' because it combines:","Book, movie/video and internet website",["Radio, TV and newspaper","Poem, song and dance","Blog, email and text message"],"It combines three media: a book, a film/video and a website.","Digi-fiction = 3 media.","The other options list unrelated trios.","Digi = book + video + web.");
Q("genres",2,"Which genre is a style of fiction of extreme brevity, also called sudden fiction or micro-fiction?","Flash fiction",["Doodle fiction","Chick lit","Hyper poetry"],"Flash fiction includes nano tales, postcard fiction and short-short stories.","Flash = very short.","Doodle fiction uses drawings and handwriting; hyper poetry uses hypertext.","Flash = quick read.");
Q("genres",2,"Which genre incorporates doodle writing, drawings and handwritten graphics in place of traditional font?","Doodle fiction",["Flash fiction","Digi-fiction","Text-talk novel"],"The drawings enhance the story and often add humor.","Doodle fiction.","The other genres are defined by brevity, media, or chat formats.","Doodle = drawings.");
Q("genres",3,"Who is called the 'King of Pinoy Komiks' and 'Father of Filipino Superheroes,' creator of Darna, Captain Barbell, Lastikman and Dyesebel?","Mars Ravelo",["Budjette Tan","Leonardo Giron","Kajo Baldisimo"],"Marcial Custodio Ravelo lived from 1916 to 1988.","Mars Ravelo.","Tan and Baldisimo made Trese; Giron illustrated Noli Me Tangere.","Mars = Marvels of PH.");

/* ---------- SHORT STORY & SINIGANG ---------- */
Q("story",1,"A short story is best described as:","A brief fictional prose narrative that can be read in a single sitting and aims at a single effect or mood",["A long narrative divided into chapters","A poem with fixed rhyme","A report of daily events"],"It focuses on a self-contained incident or series of linked incidents.","Short story.","The wrong options describe a novel, a poem and news.","One sitting, one effect.");
Q("story",1,"Which is NOT a basic element of a short story in the lesson?","Rhyme scheme",["Character","Conflict","Point of view"],"The elements are character, setting, plot, conflict, theme and point of view.","Short story elements.","The others are elements.","C-S-P-C-T-P.");
Q("story",2,"In 'Sinigang' by Marie Aubrey J. Villaceran, whose funeral did Liza attend?","Her half-brother Lem",["Her father","Her aunt Tita Loleng","Her sister Meg"],"Liza recalls the funeral in Bulacan while cooking sinigang with Tita Loleng.","Plot of Sinigang.","The others are not the deceased.","Lem = half-brother.");
Q("story",2,"Why did Liza attend the funeral even though she did not want to?","Her father requested it and her mother insisted",["Her aunt forced her","Her friends invited her","She wanted to meet Sylvia"],"Her mother ordered Liza's sisters to wake her even after she tried to avoid the trip.","Conflict motivation.","The other reasons are not in the story.","Mom insisted.");
Q("story",2,"Which point of view is used in 'Sinigang'?","First person, with Liza as narrator",["Third person omniscient","Second person","Third person limited to Tita Loleng"],"Liza says 'I' throughout and narrates her feelings.","Point of view.","The others do not match the narration.","'I' = first person.");
Q("story",2,"What does Tita Loleng say decides which vegetables go in sinigang?","The taste of those who will eat it",["The season of the year","The recipe from the cookbook","The price of vegetables"],"She says one never knows what tastes good until trying, and that the recipe depends mostly on the taste of the diners.","Theme link: flexibility.","The other answers are not stated.","Sinigang = to taste.");
Q("story",3,"Liza crushes onions, tomatoes and salt and feels 'a giant hand rubbing salt into me.' This image mainly shows:","Her pent-up pain and anger breaking through her calm mask",["Her love of cooking","Her joy at seeing her father","Her boredom"],"At that moment her 'mask of indifference slipped.' The kinesthetic imagery links cooking and emotional pain.","Imagery and symbolism.","The other options contradict the scene.","Salt in the wound.");
Q("story",3,"The ending, in which Liza gives her father 'a smile that would never quite show, not even in my eyes,' suggests that:","She behaves politely but has not truly healed or forgiven",["She has completely forgiven him","She plans to leave home","She is happy at dinner"],"She answers politely and without rancor, but her smile never reaches her eyes, showing lingering hurt.","Theme: unresolved hurt.","The other options are not supported by the final lines.","Smile without eyes.");

/* ---------- ANECDOTE, MULTIMEDIA & ICT ---------- */
Q("multi",1,"An anecdote is:","A short entertaining or interesting story about a real incident or person",["A long epic poem","A formal public speech","A scientific report"],"It may make listeners laugh or ponder a topic.","Anecdote defined.","The others describe other forms.","Anecdote = short real story.");
Q("multi",2,"Which is NOT a purpose of anecdotes in the lesson?","To advertise products",["To bring cheer","To reminisce","To caution"],"The four purposes are to bring cheer, to reminisce, to caution, and to persuade or inspire.","Purposes of anecdotes.","The others are listed purposes.","C-R-C-P.");
Q("multi",2,"A father tells his son about a deadly collision caused by ignoring traffic signs. What is the purpose of the anecdote?","To caution",["To bring cheer","To reminisce","To inspire"],"Frightening stories of danger help people realize consequences.","Anecdote to caution.","It is not meant to amuse or recall happy memories.","Caution = warning.");
Q("multi",2,"A teacher tells students about a boy who struggled in reading but became a proficient reader. The purpose is to:","Persuade or inspire",["Caution","Bring cheer","Reminisce"],"Stories of success through hard work encourage others.","Anecdote to inspire.","It is not warning, comedy or nostalgia.","Inspire = encourage.");
Q("multi",2,"Marshall (2001) defined multimedia as:","The computer-controlled integration of text, graphics, drawings, images, video, animation and audio",["Only video recording","A printed textbook","A single image format"],"Multimedia can be represented, stored, transmitted and processed digitally.","Multimedia defined.","The wrong options are too narrow.","Multi = Many media.");
Q("multi",2,"Which multimedia format is a graphical technique to visualize connections of ideas and pieces of information?","Mind mapping",["Tag cloud","Blog","Slide show"],"Mind maps help analyze, comprehend, synthesize, recall and generate ideas.","Mind map.","A tag cloud is stylized words; blog is a website; slide show is slides.","Map = connections.");
Q("multi",3,"A mobile phone text tula in the form of a tanaga has:","4 lines of 7 syllables each, rhymed at the end of each line",["3 lines of 5-7-5 syllables","14 lines","Lines of 12 syllables"],"Tanaga is a traditional Filipino poem of four lines with seven syllables each.","Tanaga.","5-7-5 is haiku; 14 lines is a sonnet.","Tanaga = 4×7.");
Q("multi",2,"Which Microsoft program is described as the 'number processor' used to manipulate numbers and data for computation?","MS Excel",["MS Word","MS PowerPoint","MS Publisher"],"Word is the word processor; PowerPoint makes slides; Publisher creates labels, news writing and marketing materials.","ICT skills.","Each distractor has a different function.","Excel = Numbers.");
Q("multi",2,"When importing images, video clips or music into your output, you should:","Cite the sources to avoid plagiarism",["Remove the author's name","Copy without credit","Convert the file name only"],"The lesson stresses citing sources on any imported material.","ICT ethics.","Other options encourage plagiarism.","Copy? Cite!");
Q("multi",1,"Which image formats are named in the lesson as familiar and editable?","JPEG and PNG",["MP3 and WAV","DOCX and XLSX","MP4 and AVI"],"Digital image files are needed to create videos and animations.","Image formats.","The others are audio, document or video formats.","JPEG and PNG = pictures.");

/* ---------- READING APPROACHES ---------- */
Q("read",1,"Reading approaches are best described as:","Planned and explicit actions that help readers translate print to meaning",["Random reading habits","Only methods for speed","Only methods for spelling"],"They are used as methods in teaching English and solving students' reading problems.","Reading approach.","The others are too narrow or incorrect.","Approach = planned action.");
Q("read",2,"Which reading approach identifies the main idea quickly, three to four times faster than regular reading?","Skimming",["Scanning","Intensive reading","Extensive reading"],"Readers focus on titles, headings, introductions, conclusions or first sentences.","Skimming = main idea fast.","Scanning looks for specific words.","Skim = Skip to main idea.");
Q("read",2,"A student searches a table for a specific date and name. Which approach is this?","Scanning",["Skimming","Intensive reading","Extensive reading"],"Scanning is moving the eyes quickly to find specific words, dates, names and places.","Scanning = specific info.","Skimming is for the gist; intensive is slow and detailed.","Scan = Search.");
Q("read",3,"A student reads headings and first sentences to decide whether to read a newspaper article in detail. Which approach?","Skimming",["Scanning","Extensive reading","Intensive reading"],"Skimming helps determine the main topic first.","Skim vs scan.","Scanning looks for exact items; the others require thorough reading.","Skim = gist.");
Q("read",2,"Which approach is also called Free Voluntary Reading?","Extensive reading",["Intensive reading","Skimming","Scanning"],"It is free reading of books and materials that are not too difficult, and learners infer unfamiliar words from context.","Extensive reading.","Intensive is slow and detailed.","Extensive = Enjoyable volume.");
Q("read",2,"Which approach is detailed, time-consuming, slow, with a lot of reflection, and helps with retention?","Intensive reading",["Skimming","Scanning","Extensive reading"],"It ensures that the reader understands the material.","Intensive reading.","The others are fast or free reading.","Intensive = Inspect deeply.");
Q("read",3,"According to the lesson, after a student scans a document, they:","Go back and skim it",["Stop reading","Memorize the whole text","Switch to intensive reading only"],"The lesson states they will go back and skim it.","Scan then skim.","The other options are not stated.","Scan → Skim.");

/* ---------- ADAPTATION & ASSESSMENT ---------- */
Q("adapt",1,"A literary adaptation is:","The process of adapting a literary source to another genre or medium",["Copying a text exactly in the same medium","Translating a poem word for word","Summarizing a book"],"It can also adapt the same work in the same genre for a different purpose or audience.","Literary adaptation.","The others are narrower or different processes.","Adapt = change form.");
Q("adapt",2,"Hana Yori Dango is a manga by Yoko Kamio. Its story features a middle-class girl and the group F4. Who is the girl?","Makino Tsukushi",["Domyouji Tsukasa","Hanazawa Rui","Eitoku"],"Tsukushi attends Eitoku Academy and falls for Hanazawa Rui, while Domyouji Tsukasa is the F4 leader.","Original source of adaptations.","Others are male characters or the school.","Tsukushi = the girl.");
Q("adapt",2,"Which pairing of adaptation and country is correct?","Boys Over Flowers (2009) – Korea",["Meteor Garden (2001) – Japan","Hana Yori Dango (2005) – China","F4 Thailand (2021) – Korea"],"Meteor Garden (2001) is Taiwan; Hana Yori Dango (1996, 2005) is Japan; Boys Over Flowers (2009) is Korea; Meteor Garden (2018) is China; F4 Thailand (2021) is Thailand.","Adaptations around Asia.","The wrong options swap countries.","BOF = Korea.");
Q("adapt",1,"Which type of adaptation preserves every possible detail of the book exactly as it exists, just in another medium?","Museum adaptation",["Artful adaptation","Loose adaptation","Transformative adaptation"],"Examples: The Hunger Games, Pride and Prejudice, The Hobbit and The Lord of the Rings.","Museum = preserve everything.","The others change more.","Museum = Keep as-is.");
Q("adapt",2,"Which adaptation finds the essential elements of the book and interprets them in ways meaningful for the audience, like a conversation between book and audience?","Artful adaptation",["Museum adaptation","Loose adaptation","Transformative adaptation"],"Examples in the lesson include Hamlet, Bride & Prejudice and The Phantom of the Opera.","Artful = balance.","Museum preserves details; loose only keeps a few elements.","Artful = Art of balance.");
Q("adapt",2,"Marvel Cinematic Universe vs. Marvel Comics is an example of which adaptation?","Loose adaptation",["Museum adaptation","Artful adaptation","Transformative adaptation"],"Loose adaptation keeps a few elements or a disguise of the premise of the book.","Loose = few elements.","Museum keeps everything.","Loose = Light link.");
Q("adapt",3,"Which adaptation seeks to highlight the timelessness and universality of the source work's messages and themes (e.g., Cinderella based on Perrault's 1697 tale)?","Transformative adaptation",["Museum adaptation","Loose adaptation","Artful adaptation"],"Transformative adaptations emphasize the universal messages and themes.","Transformative.","Loose focuses on premise; museum on exact detail.","Transform = timeless themes.");
Q("adapt",3,"According to Watts (2020), what difficulty arises in judging an adaptation?","Deciding whether the film's quality or its accuracy to the book matters more",["Deciding which actors are famous","Deciding the length of the film","Deciding the language of the book"],"Watts asks what makes a good adaptation.","Evaluating adaptation.","The others are not discussed.","Quality vs accuracy.");
Q("adapt",2,"One reason for peer and self-assessment (University of Reading) is that it:","Makes learners more active participants instead of passive spectators",["Eliminates the need for criteria","Makes assessment easier for teachers only","Removes mistakes"],"It encourages responsibility and understanding of expectations.","Importance of assessment.","The others are false.","Participant, not spectator.");

/* ---------- ASIAN & AFRICAN LITERATURE ---------- */
Q("asia",1,"Chinese literature began its unbroken literary tradition in which century?","14th century BCE",["14th century CE","1st century CE","7th century BCE"],"China is one of the cradles of civilization; language preservation helped.","Chinese literature.","The other dates are not stated.","14th BCE.");
Q("asia",2,"Which is NOT one of the Four Great Classical Novels of China?","Rashomon",["Romance of the Three Kingdoms","Journey to the West","Dream of the Red Chamber"],"The four classics include Outlaws of the Marsh. Rashomon is a Japanese short story.","Four great Chinese novels.","The others are among the four.","Rashomon = Japan.");
Q("asia",2,"Which poet is also known as Li Bai and wrote 'Alone and Drinking under the Moon'?","Li Po",["Du Fu","Mo Yan","Yu Hua"],"Li Po was romantic in life and poetry, with vivid imagery; he is regarded as a competitor of Du Fu.","Chinese poets.","Du Fu is the other great poet; Mo Yan and Yu Hua are modern fiction writers.","Po = Bai.");
Q("asia",2,"Which author won the 2012 Nobel Prize for Literature and wrote 'Red Sorghum'?","Mo Yan",["Yu Hua","Du Fu","Haruki Murakami"],"Red Sorghum tells of Chinese battling Japanese intruders in the 1930s.","Modern Chinese literature.","Yu Hua wrote To Live.","Mo Yan = Nobel 2012.");
Q("asia",2,"Hangul, Korea's distinct writing system, was developed in which century?","15th century",["4th century","7th century","19th century"],"It gave new beginnings to Korean literature.","Korean literature.","The 4th and 7th centuries relate to Chinese-influenced writing.","Hangul = 15th.");
Q("asia",2,"Who wrote the first Korean novel, 'The Heartless'?","Yi Kwang-su",["Ch'oe Nam-seon","Kim Ok","Mo Yan"],"Yi launched the modern literary movement with Ch'oe Nam-seon.","Korean writers.","Ch'oe wrote 'The Ocean to the Youth'; Kim Ok wrote 'The Dance of Agony'.","Yi = novel.");
Q("asia",3,"Which pairing is correct?","Kim Ok – The Dance of Agony (first Korean collection of translated Western poetry)",["Ch'oe Nam-seon – The Heartless","Yi Kwang-su – The Dance of Agony","Kim Ok – The Ocean to the Youth"],"Ch'oe Nam-seon wrote 'The Ocean to the Youth' for cultural reform; Yi wrote 'The Heartless.'","Korean authors and works.","The others mismatch authors and works.","Kim = translation.");
Q("asia",2,"Which Japanese drama uses puppets?","Joruri",["Noh","Kabuki","Haiku"],"Noh is for the nobility; Kabuki is known for costumes and dynamic acting.","Japanese drama.","Haiku is a poem.","Joruri = puppets.");
Q("asia",1,"A haiku is a poem of how many syllables and lines?","17 syllables in three lines (5-7-5)",["14 syllables in two lines","31 syllables in five lines","21 syllables in four lines"],"The haiku is a 17-syllable poem in three lines.","Haiku.","The others are not haiku structures.","5-7-5.");
Q("asia",2,"Who is regarded as the 'Father of the Japanese short story' and wrote 'Rashomon'?","Ryunosuke Akutagawa",["Haruki Murakami","Mo Yan","Yu Hua"],"Rashomon recounts an encounter between a servant and an old woman at the ruined gate in Kyoto.","Japanese writers.","Murakami wrote Hear the Wind Sing.","Akutagawa = Rashomon.");
Q("asia",2,"African literature includes which kinds of traditions?","Oral tradition and written literature in local and colonial languages",["Only written in English","Only oral","Only Arabic"],"African experiences of colonization and post-colonization shape its literature.","African literature.","The others are too narrow.","Oral + Written.");
Q("asia",2,"Which novel concerns traditional Igbo life at the arrival of missionaries and the colonial government?","Things Fall Apart by Chinua Achebe",["Petals of Blood","A Dance of the Forests","Black Mamba Boy"],"It is the most widely read book in modern African literature.","Achebe.","The other works are by Ngugi, Soyinka, and Nadifa Mohamed.","Achebe = Things Fall Apart.");
Q("asia",2,"Who was the first black African to win the Nobel Prize for Literature (1986)?","Wole Soyinka",["Chinua Achebe","Ngugi wa Thiong'o","Warsan Shire"],"His play 'A Dance of the Forests' was written for Nigeria's independence celebrations.","Soyinka.","Others were not the first Nobel laureate.","Soyinka = Nobel 1986.");
Q("asia",3,"Which pairing is correct?","Nadifa Mohamed – Black Mamba Boy (2010)",["Diriye Osman – Black Mamba Boy","Warsan Shire – Fairytales for Lost Children","Ngugi wa Thiong'o – Things Fall Apart"],"Diriye Osman wrote Fairytales for Lost Children (2013). Ngugi's first novel in the lesson is Petals of Blood (1977).","Modern African authors.","The wrong options mismatch authors and works.","Nadifa = Black Mamba Boy.");

/* ---------- NORTH AMERICAN LITERATURE ---------- */
Q("na",1,"Which American writer is best known for Moby-Dick and Typee?","Herman Melville",["Mark Twain","F. Scott Fitzgerald","Emily Dickinson"],"Melville wrote about his experiences in Polynesia.","American authors.","The others wrote different works.","Melville = Moby-Dick.");
Q("na",1,"Which American poet was born in Massachusetts into a prominent family?","Emily Dickinson",["Herman Melville","F. Scott Fitzgerald","Mark Twain"],"The others are mainly novelists/short story writers.","American poets.","Others are not described as poets in the lesson.","Dickinson = Poet.");
Q("na",2,"Which writer is known for the short story collection 'Tales of the Jazz Age'?","F. Scott Fitzgerald",["Herman Melville","Mark Twain","Emily Dickinson"],"He was an American novelist, essayist and short story writer.","Fitzgerald.","Others wrote different works.","Fitzgerald = Jazz Age.");
Q("na",2,"Who is Samuel Langhorne Clemens, called 'the father of American Literature'?","Mark Twain",["Herman Melville","Emily Dickinson","F. Scott Fitzgerald"],"Mark Twain is his pen name; he was an American writer, humorist, entrepreneur, publisher and lecturer.","Twain.","The others are different authors.","Twain = Clemens.");

/* Difficulty calibration (target ≈ 30% basic / 40% intermediate / 30% advanced) */
(function () {
  const basic = ["world-2","world-3","world-4","world-5","world-7","phlit-1","phlit-2","phlit-4","natart-3","natart-4","natart-5","natart-7","poetry-2","context-2","context-3"];
  const adv = ["intro-5","intro-6","appr-4","appr-6","phlit-5","phlit-10","world-11","adapt-5","adapt-6","story-5","multi-5","asia-12"];
  QUESTIONS.forEach((q) => { if (basic.includes(q.id)) q.d = 1; if (adv.includes(q.id)) q.d = 3; });
})();

/* ===== APP ===== */
(function () {
  "use strict";
  const KEY = "lit21_reviewer_v1";
  const INTERVALS = [0, 1, 3, 7]; // days per Leitner box
  const DAY = 86400000;
  const MODES = {
    comprehensive: { name: "Comprehensive Exam", feedback: true },
    topic:         { name: "Topic Review",       feedback: true },
    practice:      { name: "Practice Mode",      feedback: true },
    mock:          { name: "Mock Examination",   feedback: false },
    weak:          { name: "Weak Areas",         feedback: true },
    random:        { name: "Randomized Exam",    feedback: true },
    spaced:        { name: "Spaced Review",      feedback: true },
    retry:         { name: "Retry Incorrect",    feedback: true }
  };

  const $ = (s) => document.querySelector(s);
  const app = $("#app");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const byId = {}; QUESTIONS.forEach((q) => (byId[q.id] = q));
  const topicName = (id) => (TOPICS.find((t) => t.id === id) || {}).name || id;
  const letters = ["A", "B", "C", "D"];

  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function fmtTime(s) { s = Math.max(0, Math.round(s)); const m = Math.floor(s / 60); return m + ":" + String(s % 60).padStart(2, "0"); }

  /* ---------- storage ---------- */
  function defaults() {
    return { v: 1, stats: {}, bookmarks: [], history: [], session: null, lastResult: null, theme: "light",
      settings: { mode: "comprehensive", topic: TOPICS[0].id, count: "20", minutes: 30 } };
  }
  function load() { try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.v === 1) return Object.assign(defaults(), s); } catch (e) {} return defaults(); }
  let store = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }

  let view = store.session ? "quiz" : "home";
  let timer = null;
  let libTab = "bookmarks";

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 3000);
  }

  /* ---------- stats & spaced repetition ---------- */
  function stat(id) { return store.stats[id] || (store.stats[id] = { seen: 0, right: 0, wrong: 0, box: 0, due: 0, last: null }); }
  function recordAnswer(id, ok) {
    const s = stat(id); s.seen++; s.last = ok;
    if (ok) { s.right++; s.box = Math.min(s.box + 1, 3); s.due = Date.now() + INTERVALS[s.box] * DAY; }
    else { s.wrong++; s.box = 0; s.due = Date.now(); }
  }
  function topicStats(t) {
    let seen = 0, right = 0, total = 0;
    QUESTIONS.forEach((q) => { if (q.t === t) { total++; const s = store.stats[q.id]; if (s) { seen += s.seen; right += s.right; } } });
    return { total, seen, right, acc: seen ? right / seen : null };
  }
  const dueIds = () => QUESTIONS.filter((q) => { const s = store.stats[q.id]; return s && s.wrong > 0 && s.due <= Date.now() && !(s.box === 3 && s.last); }).map((q) => q.id);

  /* ---------- session ---------- */
  function buildPool(mode, o) {
    let pool = [];
    const n = o.count === "all" ? Infinity : parseInt(o.count, 10);
    if (mode === "comprehensive") return shuffle(QUESTIONS.map((q) => q.id));
    if (mode === "topic") pool = QUESTIONS.filter((q) => q.t === o.topic).map((q) => q.id);
    else if (mode === "practice" || mode === "mock") pool = QUESTIONS.filter((q) => o.topic === "all" || q.t === o.topic).map((q) => q.id);
    else if (mode === "random") pool = QUESTIONS.map((q) => q.id);
    else if (mode === "spaced") pool = dueIds();
    else if (mode === "retry") return shuffle(o.ids);
    else if (mode === "weak") {
      const weakT = TOPICS.filter((t) => { const s = topicStats(t.id); return s.acc !== null && s.acc < 0.75; }).map((t) => t.id);
      const scored = QUESTIONS.map((q) => { const s = store.stats[q.id] || { wrong: 0, right: 0 };
        const inWeak = weakT.includes(q.t); const miss = s.wrong - s.right;
        return { id: q.id, score: (inWeak ? 2 : 0) + (s.wrong > 0 ? 2 : 0) + Math.max(0, miss) + Math.random() };
      }).filter((x) => x.score >= 2).sort((a, b) => b.score - a.score);
      pool = scored.map((x) => x.id);
      return pool.slice(0, isFinite(n) ? n : 30);
    }
    return shuffle(pool).slice(0, n);
  }

  function startSession(mode, o) {
    const ids = buildPool(mode, o);
    if (!ids.length) {
      toast(mode === "spaced" ? "Nothing is due yet. Answer some questions incorrectly first, or come back later." :
            mode === "weak" ? "No weak areas yet. Answer some questions first so I can find them." : "No questions available.");
      return;
    }
    const orders = {}; ids.forEach((id) => (orders[id] = shuffle([0, 1, 2, 3])));
    store.session = { mode, topic: o.topic || "all", ids, idx: 0, answers: {}, orders, elapsed: 0,
      limit: mode === "mock" ? Math.max(1, parseInt(o.minutes, 10) || 30) * 60 : 0, feedback: MODES[mode].feedback };
    save(); view = "quiz"; render();
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      const s = store.session; if (!s) return clearInterval(timer);
      s.elapsed++;
      const el = $("#timer"); if (el) el.textContent = s.limit ? "⏱ " + fmtTime(s.limit - s.elapsed) : "⏱ " + fmtTime(s.elapsed);
      if (s.elapsed % 5 === 0) save();
      if (s.limit && s.elapsed >= s.limit) { toast("Time is up! Submitting your exam."); finish(); }
    }, 1000);
  }

  function choose(origIdx) {
    const s = store.session, id = s.ids[s.idx];
    if (s.feedback && s.answers[id] !== undefined) return;
    s.answers[id] = origIdx;
    if (s.feedback) recordAnswer(id, origIdx === 0);
    save(); render();
  }

  function finish() {
    const s = store.session; if (!s) return;
    clearInterval(timer);
    if (!s.feedback) s.ids.forEach((id) => { if (s.answers[id] !== undefined) recordAnswer(id, s.answers[id] === 0); });
    let correct = 0, wrong = 0, skipped = 0; const per = {}, wrongIds = [];
    s.ids.forEach((id) => {
      const q = byId[id]; per[q.t] = per[q.t] || { c: 0, n: 0 }; per[q.t].n++;
      if (s.answers[id] === undefined) { skipped++; wrongIds.push(id); }
      else if (s.answers[id] === 0) { correct++; per[q.t].c++; }
      else { wrong++; wrongIds.push(id); }
    });
    const res = { date: Date.now(), mode: s.mode, modeName: MODES[s.mode].name, total: s.ids.length, correct, wrong, skipped,
      pct: Math.round((correct / s.ids.length) * 100), time: s.elapsed, per, wrongIds, ids: s.ids, answers: s.answers, orders: s.orders };
    store.lastResult = res;
    store.history.unshift({ date: res.date, modeName: res.modeName, total: res.total, correct, pct: res.pct, time: res.time });
    store.history = store.history.slice(0, 15);
    store.session = null; save(); view = "results"; render();
  }

  /* ---------- shared HTML pieces ---------- */
  function explainHTML(q, chosen, order) {
    const correctPos = order ? order.indexOf(0) : 0;
    const ok = chosen === 0;
    let head = "";
    if (chosen === undefined || chosen === null) head = '<h3 class="bad">Not answered</h3>';
    else head = ok ? '<h3 class="ok">✔ Correct!</h3>' : '<h3 class="bad">✘ Incorrect</h3>';
    const yours = (chosen !== undefined && chosen !== null && !ok)
      ? `<p><b>Your answer:</b> ${order ? letters[order.indexOf(chosen)] + ". " : ""}${esc(q.opts[chosen])}</p>` : "";
    return `<div class="fb ${ok ? "okbox" : "badbox"}">${head}
      <p><b>Correct Answer:</b> ${order ? letters[correctPos] + ". " : ""}${esc(q.opts[0])}</p>${yours}
      <h4>Explanation</h4><p>${esc(q.e)}</p>
      <h4>Concept Review</h4><p>${esc(q.c)}</p>
      <h4>Why the Other Choices Are Wrong</h4><p>${esc(q.w)}</p>
      <h4>💡 Memory Tip</h4><p>${esc(q.m)}</p></div>`;
  }
  const bmBtn = (id) => `<button class="icon-btn" data-bm="${id}" title="Bookmark">${store.bookmarks.includes(id) ? "★ Bookmarked" : "☆ Bookmark"}</button>`;

  /* ---------- views ---------- */
  function render() {
    if (view !== "quiz") clearInterval(timer);
    if (view === "quiz" && store.session) { renderQuiz(); startTimerOnce(); }
    else if (view === "results" && store.lastResult) renderResults();
    else if (view === "library") renderLibrary();
    else { view = "home"; renderHome(); }
    window.scrollTo(0, 0);
  }
  let timerRunning = false;
  function startTimerOnce() { if (!timerRunning || !timer) { startTimer(); timerRunning = true; } }

  function renderHome() {
    timerRunning = false;
    const st = store.settings;
    let seen = 0, right = 0, answered = 0;
    Object.values(store.stats).forEach((s) => { seen += s.seen; right += s.right; if (s.seen) answered++; });
    const acc = seen ? Math.round((right / seen) * 100) : 0;
    const due = dueIds().length;
    const modeBtn = (m, label, desc) => `<label class="mode ${st.mode === m ? "sel" : ""}"><input type="radio" name="mode" value="${m}" ${st.mode === m ? "checked" : ""}><b>${label}</b><span>${desc}</span></label>`;
    app.innerHTML = `
      ${store.session ? '<div class="banner">You have an unfinished session. <button class="btn" id="resume">Resume</button></div>' : ""}
      <section class="cards">
        <div class="stat"><b>${QUESTIONS.length}</b><span>Questions in bank</span></div>
        <div class="stat"><b>${answered}</b><span>Questions answered</span></div>
        <div class="stat"><b>${acc}%</b><span>Overall accuracy</span></div>
        <div class="stat"><b>${due}</b><span>Due for review</span></div>
        <div class="stat"><b>${store.bookmarks.length}</b><span>Bookmarks</span></div>
      </section>
      <section class="panel"><h2>Start a session</h2>
        <div class="modes">
          ${modeBtn("comprehensive", "Comprehensive Exam", "All topics, randomized, mixed difficulty")}
          ${modeBtn("topic", "Topic-by-Topic", "Focus on one topic")}
          ${modeBtn("practice", "Practice Mode", "Instant feedback, no time pressure")}
          ${modeBtn("mock", "Mock Examination", "Timed; results and review at the end")}
          ${modeBtn("weak", "Weak Areas", "Prioritizes topics you miss")}
          ${modeBtn("random", "Randomized Exam", "Random picks from the whole bank")}
          ${modeBtn("spaced", "Spaced Review", "Missed questions that are due again")}
        </div>
        <div class="form">
          <label>Topic <select id="f-topic">${[["all", "All topics"]].concat(TOPICS.map((t) => [t.id, t.name])).map((t) => `<option value="${t[0]}" ${st.topic === t[0] ? "selected" : ""}>${esc(t[1])}</option>`).join("")}</select></label>
          <label>Number of questions <select id="f-count">${["10", "20", "30", "50", "all"].map((c) => `<option value="${c}" ${st.count === c ? "selected" : ""}>${c === "all" ? "All" : c}</option>`).join("")}</select></label>
          <label>Mock time limit (minutes) <input id="f-min" type="number" min="1" max="240" value="${st.minutes}"></label>
        </div>
        <p class="hint" id="hint"></p>
        <button class="btn primary" id="start">Start</button>
      </section>
      <section class="panel"><h2>Topics</h2><div class="topics">
        ${TOPICS.map((t) => { const s = topicStats(t.id); const pct = s.acc === null ? 0 : Math.round(s.acc * 100);
          return `<div class="topic"><div><b>${esc(t.name)}</b><small>${t.src} · ${s.total} questions</small></div>
          <div class="bar"><i style="width:${pct}%"></i></div><small>${s.acc === null ? "Not started" : pct + "% accuracy"}</small>
          <button class="btn small" data-topic="${t.id}">Review topic</button></div>`; }).join("")}
      </div></section>
      <section class="panel"><h2>Recent sessions</h2>
        ${store.history.length ? `<table><tr><th>Date</th><th>Mode</th><th>Score</th><th>Time</th></tr>${store.history.slice(0, 8).map((h) => `<tr><td>${new Date(h.date).toLocaleString()}</td><td>${esc(h.modeName)}</td><td>${h.correct}/${h.total} (${h.pct}%)</td><td>${fmtTime(h.time)}</td></tr>`).join("")}</table>` : "<p class='hint'>No sessions yet.</p>"}
        ${store.lastResult ? '<button class="btn" id="lastres">View last result</button>' : ""}
      </section>`;
    const syncHint = () => {
      const m = st.mode;
      $("#f-topic").disabled = !["topic", "practice", "mock"].includes(m);
      $("#f-count").disabled = m === "comprehensive";
      $("#f-min").disabled = m !== "mock";
      $("#hint").textContent = { comprehensive: "Covers every question in the bank, shuffled.", topic: "Choose a topic; you will get its questions.", practice: "Pick a topic (or all) and a count. Explanations show after every answer.", mock: "Answers are hidden until you submit. Unanswered questions count as incorrect.", weak: "Uses your answer history. Answer some questions first.", random: "Random questions from everything.", spaced: "Brings back questions you missed, on a schedule (now, 1, 3, 7 days)." }[m];
    };
    syncHint();
    app.querySelectorAll('input[name="mode"]').forEach((r) => r.addEventListener("change", () => {
      st.mode = r.value; save(); app.querySelectorAll(".mode").forEach((l) => l.classList.toggle("sel", l.querySelector("input").checked)); syncHint(); }));
    $("#f-topic").onchange = (e) => { st.topic = e.target.value; save(); };
    $("#f-count").onchange = (e) => { st.count = e.target.value; save(); };
    $("#f-min").onchange = (e) => { st.minutes = e.target.value; save(); };
    $("#start").onclick = () => {
      if (st.mode === "topic" && st.topic === "all") return toast("Please choose a specific topic for Topic Review.");
      startSession(st.mode, { topic: st.topic, count: st.count, minutes: st.minutes });
    };
    app.querySelectorAll("[data-topic]").forEach((b) => (b.onclick = () => startSession("topic", { topic: b.dataset.topic, count: "all" })));
    const r = $("#resume"); if (r) r.onclick = () => { view = "quiz"; render(); };
    const l = $("#lastres"); if (l) l.onclick = () => { view = "results"; render(); };
  }

  function renderQuiz() {
    const s = store.session, id = s.ids[s.idx], q = byId[id], order = s.orders[id];
    const ans = s.answers[id], locked = s.feedback && ans !== undefined;
    const answeredCount = Object.keys(s.answers).length;
    const diff = ["", "Basic", "Intermediate", "Advanced"][q.d];
    app.innerHTML = `
      <div class="quizhead">
        <div><b>${MODES[s.mode].name}</b> · ${esc(topicName(q.t))}</div>
        <div id="timer" class="timer">${s.limit ? "⏱ " + fmtTime(s.limit - s.elapsed) : "⏱ " + fmtTime(s.elapsed)}</div>
      </div>
      <div class="bar big"><i style="width:${(answeredCount / s.ids.length) * 100}%"></i></div>
      <div class="qmeta"><span>Question ${s.idx + 1} of ${s.ids.length}</span><span class="tag">${diff}</span><span>${answeredCount} answered</span>${bmBtn(id)}</div>
      <div class="qbox"><p class="qtext">${esc(q.q)}</p>
        <div class="opts">${order.map((orig, i) => {
          let cls = "opt";
          if (ans === orig) cls += " picked";
          if (locked) { if (orig === 0) cls += " correct"; else if (ans === orig) cls += " wrong"; cls += " locked"; }
          return `<button class="${cls}" data-o="${orig}" ${locked ? "disabled" : ""}><span class="ltr">${letters[i]}</span><span>${esc(q.opts[orig])}</span></button>`; }).join("")}</div>
        ${locked ? explainHTML(q, ans, order) : ""}
      </div>
      <div class="nav">
        <button class="btn" id="prev" ${s.idx === 0 ? "disabled" : ""}>← Previous</button>
        ${s.idx < s.ids.length - 1 ? '<button class="btn primary" id="next">Next →</button>' : ""}
        <button class="btn ${s.idx === s.ids.length - 1 ? "primary" : ""}" id="finish">${s.feedback ? "Finish &amp; see results" : "Submit exam"}</button>
        <button class="btn ghost" id="quit">Quit session</button>
      </div>
      <div class="palette">${s.ids.map((x, i) => { const a = s.answers[x]; let c = "pal";
        if (i === s.idx) c += " cur"; if (a !== undefined) c += s.feedback ? (a === 0 ? " pok" : " pbad") : " pans"; if (store.bookmarks.includes(x)) c += " pbm";
        return `<button class="${c}" data-i="${i}">${i + 1}</button>`; }).join("")}</div>`;
    app.querySelectorAll(".opt").forEach((b) => (b.onclick = () => choose(parseInt(b.dataset.o, 10))));
    $("#prev").onclick = () => { s.idx--; save(); render(); };
    const nx = $("#next"); if (nx) nx.onclick = () => { s.idx++; save(); render(); };
    $("#finish").onclick = () => {
      const left = s.ids.length - Object.keys(s.answers).length;
      if (left > 0 && !confirm(left + " question(s) unanswered. Finish anyway? Unanswered questions count as incorrect.")) return;
      finish();
    };
    $("#quit").onclick = () => { if (confirm("Quit this session? Progress on answered questions is kept in your stats, but the session will end.")) { store.session = null; save(); clearInterval(timer); timerRunning = false; view = "home"; render(); } };
    app.querySelectorAll(".pal").forEach((b) => (b.onclick = () => { s.idx = parseInt(b.dataset.i, 10); save(); render(); }));
    bindBookmarks();
  }

  function bindBookmarks() {
    app.querySelectorAll("[data-bm]").forEach((b) => (b.onclick = () => {
      const id = b.dataset.bm, i = store.bookmarks.indexOf(id);
      if (i >= 0) store.bookmarks.splice(i, 1); else store.bookmarks.push(id);
      save(); b.textContent = store.bookmarks.includes(id) ? "★ Bookmarked" : "☆ Bookmark";
      const p = app.querySelector(".pal.cur"); if (p) p.classList.toggle("pbm", store.bookmarks.includes(id));
    }));
  }

  function renderResults() {
    timerRunning = false;
    const r = store.lastResult;
    const topics = Object.keys(r.per).map((t) => ({ t, c: r.per[t].c, n: r.per[t].n, p: Math.round((r.per[t].c / r.per[t].n) * 100) }));
    const mastered = topics.filter((x) => x.p >= 80), weak = topics.filter((x) => x.p < 80).sort((a, b) => a.p - b.p);
    app.innerHTML = `
      <section class="panel center"><h2>${esc(r.modeName)} – Results</h2>
        <div class="score ${r.pct >= 75 ? "good" : r.pct >= 50 ? "mid" : "low"}">${r.pct}%</div>
        <div class="cards">
          <div class="stat"><b>${r.total}</b><span>Total questions</span></div>
          <div class="stat"><b>${r.correct}</b><span>Correct</span></div>
          <div class="stat"><b>${r.wrong + r.skipped}</b><span>Incorrect${r.skipped ? " (" + r.skipped + " unanswered)" : ""}</span></div>
          <div class="stat"><b>${fmtTime(r.time)}</b><span>Time consumed</span></div>
        </div>
        <div class="nav">
          ${r.wrongIds.length ? '<button class="btn primary" id="retry">Retry incorrect questions</button>' : ""}
          <button class="btn" id="retake">Retake this exam</button>
          <button class="btn" id="home">Back to dashboard</button>
        </div>
      </section>
      <section class="panel"><h2>Performance per topic</h2>
        ${topics.map((x) => `<div class="prow"><span>${esc(topicName(x.t))}</span><div class="bar"><i class="${x.p >= 80 ? "g" : "r"}" style="width:${x.p}%"></i></div><b>${x.c}/${x.n} (${x.p}%)</b></div>`).join("")}
        <p><b>Topics mastered (80%+):</b> ${mastered.length ? mastered.map((x) => esc(topicName(x.t))).join("; ") : "None yet"}</p>
        <p><b>Needs improvement:</b> ${weak.length ? weak.map((x) => esc(topicName(x.t))).join("; ") : "None 🎉"}</p>
        ${weak.length ? `<p><b>Recommended review:</b> ${weak.map((x) => esc(topicName(x.t)) + " (" + (TOPICS.find((t) => t.id === x.t) || {}).src + ")").join("; ")}</p>` : ""}
      </section>
      <section class="panel"><h2>Answer review &amp; explanations</h2>
        <div class="filters"><button class="btn small" data-f="all">All</button><button class="btn small" data-f="wrong">Incorrect only</button></div>
        <div id="revlist">${r.ids.map((id, i) => { const q = byId[id]; const a = r.answers[id]; const ok = a === 0;
          return `<details class="rev ${ok ? "r-ok" : "r-bad"}" data-ok="${ok}"><summary>${i + 1}. ${ok ? "✔" : "✘"} ${esc(q.q)}</summary>${explainHTML(q, a, r.orders[id])}${bmBtn(id)}</details>`; }).join("")}</div>
      </section>`;
    $("#home").onclick = () => { view = "home"; render(); };
    $("#retake").onclick = () => { const m = r.mode === "retry" ? "random" : r.mode; startSession(m, Object.assign({ count: String(r.total), topic: store.settings.topic, minutes: store.settings.minutes }, m === "comprehensive" ? {} : {})); };
    const rt = $("#retry"); if (rt) rt.onclick = () => startSession("retry", { ids: r.wrongIds });
    app.querySelectorAll("[data-f]").forEach((b) => (b.onclick = () => app.querySelectorAll(".rev").forEach((d) => (d.style.display = b.dataset.f === "wrong" && d.dataset.ok === "true" ? "none" : ""))));
    bindBookmarks();
  }

  function renderLibrary() {
    timerRunning = false;
    const items = { bookmarks: QUESTIONS.filter((q) => store.bookmarks.includes(q.id)),
      missed: QUESTIONS.filter((q) => { const s = store.stats[q.id]; return s && s.wrong > 0; }).sort((a, b) => (store.stats[b.id].wrong - store.stats[b.id].right) - (store.stats[a.id].wrong - store.stats[a.id].right)),
      history: QUESTIONS.filter((q) => store.stats[q.id] && store.stats[q.id].seen > 0) }[libTab];
    app.innerHTML = `<section class="panel"><h2>My Library</h2>
      <div class="tabs">${[["bookmarks", "Bookmarks"], ["missed", "Frequently missed"], ["history", "Answer history"]].map((t) => `<button class="btn ${libTab === t[0] ? "primary" : ""}" data-tab="${t[0]}">${t[1]}</button>`).join("")}</div>
      ${items.length ? items.map((q) => { const s = store.stats[q.id];
        return `<details class="rev"><summary>${esc(q.q)} <small>${s ? "✔ " + s.right + " / ✘ " + s.wrong : "not answered yet"}</small></summary>${explainHTML(q, 0, null)}${bmBtn(q.id)}</details>`; }).join("") : "<p class='hint'>Nothing here yet.</p>"}
    </section>`;
    app.querySelectorAll("[data-tab]").forEach((b) => (b.onclick = () => { libTab = b.dataset.tab; renderLibrary(); }));
    bindBookmarks();
  }

  /* ---------- header controls ---------- */
  function applyTheme() { document.documentElement.setAttribute("data-theme", store.theme); $("#theme").textContent = store.theme === "dark" ? "☀ Light" : "🌙 Dark"; }
  $("#theme").onclick = () => { store.theme = store.theme === "dark" ? "light" : "dark"; save(); applyTheme(); };
  $("#nav-home").onclick = () => { view = store.session ? "quiz" : "home"; render(); };
  $("#nav-lib").onclick = () => { view = "library"; render(); };
  $("#reset").onclick = () => { if (confirm("Erase ALL saved progress, bookmarks and history?")) { localStorage.removeItem(KEY); store = defaults(); clearInterval(timer); view = "home"; applyTheme(); render(); toast("Progress reset."); } };
  window.addEventListener("beforeunload", save);
  applyTheme(); render();
})();
