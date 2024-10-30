// Slang words data (embedded to avoid CORS issues)
const slangWords = [
    { word: "Astig", meaning: "Cool or awesome" },
    { word: "Gigil", meaning: "The urge to pinch or squeeze someone cute" },
    { word: "Charot", meaning: "Just kidding" },
    { word: "Jowa", meaning: "Boyfriend or girlfriend" },
    { word: "Petmalu", meaning: "Incredible or impressive" },
    { word: "Lodi", meaning: "Idol or someone you admire" },
    { word: "Werpa", meaning: "Power or encouragement" },
    { word: "Sana all", meaning: "I hope everyone experiences that" },
    { word: "Chibog", meaning: "Food or eating" },
    { word: "Tara", meaning: "Let's go" },
    { word: "Olats", meaning: "Loser" },
    { word: "Keri", meaning: "Manageable or can do it" },
    { word: "Basag", meaning: "Drunk or wasted" },
    { word: "Kalurks", meaning: "Crazy or overwhelming" },
    { word: "Senti", meaning: "Sentimental" },
    { word: "Hanep", meaning: "Amazing" },
    { word: "Chika", meaning: "Gossip or talk" },
    { word: "Epal", meaning: "Attention-seeker" },
    { word: "Beshie", meaning: "Best friend" },
    { word: "Bongga", meaning: "Extravagant or fabulous" }
];

const button = document.getElementById('randomSlangBtn');
const display = document.getElementById('slangDisplay');
let lastIndex = -1;

button.addEventListener('click', () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * slangWords.length);
    } while (randomIndex === lastIndex);

    const randomSlang = slangWords[randomIndex];
    display.textContent = `${randomSlang.word}: ${randomSlang.meaning}`;
    lastIndex = randomIndex;
});
