const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Joke = sequelize.define("joke", {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Joke;
