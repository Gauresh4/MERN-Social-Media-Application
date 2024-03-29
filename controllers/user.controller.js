const User = require("../models/user.model");

/* Find All User*/
exports.findAll = async (req, res) => {
  // async function findAll(req, res) {
  const users = await User.find({});

  let userResponse = users.map((user) => {
    return {
      avatar: user.avatar,
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
    };
  });

  try {
    res.status(200).send({
      users: userResponse,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

/*Get User by User ID*/
exports.getUserByUserId = async (req, res) => {
  const user = await User.findById({
    _id: req.params.id,
  }).select("-password");

  try {
    if (!user) {
      return res.status(200).send({
        msg: `Cast to ObjectId failed for value \"${req.params.id}\" at path \"_id\" for model \"user\"`,
      });
    }

    return res.status(200).send({
      user: user,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

/*Update User*/
exports.updateUser = async (req, res) => {
  const user = await User.findById({ _id: req._id });

  try {
    user.avatar = req.body.avatar ? req.body.avatar : user.avatar;
    user.fullname = req.body.fullname ? req.body.fullname : user.fullname;
    user.mobile = req.body.mobile ? req.body.mobile : user.mobile;
    user.address = req.body.address ? req.body.address : user.address;
    user.story = req.body.story ? req.body.story : user.story;
    user.website = req.body.website ? req.body.website : user.website;
    user.gender = req.body.gender ? req.body.gender : user.gender;

    const updatedUser = await user.save();

    return res.status(200).send({
      msg: "Update Success",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

/*Follow User*/
exports.followUser = async (req, res) => {
  const loggedInUser = await User.findById({
    _id: req._id,
  });

  const userToFollow = await User.findById({
    _id: req.params.id,
  });

  if (!userToFollow) {
    return res.status(500).send({
      msg: `'Cast to ObjectId failed for value "${req.params.id}" at path "_id" for model "user"'`,
    });
  }

  try {
    if (loggedInUser.following.includes(userToFollow._id)) {
      console.log("hi");
      return res.status(200).send({
        msg: "You followed this user.",
      });
    }

    loggedInUser.following.push(userToFollow._id);
    await loggedInUser.save();
    userToFollow.followers.push(loggedInUser._id);
    await userToFollow.save();

    return res.status(200).send({
      newUser: userToFollow,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

/*Unfollow User*/
exports.unfollowUser = async (req, res) => {
  const loggedInUser = await User.findById({
    _id: req._id,
  });

  const userToUnfollow = await User.findById({
    _id: req.params.id,
  });

  if (!userToUnfollow) {
    return res.status(500).send({
      msg: `'Cast to ObjectId failed for value "${req.params.id}" at path "_id" for model "user"'`,
    });
  }

  try {
    if (!loggedInUser.following.includes(userToUnfollow._id)) {
      return res.status(200).send({
        msg: "You have already unfollowed this user",
      });
    }

    loggedInUser.following = loggedInUser.following.filter((user) => {
      return user._id != req.params.id;
    });

    await loggedInUser.save();

    userToUnfollow.followers = userToUnfollow.followers.filter((user) => {
      return user._id.toString() !== req._id.toString();
    });

    await userToUnfollow.save();

    return res.status(200).send({
      newUser: userToUnfollow,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.suggestionsUser = async (req, res) => {
  try {
    const currentUserId = req._id;
    const currentUser = await User.findOne(
      { _id: currentUserId },
      { following: true }
    );

    const suggestionUsers = await User.find(
      {
        _id: { $in: currentUser.following },
      },
      {
        following: true,
        followers: true,
      }
    );

    let suggestionUserIds = [];
    suggestionUsers.forEach((suggestionUser) => {
      suggestionUserIds = [
        ...suggestionUserIds,
        ...suggestionUser.followers,
        ...suggestionUser.following,
      ];
    });

    // remove duplicate ids
    suggestionUserIds = new Set(suggestionUserIds);
    suggestionUserIds = Array.from(suggestionUserIds);

    const users = await User.find({ _id: { $in: suggestionUserIds } });
    return res.status(200).json({
      users,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
