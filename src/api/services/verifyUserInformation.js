const userRepository = require("../repositories/userRepository");
const { userFields, verificationMessages } = require("../../utils/constants");

const verifyUserInformation = async (userData) => {
  const errorArray = [];

  const verifyExistentUsername = await userRepository.searchUser(userFields.name, userData.user_name);
  if (verifyExistentUsername !== null) {
    errorArray.push(verificationMessages.existentUsername);
  }

  const verifyExistentEmail = await userRepository.searchUser(userFields.email, userData.user_email);
  if (verifyExistentEmail !== null) {
    errorArray.push(verificationMessages.existentEmail);
  }

  if (errorArray.length) {
    return { message: errorArray, type: "error" };
  }

  return { message: "Usuário validado com sucesso.", type: "success" };
};

module.exports = { verifyUserInformation };
