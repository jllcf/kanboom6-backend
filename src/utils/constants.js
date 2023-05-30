const responseMessages = {
  login: { error: "Email ou senha incorretos.", success: "Login efetuado." },
  signup: { error: "Erro ao criar o usuário.", success: "Usuário criado com sucesso" },
};

const verificationMessages = {
  existentUsername: "Nome de usuário já cadastrado.",
  existentEmail: "Email já cadastrado.",
};

const userFields = {
  name: "user_name",
  email: "user_email",
};

const tokenExpiration = "3hr";

module.exports = { responseMessages, verificationMessages, userFields, tokenExpiration };
