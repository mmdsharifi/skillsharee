var mongoose = require('mongoose');

var Event = new mongoose.Schema({
    pagePost: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }],
    location: String,
    time: String
});

module.exports = mongoose.model("Event", TagSchema);
