var mongoose = require('mongoose');

var LikeSchema = new mongoose.Schema({
    likeBy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    score: Number
});

module.exports = mongoose.model("Like", LikeSchema);
