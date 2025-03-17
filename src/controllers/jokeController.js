const { Joke } = require("../models");

exports.addJoke = async (req, res) => {
    try {
        const joke = await Joke.create({
            content: req.body.content,
            answer: req.body.answer
        });

        res.status(201).json(joke);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de l'ajout de la blague" });
    }
};

exports.getAllJokes = async (req, res) => {
    const jokes = await Joke.findAll();
    res.json(jokes);
};

exports.getJokeById = async (req, res) => {
    try {
        const jokeId = req.params.id;
        const joke = await Joke.findByPk(jokeId);
        if (!joke) {
            return res.status(404).json({ error: "Blague non trouvée" });
        }
        res.json(joke);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération de la blague" });
    }
};

exports.getRandomJoke = async (req, res) => {
    const jokes = await Joke.findAll();
    if (jokes.length === 0) {
        return res.status(404).json({ error: "Aucune blague trouvée" });
    }
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(randomJoke);
};
