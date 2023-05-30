const { responseMessages } = require("../../utils/constants");
const { loginSuccess, authError } = require("../../utils/responses");
const { loginService } = require("../services/loginService");

const login_check = async (req, res) => {
  const token = await loginService(req.body);

  if (!token) {
    return authError(res, responseMessages.login.error);
  }

  return loginSuccess(res, responseMessages.login.success, token);
};

module.exports = { login_check };
