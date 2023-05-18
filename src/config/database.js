const dotenv = require("dotenv");
const pg = require("pg");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  `postgresql://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
);

module.exports = { sequelize };
