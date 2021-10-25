const mongoose = require('mongoose');

const URL = 'mongodb+srv://AdminCDA:pws1234@cluster0.w8nvs.mongodb.net/Sprint3?retryWrites=true&w=majority';

mongoose.connect(URL, {dbName:'Sprint3', useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

module.exports = mongoose;