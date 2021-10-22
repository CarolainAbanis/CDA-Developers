const express = require('express');
const clientRoutes = express.Router();
const cliente = require('../models/clientModel')
const clientController = require('../controllers/clientController');
clientRoutes.use(express.urlencoded({extended: true}))
clientRoutes.use(express.json());

//Client routers

clientRoutes.route('/Clientes')
.post(clientController.crearCliente)

.get(clientController.encontrarCliente)

.put(clientController.actualizarCliente)

.delete(clientController.eliminarCliente)

module.exports = clientRoutes;