const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId:{type:String, required:true, unique:true},
    description:{type:String, required:true},
    productStatus:{type:Boolean, required:true},
    unitValue:{type:Number, required:true},
    createdDate:{type:Date, default:Date.now}
    
});

const product = mongoose.model('product',productSchema);

module.exports = product