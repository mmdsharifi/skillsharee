var mongoose = require('mongoose');

var RoleSchema = new mongoose.Schema({
    name: String,
    accessPersmison: [{
      permisions: String
    }],
    isSystemicRole: Boolean,
    displayName: String
});

module.exports = mongoose.model("Role", RoleSchema);
