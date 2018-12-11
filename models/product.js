var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    code: String,
    name: String,
    img: String,
    quantity: Number,
    text: String,
    khohang: String
})

module.exports = mongoose.model('Product', productSchema)