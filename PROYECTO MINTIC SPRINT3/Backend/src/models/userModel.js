const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId:{type:String, required:true, unique:true},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String, required:true},
    userRole:{type:String, required:true},
    userStatus:{type:String, required:true},
    createdDate:{type:Date, default:Date.now}
    
});

const user = mongoose.model('user',userSchema);

module.exports = user
