'use strict';
var Dato = require('../models/datos');
var controller = {

  saveClient : function(req, res){
    var datos = new Dato();
    var params = req.body;
    datos.name = params.name;
    datos.ci = params.ci;
    datos.direc = params.direc;
    datos.save((err, datosStored) => {
      if(err) return res.status(500).send({message: 'Error al guardar los datos.'})
      if(!datosStored) res.status(404).send({mesagge: 'No existen datos para guardar.'})
      return res.status(200).send({datos: datosStored});
    });
  },
  getClients : async function(req,res){
    Dato.find({}).skip((2) * 3).limit(4).exec((err,clients)=>{
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!clients) return res.status(404).send({message: 'No hay clientes para mostrar'});
      return res.status(200).send({clients});
    });
  }
}


module.exports = controller;
