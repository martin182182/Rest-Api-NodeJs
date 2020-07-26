'use strict';
var mongoose = require('mongoose');
var app = require('./app.js');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/clientes')
        .then(() => {
          console.log('Conexion a clientes exitosa');
          //Creacion servidor
          app.listen(port, () => {
            console.log('Servidor corriendo');
          });
        })
        .catch(err => {
          console.log(err);
        });
