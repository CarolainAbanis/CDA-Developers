const express = require('express');
const venta = require('../models/saleModel')

//Controladores

encontrarVenta = async (req, res) => {
    venta.find({ saleId: req.body.saleId })
    .then((data) => res.json(data))
    .catch(err => res.json({'Mensaje':'La venta no fue encontrada'}))
}

listarVentaAll = async (req, res) => {
    producto.find()
        .then((data) => res.json(data))
        .catch(err => res.json({'Mensaje':'Las ventas no fueron encontradas'}))
    
}

actualizarVenta = async (req, res) => {
    const saleId = req.body.saleId
    venta.findOneAndUpdate(saleId, req.body)
        .then(() => res.json({'Mensaje':'La venta ha sido actualizada'}))
        .catch(err => res.json({'Mensaje':'Error al intentar actualizar la venta'}))      
}

//PREGUNTAR SI SE PUEDE ELIMINAR LA VENTA
// eliminarVenta = async (req, res) => {
//     const clientId = req.body.clientId
//         console.log(clientId);
//         venta.findOneAndDelete(clientId, req.body)
//             .then(() => res.json({'Mensaje':'La venta ha sido borrada'}))
//             .catch(err => res.json({'Mensaje':'Error al intentar borrar la venta'}))      
// }

module.exports = {
    encontrarVenta,
    listarVentaAll,
    actualizarVenta,
     //eliminarVenta
}