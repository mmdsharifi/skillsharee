var mongoose = require('mongoose');

var PageSchema = new mongoose.Schema({
    pagePost: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }],
    userMember: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    userBlock: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    pageTitle: String,
    pageDescription: String,
    image: [{
      Kind: String,
     url: String
    }]
});

module.exports = mongoose.model("Page", PageSchema);
