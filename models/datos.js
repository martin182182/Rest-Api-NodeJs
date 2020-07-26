'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var datosSchema = Schema({
  name: String,
  ci: String,
  direc: String
});

module.exports = mongoose.model('Dato',datosSchema)
