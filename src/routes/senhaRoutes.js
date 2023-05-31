// routes/senhaRoutes.js
const express = require('express');
const senhaController = require('../controllers/senhaController');

const router = express.Router();

// Rota POST para recuperar a senha
router.post('/recuperar-senha', senhaController.recuperarSenha);

module.exports = router;
