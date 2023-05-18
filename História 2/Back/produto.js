const Sequelize = require("sequelize");
const database = require("../database/database");

const users = database.define("users", {
  nome: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});
