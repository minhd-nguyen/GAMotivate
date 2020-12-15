const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    message: {
        type:String
    }, 
    postedBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
}, {
    timestamps:true
})

module.exports = mongoose.model('Post', postSchema)