const { generalError, generalSuccess } = require("../../utils/responses");
const { responseMessages } = require("../../utils/constants");
const boardRepository = require("../repositories/boardRepository");

const create_board = async (req, res) => {
  const newBoardData = req.body;

  try {
    const newBoard = await boardRepository.createBoard(newBoardData);
    generalSuccess(res, newBoard.message, newBoard.data);
  } catch (error) {
    generalError(res, error.message);
  }
};

module.exports = { create_board };
