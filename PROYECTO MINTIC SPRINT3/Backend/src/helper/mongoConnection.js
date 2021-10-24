const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://AdminCDA:pws1234@cluster0.w8nvs.mongodb.net/Sprint3');
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
});

db.once('open',()=>{
    console.log('Conexión establecida con la base de datos')
});

module.exports = mongoose