const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {type: String, required: true}, 
    firstname: String, 
    lastname: String, 
    password: String, 
    email: String, 
    userRole: String,
    userStatus: String
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;