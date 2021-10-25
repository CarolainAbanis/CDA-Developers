const express = require('express')
const mongoose = require('./database/connection')
const users = require('./database/user')

const path = require('path')
const app = express()
const userModel = require('./database/user');
app.use (express.json());

const usersControllers = require('./controllers/usersControllers')

app.route('/users').get(usersControllers.listUser).post(createUser).put(modifyUser).delete(deleteUser);

app.listen(3000, () => {
    console.log(`Iniciando server por el puerto 3001`)
});