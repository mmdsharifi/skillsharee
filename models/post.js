var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    body: {
      type: String,
      minlength: 10,
      maxlength: 260
    },
    createAt: Date ,
    //article,post,share,comment,job advertisement
    postType:{
      required: true,
      type: String
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }],
    shares: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }],
    tags: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag'
    }],
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Like'
    }]
});

module.exports = mongoose.model("Post", PostSchema);
