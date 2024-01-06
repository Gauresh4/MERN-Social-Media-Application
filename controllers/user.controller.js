const User = require("../models/user.model");

/* Find All User code*/
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
