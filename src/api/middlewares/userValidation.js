const { object, string } = require("yup");

const newUserValidation = async (req, res, next) => {
  const schema = object({
    user_name: string().required("Nome de usuário é obrigatório."),
    user_email: string().required("Email é obrigatório.").email("Email inválido."),
    user_password: string().min(6, "Senha precisa conter 6 ou mais caracteres."),
  });

  try {
    const validation = await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    return res.status(400).json({
      erro: true,
      mensagem: error.errors,
    });
  }
};

module.exports = { newUserValidation };
