const express = require("express");
const loginController = require("../api/controllers/loginController");
const router = express.Router();

router.use(express.json());

router.get("/", loginController.login_check);

module.exports = router;