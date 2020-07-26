'use strict';

var express = require('express');
var datosController = require('../controllers/datos');

var router = express.Router();

router.post('/nuevoCliente',datosController.saveClient);
router.get('/clientes',datosController.getClients);
module.exports = router;
