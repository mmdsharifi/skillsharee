import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

var UserSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: true,
      required: true
    },
    email : {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
});

UserSchema.pre('save', (callback) => {
  var user = this; // is undefined
  console.log(this);

  if(!user.isModified('password'))
    return callback();

  bcrypt.genSalt(5, (err, salt) => {
    if (err)
      return callback(err);

    bcrypt.hash(user.password, salt, null, (err,hash) => {
      if (err)
        return callback(err);
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = (password, cd) => {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cd(null, isMatch);

  });
};

module.exports = mongoose.model("User", UserSchema);
