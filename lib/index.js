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

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'wellcome here !' });
});

app.use('/api', router);

app.listen(port);
console.log(`Server Running on port :${port}`);
