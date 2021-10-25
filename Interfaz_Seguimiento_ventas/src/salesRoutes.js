const express = require('express');
const cors = require('cors')
const saleRoutes = express.Router();
const venta = require('../models/saleModel')
saleRoutes.use(express.urlencoded({extended: true}))
const saleController = require('../controllers/saleController')
saleRoutes.use(express.json());

//Sale routers

saleRoutes.use(cors())

saleRoutes.route('/Ventas')
.post(saleController.crearVenta)
.get(saleController.encontrarVenta)
.put(saleController.actualizarVenta)
saleRoutes.get('/VentasAll', saleController.listarVentaAll)
//.delete(saleController.eliminarVenta)

    

module.exports = saleRoutes;