var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    likeBy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    replayTo: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }],
    count: Number
});

module.exports = mongoose.model("Comment", TagSchema);
