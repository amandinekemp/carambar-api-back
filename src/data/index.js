const { insertJokes } = require("./insertJokes");

const insertData = async () => {
    await insertJokes();
    console.log("Données initialisées !");
};

module.exports = { insertData };
