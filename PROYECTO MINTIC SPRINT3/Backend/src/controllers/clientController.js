const express = require('express');
const cliente = require('../models/clientModel')

//Controladores
crearCliente = async (req, res) =>{
    cliente.create(req.body)
        .then(() => res.json({'Mensaje':'El cliente ha sido registrado'}))
        .catch(() => res.json({'Mensaje':'Error al registrar el cliente'}))
}

encontrarCliente = async (req, res) => {
    cliente.find({ clientId: req.body.clientId })
    .then((data) => res.json(data))
    .catch(err => res.json({'Mensaje':'El cliente no fue encontrado'}))
}
actualizarCliente = async (req, res) => {
    const clientId = req.body.clientId
    cliente.findOneAndUpdate(clientId, req.body)
        .then(() => res.json({'Mensaje':'El cliente ha sido actualizado'}))
        .catch(err => res.json({'Mensaje':'Error al intentar actualizar el cliente'}))      
}
eliminarCliente = async (req, res) => {
    const clientId = req.body.clientId
        console.log(clientId);
        cliente.findOneAndDelete(clientId, req.body)
            .then(() => res.json({'Mensaje':'El cliente ha sido borrado'}))
            .catch(err => res.json({'Mensaje':'Error al intentar borrar el cliente'}))      
}

module.exports = {
    crearCliente,
    encontrarCliente,
    actualizarCliente,
    eliminarCliente
}