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
    Dato.find({}).exec((err,clients)=>{
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!clients) return res.status(404).send({message: 'No hay clientes para mostrar'});
      return res.status(200).send({clients});
    });
  },
  getClient: function(req, res){
		var clientId = req.params.id;

		if(clientId == null) return res.status(404).send({message: 'El cliente no existe.'});

		Dato.findById(clientId, (err, client) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!client) return res.status(404).send({message: 'El cliente no existe.'});

			return res.status(200).send({
			     client
			});

		});
	},
  updateClient: function(req, res){
    var clientId = req.params.id;
    var update = req.body;

    Dato.findByIdAndUpdate(clientId, update, {new:true}, (err, clientUpdated) => {
      if(err) return res.status(500).send({message: 'Error al actualizar'});

      if(!clientUpdated) return res.status(404).send({message: 'No existe el cliente para actualizar'});

      return res.status(200).send({
        message: 'Cliente actualizado'
      });
    });

  },

  deleteClient: function(req, res){
    var clientId = req.params.id;

    Dato.findByIdAndRemove(clientId, (err, clientRemoved) => {
      if(err) return res.status(500).send({message: 'No se ha podido borrar el cliente'});

      if(!clientRemoved) return res.status(404).send({message: "No se puede eliminar ese cliente"});

      return res.status(200).send({
        message: "Cliente borrado"
      });
    });
  }









}



module.exports = controller;
