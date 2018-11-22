var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema =  new Schema({
    title: String,
    postedBy: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Comment', commentSchema);