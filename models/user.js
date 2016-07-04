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
      required: true,
      validate: {
          validator: function(v) {
            return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(v);
          }
          // from : http://emailregex.com/ --- Email Address Regular Expression That 99.99% Works.
    },
    password: {
      type: String,
      required: true
    },
    image: [{
      Kind,
      URL
    }],
    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    userScore: {
      type: Number
    },
    userPosts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }],
    userRole: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role'
    }]
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
