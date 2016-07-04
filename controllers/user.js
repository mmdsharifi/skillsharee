import User from '../models/user';

let user = new User();

export class UserController {


  postUsers(req, res) {
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.image.concat(req.body.image);
    user.friends.concat(req.body.friends);
    user.userPosts.concat(req.body.userPosts);
    user.userRole.concat(req.body.userRole);

    user.save((err) => {
      if (err)
        res.send(err);

      res.json({ message: 'User added to the db', data: user });
    });
  }

  getUsers(req, res) {
    User.find((err, users) => {
      if ( err)
        res.send(err);

      res.json(users);
    });
  }

  getUser(req, res) {
    User.findById(req.params.user_id, (err, user) => {
      if (err)
        res.send(err);

      res.json(user);
    });
  }

  putUser(req, res) {
    User.findById(req.params.user_id, (err, beer) => {
      if (err)
        res.send(err);

        user.name = (req.body.name != '') ? req.body.name : user.name;
        user.email = (req.body.email != '') ? req.body.email : user.email;
        user.password = (req.body.password != '') ? req.body.password : user.password;
        if (req.body.image != null) {
          user.image.concat(req.body.image);
        }
        if (req.body.friends != null) {
          user.friends.concat(req.body.friends);
        }
        if (req.body.userPosts != null) {
          user.userPosts.concat(req.body.userPosts);
        }
        if (req.body.userRole != null) {
          user.userRole.concat(req.body.userRole);
        }

        user.save((err) => {
          if (err) {
            res.send(err);
          }

          res.json({ message: 'User Updated in DB', data: user });
        });
      });
    }

    deleteUser(req, res) {
      User.findByIdAndRemove(req.params.user_id, (err) => {
        if (err)
          res.send(err);

        res.json({ message: 'User Removed from DB', data: user });
      });
    }
}
