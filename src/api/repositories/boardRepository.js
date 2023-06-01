const Board = require("../models/board");

const createBoard = async (boardData) => {
  try {
    const newBoard = await Board.create(boardData);
    return { message: "Quadro criado com sucesso", type: "success", data: newBoard };
  } catch (error) {
    console.log(error.message);
    return { message: `Erro ao criar o quadro. ${error.message}`, type: "error" };
  }
};

module.exports = { createBoard };
