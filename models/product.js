var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    color: {
        type: Schema.Types.ObjectId,
        ref: 'Color'
    }
})

module.exports = mongoose.model('Product', productSchema)