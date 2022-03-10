const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ecomm");
const registrationsch = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    age:Boolean,
    ready:Boolean
});
const registrationmodel = mongoose.model('registration',registrationsch);
module.exports = registrationmodel;