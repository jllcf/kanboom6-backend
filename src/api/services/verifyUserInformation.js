const User = require("../models/user");

const verifyUserInformation = async (userData) => {
  const errorArray = [];

  const verifyExistentUsername = await User.findOne({ where: { user_name: userData.user_name } });
  if (verifyExistentUsername !== null) {
    errorArray.push("Nome de usuário já cadastrado.");
  }

  const verifyExistentEmail = await User.findOne({ where: { user_email: userData.user_email } });
  if (verifyExistentEmail !== null) {
    errorArray.push("Email já cadastrado.");
  }

  if (errorArray.length) {
    return { message: errorArray, type: "error" };
  }

  return { message: "Usuário validado com sucesso.", type: "success" };
};

module.exports = { verifyUserInformation };
