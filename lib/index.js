// require("./database");
//
// var User = require('./User'),
//     Post = require('./Post');
//
//
// var alex = new User({
//     name: "Alex"
// });
//
// var joe = new User({
//     name: "Joe"
// })
//
// alex.save();
// joe.save();
//
// var post = new Post({
//     title: "Hello World",
//     postedBy: alex._id,
//     comments: [{
//         text: "Nice post!",
//         postedBy: joe._id
//     }, {
//         text: "Thanks :)",
//         postedBy: alex._id
//     }]
// })
//
// post.save(function(error) {
//     if (!error) {
//         Post.find({})
//             .populate('postedBy')
//             .populate('comments.postedBy')
//             .exec(function(error, posts) {
//                 console.log(JSON.stringify(posts, null, "\t"))
//             })
//     }
// });



import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import './database';
import User from './user';


const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.json({ message: 'wellcome here !' });
});

let userRoute = router.route('/user');
let user = new User();

userRoute.post((req, res) => {


  console.log(req.body);

  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;

  user.save((err) => {
    if (err) {
      res.send(err);
    }

    res.json({ message: 'User added to the db', data: user });
  });
});

userRoute.get((req,res) => {
  User.find( (err, users) => {
    if (err)
      res.send(err);

    res.json(users);
  })
})

let usersRoute = router.route('/users/:user_id')

usersRoute.get((req, res) => {
  User.findById(req.params.user_id, (err , user) => {
    if (err)
      res.send(err);

    res.json(user);
  })
})

usersRoute.put((req,res) => {
  User.findById(req.params.user_id, (err, beer) => {
    if (err)
      res.send(err);

      user.name = (req.body.name != '') ? req.body.name : user.name;
      user.email = (req.body.email != '') ? req.body.email : user.email;
      user.password = (req.body.password != '') ? req.body.password : user.password;

      user.save((err) => {
        if (err) {
          res.send(err);
        }

        res.json({ message: 'User Updated in DB', data: user });
      });

  });
});

usersRoute.delete((req, res) => {
  User.findByIdAndRemove(req.params.user_id, (err) => {
    if (err)
      res.send(err);

    res.json({ message: 'User Removed from DB', data: user });
  })
})
app.use('/api', router);
app.listen(port);
console.log(`Server Running on port :${port}`);
