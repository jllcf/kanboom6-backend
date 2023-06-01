const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}/${process.env.PG_DATABASE}`,
  {
    dialectOptions: {
      ssl: process.env.NODE_ENV === "production",
    },
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};

const syncDatabase = async () => process.env.NODE_ENV === "development" && (await sequelize.sync({ force: true }));

testConnection();
/* syncDatabase(); */ // Comando para sincronizar o banco de dados em desenvolvimento. JAMAIS RODAR EM PRODUÇÃO.

module.exports = sequelize;
