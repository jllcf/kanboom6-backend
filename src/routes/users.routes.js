const express = require("express");
const usersController = require("../api/controllers/usersController");
const router = express.Router();

router.use(express.json());

router.post("/", usersController.create_user);

module.exports = router;
