//conexion a la base de datos en la nube
//llamamos a mongoose
const mongoose = require('mongoose');

//URL de la base de datos
const URL = 'mongodb+srv://carolain:connie26@cluster0.w8nvs.mongodb.net/BaseDatosCDA?retryWrites=true&w=majority'

mongoose.connect(URL, {dbName:'BaseDatosCDA', useNewUrlParser: true, useUnifiedTopology: true });
// funcion conect de mongoose. evita que muestre mensajes de error en consola
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("La conexión a la base de datos MongoDB se estableció correctamente");
});

module.exports = mongoose;

