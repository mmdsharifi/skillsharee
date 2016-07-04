var mongoose = require('mongoose');

var ChatRoom = new mongoose.Schema({
    pagePost: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }],
    pageTitle: String,
    pageDescription: String,
    image: [{
      Kind, URL
    }]
});

module.exports = mongoose.model("ChatRoom", TagSchema);
