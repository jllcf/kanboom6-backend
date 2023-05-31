// services/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // Configuração do serviço de e-mail
});

function sendPasswordResetEmail(email, novaSenha) {
  const mailOptions = {
    from: 'seu_email',
    to: email,
    subject: 'Redefinição de Senha',
    text: `Sua nova senha é: ${novaSenha}. Acesse o link para redefinir sua senha: https://seusite.com/redefinir-senha`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar e-mail:', error);
    } else {
      console.log('E-mail enviado:', info.response);
    }
  });
}

module.exports = {
  sendPasswordResetEmail,
};
