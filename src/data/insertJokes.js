const { Joke } = require("../models");

const jokes = [
    { content: "Pourquoi les plongeurs plongent toujours en arrière et jamais en avant ?", answer: "Parce que sinon ils tombent toujours dans le bateau !" },
    { content: "Que fait un électricien lorsqu’il a une panne d’électricité ?", answer: "Il se branche sur son générateur !" },
    { content: "Pourquoi les poissons détestent l'ordinateur ?", answer: "Parce qu'ils ont peur du net !" },
    { content: "Quelle est la boisson préférée des électriciens ?", answer: "Le courant !" },
    { content: "Pourquoi les oiseaux ne se font jamais de mauvais films ?", answer: "Parce qu’ils ont toujours des ailes !" },
    { content: "Quelle est la femelle du hamster ?", answer: "L’Amsterdam" },
    { content: "Que dit un oignon quand il se cogne ?", answer: "Aïe" },
    { content: "Quel est l'animal le plus heureux ?", answer: "Le hibou, parce que sa femme est chouette." },
    { content: "Pourquoi le football c'est rigolo ?", answer: "Parce que Thierry en rit" },
    { content: "Quel est le sport le plus fruité ?", answer: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." },
    { content: "Que se fait un Schtroumpf quand il tombe ?", answer: "Un Bleu" },
    { content: "Quel est le comble pour un marin ?", answer: "Avoir le nez qui coule" },
    { content: "Qu'est ce que les enfants usent le plus à l'école ?", answer: "Le professeur" },
    { content: "Quel est le sport le plus silencieux ?", answer: "Le para-chuuuut" },
    { content: "Quel est le comble pour un joueur de bowling ?", answer: "C’est de perdre la boule" }
];

const insertJokes = async () => {
    try {
        const nbJokesInDb = await Joke.count();
        if (nbJokesInDb === 0) {
            await Joke.bulkCreate(jokes);
            console.log("Blagues ajoutées avec succès !");
        } else {
            console.log("Blagues déjà en base de données !");
        }
    } catch (error) {
        console.error("Erreur lors de l'ajout des blagues :", error);
    }
};

module.exports = { insertJokes };