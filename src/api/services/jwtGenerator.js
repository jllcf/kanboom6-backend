const jwt = require("jsonwebtoken");
const { tokenExpiration } = require("../../utils/constants");
require("dotenv").config();

const jwtGenerator = (data) => {
  const tokenData = data;
  return jwt.sign(tokenData, process.env.JWT_KEY, { expiresIn: tokenExpiration });
};

module.exports = jwtGenerator;
