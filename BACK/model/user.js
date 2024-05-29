// for signup and login

const mongoose=require('mongoose');

// create schema
const schema=mongoose.Schema({
name:String,
email:String,
address:String,
username:String,
password:String
// isAdmin: {
//     type: Boolean,
//     default: false // Default value for isAdmin
//   }

})

// map to collection

const userModel=mongoose.model('user',schema);
module.exports=userModel;