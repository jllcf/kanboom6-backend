const Sequelize = require("sequelize");
const dbConnect = require("./config/database");

const Users = database.define("users", {
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

module.exports = { Users };
