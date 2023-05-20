const bcrypt = require('bcryptjs');
const senha = 'minhaSenha';
const saltos = 10;

bcrypt.hash(senha, saltos, function(err, hash) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Senha criptografada:', hash);
});

const senhaFornecida = 'minhaSenha';
const hashArmazenado = 'hashPrevio'; // Hash previamente armazenado no banco de dados

bcrypt.compare(senhaFornecida, hashArmazenado, function(err, result) {
  if (err) {
    console.error(err);
    return;
  }

  if (result) {
    console.log('Senha correta!');
  } else {
    console.log('Senha incorreta!');
  }
});


module.exports = bcrypt;
