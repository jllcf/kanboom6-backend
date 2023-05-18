const express = require("express");
const router = express.Router();
const pool = require("../config/database");
const { object, string } = require("yup");

router.use(express.json());

router.post("/users", async (req, res) => {
  const schema = object({
    user_name: string().required("Nome de usuário é obrigatório."),
    user_email: string().email("Email é obrigatório."),
    user_password: string().min(6, "Senha precisa conter 6 ou mais caracteres."),
  });

  try {
    const validation = await schema.validate(req.body);
  } catch (error) {
    return res.status(400).json({
      erro: true,
      mensagem: error.message,
    });
  }
});
//const { user_name, user_email, user_password } = req.body;
//console.log(user_name, user_email, user_password);
//const newUser = await pool.query(
//"INSERT INTO users (user_name, user_email, user_password) VALUES ($1,$2,$3) RETURNING *",
// [user_name, user_email, user_password];
//);

//return res
// .status(200)
//.json({ message: "Usuário inserido com sucesso.", data: newUser.rows[0] });
//});

module.exports = router;
