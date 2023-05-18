const { object, string } = require("yup");
const User = require("../models/user");

const create_user = async (req, res) => {
  const schema = object({
    user_name: string().required("Nome de usuário é obrigatório."),
    user_email: string().email("Email é obrigatório."),
    user_password: string().min(6, "Senha precisa conter 6 ou mais caracteres."),
  });

  try {
    const validation = await schema.validate(req.body, { abortEarly: false });
  } catch (error) {
    return res.status(400).json({
      erro: true,
      mensagem: error.errors,
    });
  }

  const newUser = await User.create(req.body);
  return res.status(200).json({ message: "Usuário inserido com sucesso." });
};

module.exports = { create_user };
