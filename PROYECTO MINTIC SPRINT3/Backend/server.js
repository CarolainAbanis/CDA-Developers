const mongoConnection = require('./src/helper/mongoConnection')
const http = require('http')
const express = require('express');
const userRoutes = require('./src/routes/userRoutes')
const productRoutes = require('./src/routes/productRoutes')
const saleRoutes = require('./src/routes/saleRoutes')
const clientRoutes = require('./src/routes/clientRoutes')
const app = express();
const PORT = 4000;

app.use('/', userRoutes);
app.use('/', productRoutes);
app.use('/', saleRoutes);
app.use('/', clientRoutes);


app.use(express.json());
const server = http.createServer(app)

server.listen(PORT,'localhost', function () {
    console.log('Server started on port ', PORT);
});

mongoConnection.connect