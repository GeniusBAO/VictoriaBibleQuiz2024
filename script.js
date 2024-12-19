const questions = [
  {question: "Who was the brother of Jesus who wrote the book of Jude?", options: ["James", "Peter", "Jude", "Paul"], answer: 2},
  {question: "What was the name of the city where the prophet Jonah preached?", options: ["Jerusalem", "Nineveh", "Babylon", "Damascus"], answer: 1},
  {question: "Who was the king of Israel who was defeated by the Philistines?", options: ["Saul", "David", "Solomon", "Rehoboam"], answer: 0},
  {question: "What is the name of the book in the Bible that contains the story of Ruth?", options: ["Ruth", "Esther", "Nehemiah", "1 Samuel"], answer: 3},
  {question: "Who was the prophet who wrote the book of Lamentations?", options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"], answer: 0},
  {question: "What was the name of the mountain where Abraham was willing to sacrifice Isaac?", options: ["Mount Moriah", "Mount Zion", "Mount Sinai", "Mount Nebo"], answer: 2},
  {question: "Who was the apostle who was stoned to death in Jerusalem?", options: ["Peter", "Paul", "Stephen", "James"], answer: 2},
  {question: "What is the name of the river that flowed through the Garden of Eden?", options: ["Nile", "Euphrates", "Tigris", "Pison"], answer: 3},
  {question: "Who was the king of Judah who was taken captive by the Babylonians?", options: ["Jehoiakim", "Jehoiachin", "Zedekiah", "Manasseh"], answer: 2},
  {question: "What was the name of the city where Jesus was born?", options: ["Bethlehem", "Nazareth", "Jerusalem", "Capernaum"], answer: 1},
{question: "Who created the world?", options: ["God", "Jesus", "The Holy Spirit"], answer: 0},
{question: "What is the name of the first book in the Bible?", options: ["Genesis", "Exodus", "Leviticus"], answer: 0 },
{ question: "'For God so loved the world that He gave His only ___________.'", options: ["Spirit", "Word", "Angel", "Son"], answer: 3 },
{ question: "'Love is patient, love is kind. It does not ___________.'", options: ["delight", "rejoice", "envy", "boast"], answer: 3 },
{ question: "'The Lord is my ___________; I shall not want.'", options: ["Father", "Brother", "Friend", "Shepherd"], answer: 3 },
{ question: "'God is our ___________ and strength, an ever-present help in trouble.'", options: ["shield", "salvation", "rock", "refuge"], answer: 3 },
{ question: "'Trust in the Lord with all your ___________.'", options: ["soul", "mind", "strength", "heart"], answer: 3 },
{ question: "'For we walk by ___________, not by sight.'", options: ["sight", "hope", "love", "faith"], answer: 3 },
{ question: "'And now these three remain: ___________, hope and love.'", options: ["peace", "joy", "charity", "faith"], answer: 3 },
{ question: "'And be kind to one another, tenderhearted, ___________ one another.'", options: ["forgetting", "loving", "hating", "forgiving"], answer: 3 },
{ question: "'And we know that in all things God works for the good of those who ___________ Him.'", options: ["fear", "obey", "serve", "love"], answer: 3 },
{ question: "'Do not be anxious about anything, but in everything, by ___________ and petition, with thanksgiving, present your requests to God.'", options: ["worship", "service", "fasting", "prayer"], answer: 3 },
{question: "For God so loved the world that He gave His only ___________ (John 3:16)", options: ["Spirit", "Word", "Angel", "Son"], answer: 3},
{question: "Love is patient, love is kind. It does not ___________ (1 Corinthians 13:4)", options: ["envy", "rejoice", "boast", "delight"], answer: 2},
{question: "The Lord is my ___________; I shall not want (Psalm 23:1)", options: ["Father", "Brother", "Friend", "Shepherd"], answer: 3},
{question: "God is our ___________ and strength, an ever-present help in trouble (Psalm 46:1)", options: ["shield", "salvation", "rock", "refuge"], answer: 2},
{question: "Trust in the Lord with all your ___________ (Proverbs 3:5)", options: ["soul", "mind", "strength", "heart"], answer: 3},
{question: "For we walk by ___________, not by sight (2 Corinthians 5:7)", options: ["sight", "hope", "love", "faith"], answer: 3},
{question: "And now these three remain: ___________, hope and love (1 Corinthians 13:13)", options: ["peace", "joy", "charity", "faith"], answer: 2},
{question: "And be kind to one another, tenderhearted, ___________ one another (Ephesians 4:32)", options: ["forgetting", "loving", "hating", "forgiving"], answer: 3},
{question: "And we know that in all things God works for the good of those who ___________ Him (Romans 8:28)", options: ["fear", "obey", "serve", "love"], answer: 1},
{question: "Do not be anxious about anything, but in everything, by ___________ and petition, with thanksgiving, present your requests to God (Philippians 4:6)", options: ["worship", "service", "fasting", "prayer"], answer: 3},
{question: "Who was the prophet who wrote the book of Obadiah?", options: ["Obadiah", "Joel", "Amos", "Micah"], answer: 0},
{question: "What was the name of the wife of Isaac?", options: ["Rebecca", "Rachel", "Leah", "Sarah"], answer: 0},
{question: "Who was the king of Babylon who destroyed Jerusalem?", options: ["Nebuchadnezzar", "Darius", "Cyrus", "Belshazzar"], answer: 0},
{question: "What is the name of the book in the Bible that contains the story of Esther?", options: ["Esther", "Ruth", "Nehemiah", "1 Samuel"], answer: 0},
{question: "Who was the apostle who wrote the book of 1 Peter?", options: ["Peter", "Paul", "James", "John"], answer: 0},
{question: "What was the name of the mountain where Jesus gave the Sermon on the Mount?", options: ["Mount Zion", "Mount Sinai", "Mount of Olives", "Mount Tabor"], answer: 3},
{question: "Who was the prophet who was thrown into a lions' den?", options: ["Daniel", "Isaiah", "Jeremiah", "Ezekiel"], answer: 0},
{question: "What is the name of the river that flowed through the city of Babylon?", options: ["Euphrates", "Tigris", "Nile", "Jordan"], answer: 0},
{question: "Who was the king of Israel who built the temple in Jerusalem?", options: ["Solomon", "David", "Saul", "Rehoboam"], answer: 0},
{question: "What was the name of the wife of Noah?", options: ["Naamah", "Adah", "Zillah", "Wife of Noah"], answer: 3},
{question: "Who was the prophet who wrote the book of Haggai?", options: ["Haggai", "Zechariah", "Malachi", "Obadiah"], answer: 0},
{question: "What is the name of the book in the Bible that contains the story of Job?", options: ["Job", "Psalms", "Proverbs", "Ecclesiastes"], answer: 0},
{question: "Who was the apostle who wrote the book of 1 John?", options: ["John", "Peter", "Paul", "James"], answer: 0},
{question: "What was the name of the city where Jesus was crucified?", options: ["Jerusalem", "Bethlehem", "Nazareth", "Capernaum"], answer: 0},
{question: "Who was the king of Judah who was taken captive by the Babylonians?", options: ["Jehoiakim", "Jehoiachin", "Zedekiah", "Manasseh"], answer: 2},
{question: "What is the name of the book in the Bible that contains the story of Daniel?", options: ["Daniel", "Ezekiel", "Isaiah", "Jeremiah"], answer: 0},
{question: "Who was the prophet who wrote the book of Micah?", options: ["Micah", "Isaiah", "Amos", "Hosea"], answer: 0},
{question: "What was the name of the mountain where Moses received the Ten Commandments?", options: ["Mount Sinai", "Mount Zion", "Mount Moriah", "Mount Nebo"], answer: 0},
{question: "God, who at various times and in various ways spoke in time past to the fathers by the ___________ (Hebrews 1:1)", options: ["prophets", "apostles", "angels", "patriarchs"], answer: 0},
{question: "But to the Son He says: 'Your throne, O God, is ___________ forever and ever (Hebrews 1:8)", options: ["righteous", "just", "forever", "established"], answer: 3},
{question: "For the word of God is living and powerful, and sharper than any two-edged ___________ (Hebrews 4:12)", options: ["sword", "spear", "knife", "dagger"], answer: 0},
{question: "Let us therefore come boldly to the throne of ___________ (Hebrews 4:16)", options: ["grace", "mercy", "justice", "judgment"], answer: 0},
{question: "For every high priest taken from among men is appointed for men in things pertaining to ___________ (Hebrews 5:1)", options: ["God", "worship", "sacrifices", "sin"], answer: 2},
{question: "But solid food belongs to those who are of full age, that is, those who by reason of use have their senses exercised to ___________ both good and evil (Hebrews 5:14)", options: ["discern", "judge", "know", "understand"], answer: 0},
{question: "Jesus Christ is the same yesterday, today, and ___________ (Hebrews 13:8)", options: ["forever", "tomorrow", "always", "evermore"], answer: 0},
{question: "Do not forget to ___________ strangers, for by doing so some have unwittingly entertained angels (Hebrews 13:2)", options: ["welcome", "reject", "ignore", "fear"], answer: 0},
{question: "Let brotherly love continue. Do not forget to ___________ strangers (Hebrews 13:1-2)", options: ["welcome", "reject", "ignore", "fear"], answer: 0},
{question: "Remember those who rule over you, who have spoken the word of God to you, whose faith follow, considering the outcome of their ___________ (Hebrews 13:7)", options: ["conduct", "behavior", "life", "example"], answer: 3},
{question: "Joseph's brothers were jealous of him because their father, Jacob, had given him a beautiful ___________ (Genesis 37:3)", options: ["robe", "cloak", "tunic", "coat"], answer: 3},
{question: "Joseph's brothers sold him to a group of ___________ who were traveling to Egypt (Genesis 37:25)", options: ["Travelers", "Soldiers", "Merchants", "Traders"], answer: 2},
{question: "Samson's parents were childless until an angel of the Lord appeared to his mother and promised that she would have a ___________ (Judges 13:3)", options: ["daughter", "child", "baby", "son"], answer: 3},
{question: "Samson's strength came from his uncut ___________ (Judges 13:5)", options: ["beard", "mustache", "nails", "hair"], answer: 3},
{question: "Joseph interpreted the dreams of Pharaoh's ___________ and ___________ (Genesis 40:1)", options: ["cook", "servant", "butler", "baker"], answer: 2},
{question: "Samson fell in love with a woman named ___________ from the valley of Sorek (Judges 16:4)", options: ["Deborah", "Rachel", "Rebekah", "Delilah"], answer: 3},
{question: "Joseph became a trusted advisor to Pharaoh and was given the Egyptian name ___________ (Genesis 41:45)", options: ["Imhotep", "Josephus", "Philo", "Zaphenath-Paneah"], answer: 3},
{question: "Samson defeated the Philistines with the jawbone of a ___________ (Judges 15:15)", options: ["bear", "lion", "donkey", "camel"], answer: 2},
{question: "Joseph forgave his brothers and invited them to live with him in ___________ (Genesis 45:9)", options: ["Canaan", "Israel", "Goshen", "Egypt"], answer: 3},
{question: "Samson's eyes were gouged out by the Philistines and he was taken to the temple of ___________ (Judges 16:21)", options: ["Baal", "Ashtoreth", "Chemosh", "Dagon"], answer: 3},
{question: "Esther was a Jewish woman who became queen of the Persian Empire, married to King ___________ (Esther 1:1)", options: ["Darius", "Xerxes", "Artaxerxes", "Cyrus"], answer: 1},
{question: "Ruth was a ___________ woman who married an Israelite named Naomi's son (Ruth 1:4)", options: ["Moabite", "Ammonite", "Edomite", "Philistine"], answer: 0},
{question: "Esther's cousin, Mordecai, discovered a plot to kill King Xerxes and told ___________ about it (Esther 2:22)", options: ["Esther", "Haman", "Mordecai", "Xerxes"], answer: 0},
{question: "Ruth went to the fields to gather grain behind the reapers, and Boaz, the owner of the field, noticed her and asked his servant who she was, and the servant replied, 'She is the ___________ woman who came back from Moab' (Ruth 2:6)", options: ["young", "poor", "Moabite", "widowed"], answer: 2},
{question: "Esther's maids and eunuchs told her about Haman's plot to kill all the Jews, and Esther sent a message to Mordecai, telling him to gather all the Jews in Susa and ___________ for her (Esther 4:16)", options: ["pray", "fast", "feast", "celebrate"], answer: 1},
{question: "Ruth said to Naomi, 'Where you go I will go, and where you ___________ I will lodge' (Ruth 1:16)", options: ["stay", "live", "dwell", "rest"], answer: 2},
{question: "Esther invited King Xerxes and Haman to a banquet, and then she invited them to a second banquet the next day, where she ___________ Haman's plot to the king (Esther 7:1-6)", options: ["revealed", "hid", "ignored", "forgave"], answer: 0},
{question: "Boaz married Ruth and they had a son named ___________ (Ruth 4:17)", options: ["Obed", "Jesse", "David", "Solomon"], answer: 0},
{question: "Esther's bravery and cleverness saved the Jewish people from ___________ (Esther 3:13)", options: ["slavery", "poverty", "persecution", "destruction"], answer: 3},
{question: "Ruth and Naomi returned to Bethlehem during the ___________ harvest (Ruth 1:22)", options: ["barley", "wheat", "grape", "olive"], answer: 0},
{question: "Jesus' mother was a virgin named ___________ (Luke 1:27)", options: ["Elizabeth", "Anna", "Martha", "Mary"], answer: 3},
{question: "Jesus' earthly father was a carpenter named ___________ (Matthew 1:16)", options: ["Jacob", "Isaac", "Abraham", "Joseph"], answer: 3},
{question: "The prophet ___________ foretold the coming of Jesus (Matthew 3:3)", options: ["Jeremiah", "Ezekiel", "Malachi", "Isaiah"], answer: 3},
{question: "Jesus began His ministry in the wilderness, where He was baptized by ___________ (Matthew 3:13)", options: ["Jesus' disciples", "The Pharisees", "The Sadducees", "John the Baptist"], answer: 3},
{question: "Jesus' ministry was characterized by ___________ and teaching (Matthew 4:23)", options: ["preaching", "teaching", "miracles", "healing"], answer: 3},
{question: "Jesus had the power to ___________ the blind (John 9:1-7)", options: ["teach", "preach", "feed", "heal"], answer: 3},
{question: "Jesus healed a man with a withered ___________ (Matthew 12:10-13)", options: ["eye", "ear", "hand", "foot"], answer: 2},
{question: "Jesus raised a widow's ___________ from the dead (Luke 7:11-17)", options: ["husband", "father", "son", "daughter"], answer: 2},
{question: "Jesus taught that the greatest commandment is to ___________ God with all your heart (Matthew 22:37)", options: ["fear", "worship", "obey", "love"], answer: 3},
{question: "Jesus said that He is the ___________ and the life (John 14:6)", options: ["door", "way", "truth", "life"], answer: 1},
{question: "Jesus was preceded by a forerunner named ___________ (Matthew 3:1-3)", options: ["Jesus' disciples", "The Pharisees", "The Sadducees", "John the Baptist"], answer: 3},
{question: "Jesus came to ___________ the world from sin (Matthew 1:21)", options: ["judge", "condemn", "punish", "save"], answer: 3},
{question: "Jesus taught that we should ___________ our neighbors as ourselves (Matthew 22:39)", options: ["hate", "fear", "ignore", "love"], answer: 3},
{question: "Jesus said that He would send the ___________ to guide us (John 16:13)", options: ["Angel", "Prophet", "Apostle", "Holy Spirit"], answer: 3},
{question: "Jesus was born in the town of ___________ (Luke 2:4)", options: ["Nazareth", "Jerusalem", "Capernaum", "Bethlehem"], answer: 3},
{question: "Jesus' disciples were amazed by His ___________ over nature (Mark 4:41)", options: ["authority", "control", "wisdom", "power"], answer: 3},
{question: "Jesus said that we should not ___________ our good deeds (Matthew 6:1)", options: ["hide", "share", "keep", "boast"], answer: 3},
{question: "Jesus taught that the kingdom of God is like a ___________ that grows into a tree (Matthew 13:31-32)", options: ["grain", "wheat", "seed", "mustard seed"], answer: 3},
{question: "Jesus said that He is the ___________ of the vine (John 15:5)", options: ["stem", "branch", "root", "vine"], answer: 2},
{question: "We are God's ___________, created in Christ Jesus to do good works (Ephesians 2:10)", options: ["servants", "children", "friends", "masterpiece"], answer: 3}
];

const audioFiles = [
  {
    id: "good-response-sound",
    src: "Thank.wav",
    score: 1
  },
  {
    id: "bad-response-sound",
    src: "badsound.wav",
    score: 0
  },
  {
    id: "background-music",
    src: "bckg5.wav",
    loop: true
  },
  // Add more audio files here...
];

const imageFiles = [
  {
    id: "achievement-image-1",
    src: "one1.jpg",
    score: 10
  },
  {
    id: "achievement-image-2",
    src: "two2.jpg",
    score: 60
  },
  {
    id: "achievement-image-3",
    src: "three3.jpg",
    score: 80
  },
  {
    id: "achievement-image-4",
    src: "four4.jpg",
    score: 100
  }
];

// Define audio elements
const goodResponseSound = document.getElementById("good-response-sound");
const badResponseSound = document.getElementById("bad-response-sound");
const backgroundMusic = document.getElementById("background-music");
const achievementImages = document.querySelectorAll(".achievement-image");
const achievementSounds = document.querySelectorAll(".achievement-sound");

// Get question container element
const questionContainer = document.getElementById("question-container");

// Get options list element
const optionsList = document.getElementById("options");

// Get result container element
const resultContainer = document.getElementById("result-container");

// Get start button element
const startButton = document.getElementById("start-button");

// Get play again button element
const playAgainButton = document.getElementById("play-again-button");

// Get player name input element
const playerNameInput = document.getElementById("player-name");

// Initialize score and player name
let score = 0;
let playerName = "";
let currentQuestionIndex = 0;
let selectedOption = null;

// Function to display question and options
function displayQuestion(questionIndex) {
  const question = questions[questionIndex];
  questionContainer.innerHTML = `<p>${question.question}</p>`;
  optionsList.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionElement = document.createElement("li");
    optionElement.innerHTML = `<input type="radio" id="option-${index}" name="option" value="${option}"> <label for="option-${index}">${option}</label>`;
    optionsList.appendChild(optionElement);
  });
}

