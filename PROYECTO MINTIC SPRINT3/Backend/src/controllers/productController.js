const express = require('express');
const producto = require('../models/productModel')

//Controladores
crearProducto = async (req, res) =>{
    producto.create(req.body)
        .then(() => res.json({'Mensaje':'El producto ha sido registrado'}))
        .catch(() => res.json({'Mensaje':'Error al registrar el producto'}))
}

encontrarProductoId = async (req, res) => {
    producto.find({ productId: req.body.productId })
        .then((data) => res.json(data))
     .catch(err => res.json({'Mensaje':'El producto no fue encontrado'}))
 }
encontrarProductoDescrip = async (req, res) => {
    producto.find({ description: req.body.description })
        .then((data) => res.json(data))
        .catch(err => res.json({'Mensaje':'El producto no fue encontrado'}))
    }
    
listarProductoAll = async (req, res) => {
    producto.find()
        .then((data) => res.json(data))
        .catch(err => res.json({'Mensaje':'El producto no fue encontrado'}))
    }

actualizarProducto = async (req, res) => {
const productId = req.body.productId
    producto.findOneAndUpdate(productId, req.body)
        .then(() => res.json({'Mensaje':'El producto ha sido actualizado'}))
        .catch(err => res.json({'Mensaje':'Error al intentar actualizar el producto'}))      
}
eliminarProducto = async (req, res) => {
const productId = req.body.productId
        console.log(productId);
        producto.findOneAndDelete(productId, req.body)
            .then(() => res.json({'Mensaje':'El producto ha sido borrado'}))
            .catch(err => res.json({'Mensaje':'Error al intentar borrar el producto'}))      
}


module.exports = {
    crearProducto,
    encontrarProductoId,
    encontrarProductoDescrip,
    listarProductoAll,
    actualizarProducto,
    eliminarProducto
}