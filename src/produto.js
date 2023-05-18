const Sequelize = require("sequelize");
const database = require("../database/database");

const users = database.define("users", {
  nome: {
    type: Sequelize.STRING,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userPassword: {
    type: Sequelize.STRING,
    autoIncrement: true,
    allowNull: false,
  },
  userEmail: {
    type: Sequelize.STRING,
    autoIncrement: true,
    allowNull: false,
  },
});
