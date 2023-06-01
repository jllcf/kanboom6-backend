const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const User = require("./user");

const Board = sequelize.define("board", {
  board_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  board_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Board.belongsTo(User, {
  foreignKey: "user_name",
});

module.exports = Board;
