const ProductosModel = require('./database/productos'); 

//tipo de consultas que le puedo hacer al servidor
//añadir elementos a la BD
crearProductos = (req, res) => {
    console.log(req.params, req.body, req.headers);
    ProductosModel.create(
        {
            idproducto: "9999",
            descripcion: "qqqq, agg node",
            valorunitario: 20000,
            estado: "disponible",
            fecharegistro: "10-16-2021"

        }
    ).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });

};
/*

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
*/

module.exports = {crearProductos};
