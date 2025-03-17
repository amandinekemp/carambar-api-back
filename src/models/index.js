const sequelize = require("../config/database");
const Joke = require("./Joke");

const initDB = async () => {
    await sequelize.sync({ force: false });
    console.log("Base de données synchronisée !");
};

module.exports = { initDB, Joke };
