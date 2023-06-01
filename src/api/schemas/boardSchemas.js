const { object, string } = require("yup");

const board = object({
  board_name: string().required("Nome do quadro é obrigatório."),
  user_name: string().required("Usuário é obrigatório."),
})
  .noUnknown("Campo inválido no formulário.")
  .strict(true);

module.exports = { board };