// Function to handle option selection
function handleOptionSelection(event) {
  const selectedOption = event.target.value;
  const correctOption = questions[currentQuestionIndex].options[questions[currentQuestionIndex].answer];
  if (selectedOption === correctOption) {
    score++;
    goodResponseSound.play();
  } else {
    badResponseSound.play();
    const correctAnswerText = `Oops! Sorry ${playerName}, Victoria says the correct answer is: ${correctOption}`;
    document.getElementById("achievement-text").innerHTML = correctAnswerText;
    document.getElementById("achievement-text").style.display = "block";
    setTimeout(() => {
      document.getElementById("achievement-text").style.display = "none";
    }, 2000);
  }
  currentQuestionIndex++;
  checkScore();
  if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    displayResult();
  }
}

// Function to display result
function displayResult() {
  resultContainer.innerHTML = `
    <p>Game Over!${playerName}, We have your total score to be ${score}</p>
    <p>Contact Coach Bestrig to Build Your First Game App With JavaScript here:
    <a href="08129543613" target="_blank">
      <img src="whatsapp-icon.PNG" alt="WhatsApp Icon">
    </a>
    OR Victoria
    <a href="09161637762" target="_blank">
      <img src="whatsapp-icon.PNG" alt="WhatsApp Icon">
      </a>
      </p>
  `;
  playAgainButton.style.display = "block";
  backgroundMusic.pause();
}


