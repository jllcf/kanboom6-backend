const bcrypt = require("bcryptjs");
const saltRounds = 10;

const createBcryptHash = (req, res, next) => {
  const { user_password } = req.body;
  bcrypt.hash(user_password, saltRounds, function (err, hash) {
    if (err) {
      console.error(err);
      return;
    }
    req.body.user_password = hash;
    next();
  });
};

/* const senhaFornecida = "minhaSenha";
const hashArmazenado = "hashPrevio"; // Hash previamente armazenado no banco de dados

bcrypt.compare(senhaFornecida, hashArmazenado, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  if (result) {
    console.log("Senha correta!");
  } else {
    console.log("Senha incorreta!");
  }
}); */

module.exports = { createBcryptHash };
