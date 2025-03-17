const express = require("express");
const cors = require("cors");
const jokeRoutes = require("./routes/jokeRoutes");
const { initDB } = require("./models");
const { insertData } = require("./data");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Bienvenue sur l'API Carambar !</h1>Utilisez <a href='/v1/blagues/random'>/v1/blagues/random</a> pour rigoler un peu.");
});

app.use("/v1/blagues", jokeRoutes);

initDB()
    .then(r => insertData());

module.exports = app;

