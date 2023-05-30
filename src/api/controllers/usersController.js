const userRepository = require("../repositories/userRepository");
const { verifyUserInformation } = require("../services/verifyUserInformation");
const { generalError, generalSuccess } = require("../../utils/responses");
const { responseMessages } = require("../../utils/constants");

const create_user = async (req, res) => {
  const newUserData = req.body;
  const verifyNewUserInfo = await verifyUserInformation(newUserData);

  if (verifyNewUserInfo.type === "error") {
    return generalError(res, verifyNewUserInfo.message);
  }
  try {
    await userRepository.createUser(newUserData);
    generalSuccess(res, responseMessages.signup.success);
  } catch (error) {
    generalError(res, responseMessages.signup.error);
  }
};

module.exports = { create_user };
