const express = require("express");
const router = express.Router();
const pool = require("../database/database");
const { object, string } = require("yup");

router.use(express.json());

router.post("/users", async (req, res) => {
  const schema = object({
    user_name: string().required(),
    user_email: string().email(),
    user_password: string().min(6),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      erro: true,
      mensagem: "Erro: Necessário preencher todos os campos do formulário",
    });
  }

  return res.json({
    erro: false,
    mensagem: "Dados validádos",
  });
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
