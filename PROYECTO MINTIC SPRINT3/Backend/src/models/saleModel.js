const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    saleId:{type:String, required:true, unique:true},
    clientId:{type:String, required:true, unique:true},
    sellerFullName:{type:String, required:true},
    quantity:{type:Number, required:true},
    unitValue:{type:Number, required:true},
    totalValue:{type:Number, required:true},
    saleStatus:{type:String, required:true},
    createdDate:{type:Date, default:Date.now}
    
});

const sale = mongoose.model('sale',saleSchema);

module.exports = sale