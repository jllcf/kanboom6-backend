const { object, string } = require("yup");
const Login = require("../models/login");

const login_check = async (req, res) => {
  const schema = object({
    user_email: string().email("Email é obrigatório."),
    user_password: string().min(
      6,
      "Senha precisa conter 6 ou mais caracteres."
    ),
  });

  try {
    const validation = await schema.validate(req.body, { abortEarly: false });
  } catch (error) {
    return res.status(400).json({
      erro: true,
      mensagem: error.errors,
    });
  }

  const checkUser = await Login.getTableName(req.body);
  return res.status(200).json({ message: "Login efetuado com sucesso." });
};

module.exports = { login_check };
