var express = require('express');
var router = express.Router();
const productosControllers = require('./controllers/productosControllers');

app.router('/RegistroProductos').get(productosControllers.crearProductos);

module.exports = router;
