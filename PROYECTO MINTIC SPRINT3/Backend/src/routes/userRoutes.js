const express = require('express');
const userRoutes = express.Router();
const usuario = require('../models/userModel')
const userController = require('../controllers/userController');
userRoutes.use(express.urlencoded({extended: true}))
userRoutes.use(express.json());


//User routers

userRoutes.route('/Usuarios')
.post(userController.crearUsuario)
.get(userController.encontrarUsuario)
.put(userController.actualizarUsuario)
userRoutes.get('/UsuariosAll', userController.listarUsuarioAll)
.delete(userController.borrarUsuario)


module.exports = userRoutes;