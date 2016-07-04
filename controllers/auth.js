import passport from 'passport';
import {BasicStrategy} from 'passport-http';
import User from '../models/user';

passport.use(new BasicStrategy(
  (username, password, callback) => {
    User.findOne({ name: name }, (err, user) => {
      if (err)
        return callback(err);

      if (!user) {
        return callback(null, false);
      }

      user.verifyPassword(password, (err,isMatch) => {
        if (err)
          return callback(err);

        if (!isMatch) {
          return callback(null, false);
        }

        return callback(null, user);
      });
    });
  }
));

exports.isAuthenticated = passport.authenticate('basic', { session : false });
