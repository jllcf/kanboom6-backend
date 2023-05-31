// controllers/senhaController.js
const bcryptUtils = require('../utils/bcryptUtils');
const emailService = require('../services/emailService');
//const db = require('../db');

async function recuperarSenha(req, res) {
  const { email } = req.body;

  try {
    const usuario = await db.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (usuario.rows.length === 0) {
      return res.status(404).json({ message: 'Email não encontrado.' });
    }

    const novaSenha = bcryptUtils.generateRandomPassword();
    const senhaCriptografada = await bcryptUtils.encryptPassword(novaSenha);

    await db.query('UPDATE usuarios SET senha = $1 WHERE email = $2', [senhaCriptografada, email]);

    emailService.sendPasswordResetEmail(email, novaSenha);

    return res.json({ message: 'Senha atualizada. Verifique seu e-mail para mais instruções.' });
  } catch (error) {
    console.error('Erro ao recuperar senha:', error);
    return res.status(500).json({ message: 'Erro ao recuperar senha.' });
  }
}

module.exports = {
  recuperarSenha,
};
