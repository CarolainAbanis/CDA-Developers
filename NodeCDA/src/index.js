const express = require('express');
const mongoose = require('./database/conexion');
const ProductosModel = require('./database/productos');

const app = express();

//tipo de consultas que le puedo hacer al servidor
//listar elementos de la BD
app.get('/RegistroProductos', (req, res) => {
    console.log(req.params);
    ProductosModel.find().then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
   
});

//añadir elementos a la BD
app.post( '/RegistroProductos',(req, res) => {
    console.log(req.params, req.body, req.headers);
    ProductosModel.create(
        {
            idproducto: "5555",
            descripcion: "maleta, agg node",
            valorunitario: 20000,
            estado: "disponible",
            fecharegistro: "10-16-2021"

        }
    ).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });

});

//actualizar  elementos de la BD
app.put('/RegistroProductos', (req, res) => {
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

app.listen(5000, () => {
    console.log('ya esta corrriendo el servidor');
});
