const mongoose = require('mongoose');

const schemaProductos = new mongoose.Schema({
    idproducto: {type: String, required: true, unique:true}, 
    descripcion: {type: String, required: true},
    valorunitario: {type: Number, required: true}, 
    estado: {type: String, required: true}, 
    fecharegistro: {type: String, required: true}
});
const ProductosModel = mongoose.model('RegistroProductos', schemaProductos);

module.exports = ProductosModel;