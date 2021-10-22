const express = require('express');
const usuario = require('../models/userModel')

//Controladores
crearUsuario = async (req, res) => {
    usuario.create(req.body)
        .then(() => res.json({'Mensaje':'El usuario ha sido creado'}))
        .catch(err => res.json({'Mensaje':'Error al crear el usuario'}))
}

actualizarUsuario = async (req, res) => {
    const userId = req.body.userId
    usuario.findOneAndUpdate(userId, req.body)
        .then(() => res.json({'Mensaje':'El usuario ha sido actualizado'}))
        .catch(() => res.json({'Mensaje':'Error al intentar actualizar el usuario'}))      
}
encontrarUsuario = async (req, res) => {
    usuario.find({ saleId: req.body.saleId })
    .then((data) => res.json(data))
    .catch(err => res.json({'Mensaje':'El usuario no fue encontrado'}))
}

listarUsuarioAll = async (req, res) => {
    usuario.find()
        .then((data) => res.json(data))
        .catch(err => res.json({'Mensaje':'Los usuario no fueron encontrados'}))
    
}

borrarUsuario = async (req, res) => {
    const userId = req.body.userId
    console.log(userId);
    usuario.findOneAndDelete(userId, req.body)
        .then(() => res.json({'Mensaje':'El usuario ha sido borrado'}))
        .catch(err => res.json({'Mensaje':'Error al intentar borrar el usuario'}))      
    }
module.exports = {
    crearUsuario,
    actualizarUsuario,
    encontrarUsuario,
    listarUsuarioAll,
    borrarUsuario
}