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
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
          }
        }
    },
    password: {
      type: String,
      required: true
    },
    image: [{
      type: String,
      url: String
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

// UserSchema.pre('save', (callback) => {
//   var user = this; // is undefined
//   console.log(this);
//
//   if(!user.isModified('password'))
//     return callback();
//
//   bcrypt.genSalt(5, (err, salt) => {
//     if (err)
//       return callback(err);
//
//     bcrypt.hash(user.password, salt, null, (err,hash) => {
//       if (err)
//         return callback(err);
//       user.password = hash;
//       callback();
//     });
//   });
// });

UserSchema.methods.verifyPassword = (password, cd) => {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cd(null, isMatch);

  });
};

module.exports = mongoose.model("User", UserSchema);
