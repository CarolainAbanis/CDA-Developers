const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    clientId:{type:String, required:true, unique:true},
    clientFirstName:{type:String, required:true},
    clientLastName:{type:String, required:true},
});

const client = mongoose.model('client',clientSchema);

module.exports = client