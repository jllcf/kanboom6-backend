const { object, string } = require("yup");
const Login = require("../models/login");
//const { aAdmin } = require("../middlewares/auth");

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

  const {user_email, user_password} = req.body;

  try {
    const user = await User.findOne({ where: {user_email, user_password}});
    if (!user) {
      return res
      .status(404)
      .json({ erro: true, mensagem: "Usuário não encontrado"});
    }
      return res.status(200).json({ message: "Login efetuado com sucesso!"});
    
  }catch(error) {console.error(error); return res
  .status(500)
  .json({erro: true, mensagem:"Erro ao realizar o login"});
}
};



module.exports = { login_check };

