
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import './database';
import {UserController} from '../controllers/user';
import authController from '../controllers/auth';


let userController= new UserController();
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();



app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(passport.initialize());

router.get('/', (req, res) => {
  res.json({ message: 'wellcome here !' });
});

router.route('/user')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

router.route('/users/:user_id')
  .get(authController.isAuthenticated, userController.getUser)
  .put(authController.isAuthenticated, userController.putUser)
  .delete(authController.isAuthenticated, userController.deleteUser)

app.use('/api', router);
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
