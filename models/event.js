var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    pagePost: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }],
    location: String,
    time: String
});

module.exports = mongoose.model("Event", EventSchema);
