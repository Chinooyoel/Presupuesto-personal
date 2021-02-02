const express = require('express');
const router = express.Router();
const authControlador = require('../controladores/authControlador');

//Validar credenciales
// /auth
router.post('/', authControlador.validarCredenciales);


module.exports = router;