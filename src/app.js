const express = require("express");
const cors = require("cors");
const jokeRoutes = require("./routes/jokeRoutes");
const { initDB } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

// Route racine définie avant /api
app.get("/", (req, res) => {
    res.send("<h1>Bienvenue sur l'API Carambar !</h1>Utilisez <a href='/api/jokes'>/api/jokes</a> pour intéragir avec l'API.");
});

// Utilisation des routes API après la route racine
app.use("/api", jokeRoutes);

initDB();

module.exports = app;

