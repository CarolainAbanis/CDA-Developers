const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require('./database/conexion');
const ProductosModel = require('./database/productos'); 
const UsuariosModel = require('./database/usuarios');
//const productosControllers = require('./controllers/productosControllers');



//app.route('/RegistroProductos').post(crearProductos);

app.post('/RegistroProductos', (req, res) => {
    console.log(req.params, req.body, req.headers);
    ProductosModel.create(req.body).then((data) => {
        res.json(data);
    }).catch(err => {
        res.status(500).send(err);
    });

});
//listar elementos de la BD
app.get('/RegistroProductos', (req, res) => {
    console.log(req.params);
    ProductosModel.find().then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
   
});
//actualizar  elementos de la BD
app.put('/RegistroProductos/:id', (req, res) => {
    console.log(req.params, req.body, req.headers);
    ProductosModel.findByIdAndUpdate(req.params.id, req.body).then((data)=>{
        res.json(data);
    }).catch(err =>{
        res.send(err);
    });
});

//eliminar elementos de la BD
app.delete('/RegistroProductos/:id', (req, res) => {
    console.log(req.params);
    ProductosModel.findByIdAndDelete(req.params.id).then(data =>{
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
});

app.post('/RegistroUsuarios', (req, res) => {
    console.log(req.params, req.body, req.headers);
    UsuariosModel.create(
        {
            cedula: 122222, 
            nombre: "victor quintero",
            correo: "victor@gmail.com", 
            contraseña: "aaaaa"

        }
    ).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });

});


app.listen(5000, () => {
    console.log('ya esta corrriendo el servidor');
});
