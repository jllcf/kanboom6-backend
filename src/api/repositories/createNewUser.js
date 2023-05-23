const User = require("../models/user");

const createNewUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return { message: "Usuário criado com sucesso", type: "success" };
  } catch (error) {
    console.log(error.message);
    return { message: `Erro ao criar o usuário. ${error.message}`, type: "error" };
  }
};

module.exports = { createNewUser };
