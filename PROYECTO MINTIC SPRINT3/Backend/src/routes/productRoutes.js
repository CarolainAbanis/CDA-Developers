const express = require('express');
const productRoutes = express.Router();
const producto = require('../models/productModel')
const productController = require('../controllers/productController');
productRoutes.use(express.urlencoded({extended: true}))
productRoutes.use(express.json());

//Product routes

productRoutes.route('/Productos')
.post(productController.crearProducto)
    
.get(productController.encontrarProductoId)

.put(productController.actualizarProducto)
    
.delete(productController.actualizarProducto)

productRoutes.get('/ProductosDes', productController.encontrarProductoDescrip)

productRoutes.get('/ProductosAll', productController.listarProductoAll)

module.exports = productRoutes;