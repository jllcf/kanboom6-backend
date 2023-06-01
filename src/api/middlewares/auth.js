const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { generalError, authError } = require("../../utils/responses");
require("dotenv").config();

const authenticateUser = async (req, res, next) => {
  const jwtToken = req.header("token");

  if (!jwtToken) {
    return authError(res, "Erro de autenticação.");
  }

  try {
    const verifyUser = jwt.verify(jwtToken, `${process.env.JWT_KEY}`);
    req.body = { ...req.body, user_name: verifyUser.user_name };
    next();
  } catch (error) {
    return generalError(res, error.message);
  }
};

module.exports = { authenticateUser };
