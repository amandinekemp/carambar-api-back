const { Joke } = require("../models");

exports.addJoke = async (req, res) => {
    try {
        const joke = await Joke.create({ content: req.body.content });
        res.status(201).json(joke);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de l'ajout de la blague" });
    }
};

exports.getAllJokes = async (req, res) => {
    const jokes = await Joke.findAll();
    res.json(jokes);
};

exports.getRandomJoke = async (req, res) => {
    const jokes = await Joke.findAll();
    if (jokes.length === 0) {
        return res.status(404).json({ error: "Aucune blague trouvée" });
    }
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(randomJoke);
};
