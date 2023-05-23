const { createNewUser } = require("../repositories/createNewUser");
const { verifyUserInformation } = require("../services/verifyUserInformation");

const create_user = async (req, res) => {
  const newUserData = req.body;
  const verifyNewUserInfo = await verifyUserInformation(newUserData);

  if (verifyNewUserInfo.type === "error") {
    return res.status(400).json(verifyNewUserInfo);
  }

  const serverResponse = await createNewUser(newUserData);
  return res.status(serverResponse.type === "error" ? 400 : 200).json(serverResponse);
};

module.exports = { create_user };
