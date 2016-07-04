

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import restify from 'express-restify-mongoose';
import './database';
import authController from '../controllers/auth';

import {UserController} from '../controllers/user';
import Tag from './tag';
import Role from './role';
import Post from './post';
import Page from './page';
import Like from './like';
import Event from './event';
import Comment from './comment';
import ChatRoom from './chatRoom';



let userController= new UserController();
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(passport.initialize());

var uri = restify.serve(router, Tag);
console.log(uri);
restify.serve(router, Role);
restify.serve(router, Post);
restify.serve(router, Page);
restify.serve(router, Like);
restify.serve(router, Event);
restify.serve(router, Comment);
restify.serve(router, ChatRoom);

router.get('/', (req, res) => {
  res.json({ message: 'wellcome here !' });
});

router.route('/api/user')
  .post(userController.postUsers)
  .get(userController.getUsers);

router.route('/api/users/:user_id')
  .get(userController.getUser)
  .put(userController.putUser)
  .delete(userController.deleteUser)

app.use(router);
app.listen(port);
console.log(`Server Running on port :${port}`);

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
