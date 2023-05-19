const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://userkanboom:Ohghp9n22HEIIexHmUZup8DlcbXvVoiJ@dpg-chimnsu4dad01anfcvug-a.oregon-postgres.render.com/dbkanboom`,
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
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

// Dropa a tabela?
//const syncWithDB = async () => {
//  await sequelize.sync({ force: true });
//};
//
testConnection();
//syncWithDB();

module.exports = sequelize;
