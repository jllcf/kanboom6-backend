const express = require("express");
const { boardValidation } = require("../api/middlewares/boardValidation");
const { authenticateUser } = require("../api/middlewares/auth");
const boardsController = require("../api/controllers/boardsController");
const router = express.Router();

router.use(express.json());

router.post("/", [authenticateUser, boardValidation("board")], boardsController.create_board);

module.exports = router;
