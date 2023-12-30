const User = require("../models/user.model");

/* Find All User code*/
async function findAll(req, res) {
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
}
