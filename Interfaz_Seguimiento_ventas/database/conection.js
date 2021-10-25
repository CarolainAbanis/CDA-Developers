const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Daniel_25:Daniel123@cluster0.w8nvs.mongodb.net/Sprint3');
const db = mongoose.connection

mongoose.connect(URL, {dbName:'Sprint3', useNewUrlParser: true, useUnifiedTopology: true });


const connection = mongoose.connection;
connection.once("open", function () {
  console.log("La conexión a la base de datos MongoDB se estableció correctamente");
});

module.exports = mongoose