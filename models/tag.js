var mongoose = require('mongoose');

var TagSchema = new mongoose.Schema({
    body: {
      type: String,
      required: true
    }
});

module.exports = mongoose.model("Tag", TagSchema);
