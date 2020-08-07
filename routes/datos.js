'use strict';

var express = require('express');
var datosController = require('../controllers/datos');

var router = express.Router();

router.post('/nuevoCliente',datosController.saveClient);
router.get('/clientes',datosController.getClients);
router.get('/clientes/:id', datosController.getClient);
router.put('/clientes/:id', datosController.updateClient);
router.delete('/clientes/:id', datosController.deleteClient);
module.exports = router;
