var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema =  new Schema({
    title: String,
    postedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

module.exports = mongoose.model('Post', postSchema);