const express = require("express");
const router = express.Router();
const { object, string } = require("yup");
const Users = require("../produto");

router.use(express.json());

router.post("/users", async (req, res) => {
  const schema = object({
    user_name: string().required("Nome de usuário é obrigatório."),
    user_email: string().email("Email é obrigatório."),
    user_password: string().min(
      6,
      "Senha precisa conter 6 ou mais caracteres."
    ),
  });

  try {
    const validation = await schema.validate(req.body, { abortEarly: false });
  } catch (error) {
    console.log(error.errors);
    return res.status(400).json({
      erro: true,
      mensagem: error.errors,
    });
  }

  return res.status(200).json({ message: "Usuário inserido com sucesso." });
});

module.exports = router;
