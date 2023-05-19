const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Login = sequelize.define("login", {
 
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Login;