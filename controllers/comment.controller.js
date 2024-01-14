const Post = require("../models/post.model");
const Comment = require("../models/comment.model");
const User = require("../models/user.model");

exports.addComment = async (req, res) => {
  const post = await Post.findById(req.body.postId);
  const loggedInUser = await User.findById(req._id);

  if (!post) {
    return res.status(400).send({
      msg: "This Post does not exist.",
    });
  }
  let newData;
  if (req.body.reply != undefined) {
    const commentToBeReplied = await Comment.findById(req.body.reply);

    if (!commentToBeReplied) {
      return res.status(400).send({
        msg: "This comment does not exist.",
      });
    }

    newData = {
      content: req.body.content,
      likes: [],
      postId: req.body.postId,
      postUserId: req.body.postUserId,
      reply: req.body.reply,
    };

    const newComment = await Comment.create(newData);

    commentToBeReplied.reply.push(newComment);

    await commentToBeReplied.save();

    return res.status(200).send(loggedInUser);
  } else {
    newData = {
      content: req.body.content,
      likes: req.body.likes,
      postId: req.body.postId,
      postUserId: req.body.postUserId,
    };

    newData.user = loggedInUser;

    const newComment = await Comment.create(newData);

    return res.status(200).send(loggedInUser);
  }
};
