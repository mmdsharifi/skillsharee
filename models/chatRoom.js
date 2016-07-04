var mongoose = require('mongoose');

var ChatRoom = new mongoose.Schema({
    pagePost: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }],
    pageTitle: String,
    pageDescription: String,
    image: [{
      Kind: String,
      url: String
    }]
});

module.exports = mongoose.model("ChatRoom", ChatRoom);
