const mongoose = require('mongoose');

const schemaUsuarios = new mongoose.Schema({
    cedula: {type: Number, required: true, unique:true}, 
    nombre: {type: String, required: true},
    correo: {type: String, required: true}, 
    contraseña: {type: String, required: true}
    
});
const UsuariosModel = mongoose.model('RegistroUsuarios', schemaUsuarios);

module.exports = UsuariosModel;