// Check if score has reached a milestone
function checkScore() {
  if (score === 10) {
    document.querySelector(".achievement-image[data-score='10']").style.display = "block";
    document.querySelector(".achievement-sound[data-score='10']").play();
    setTimeout(() => {
      document.querySelector(".achievement-image[data-score='10']").style.display = "none";
    }, 2000);
  } else if (score === 60) {
    document.querySelector(".achievement-image[data-score='60']").style.display = "block";
    document.querySelector(".achievement-sound[data-score='60']").play();
    setTimeout(() => {
      document.querySelector(".achievement-image[data-score='60']").style.display = "none";
    }, 2000);
  } else if (score === 80) {
    document.querySelector(".achievement-image[data-score='80']").style.display = "block";
    document.querySelector(".achievement-sound[data-score='80']").play();
    setTimeout(() => {
      document.querySelector(".achievement-image[data-score='80']").style.display = "none";
    }, 2000);
  } else if (score === 100) {
    document.querySelector(".achievement-image[data-score='100']").style.display = "block";
    document.querySelector(".achievement-sound[data-score='100']").play();
    setTimeout(() => {
      document.querySelector(".achievement-image[data-score='100']").style.display = "none";
    }, 2000);
  }
}



// Function to display achievement
function displayAchievement() {
  const achievementImage = document.querySelector(`.achievement-image[data-score="${score}"]`);
  if (achievementImage) {
    achievementImage.style.display = "block";
    const achievementSound = document.querySelector(`.achievement-sound[data-score="${score}"]`);
    if (achievementSound) {
      achievementSound.play();
    }
  }
}

// Add event listeners
startButton.addEventListener("click", () => {
  playerName = playerNameInput.value.trim();
  if (playerName !== "") {
    startButton.style.display = "none";
    playerNameInput.style.display = "none";
    displayQuestion(0);
    backgroundMusic.play();
  } else {
    alert("Oops! Victoria says Enter Your Name To Start!");
  }
});

playAgainButton.addEventListener("click", () => {
  score = 0;
  currentQuestionIndex = 0;
  playAgainButton.style.display = "none";
  startButton.style.display = "block";
  playerNameInput.style.display = "block";
  displayQuestion(0);
  backgroundMusic.play();
});

optionsList.addEventListener("change", handleOptionSelection);