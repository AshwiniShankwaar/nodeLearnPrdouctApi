const mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost:27017/eproduct");
const productsch = new mongoose.Schema({
    Productname:String,
    ProductCatagory:String,
    ProductCompany:String,
    ProductPrice:Number
});
const productmodel = mongoose.model('product',productsch);
module.exports = productmodel;