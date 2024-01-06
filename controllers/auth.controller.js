const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* Signup function code */
exports.signup = async (req, res) => {
  const hashedPass = bcrypt.hashSync(req.body.password, 10);

  const existingEmail = await User.findOne({
    email: req.body.email,
  });

  if (existingEmail) {
    return res.status(400).send({
      message: "This email already exists.",
    });
  }

  const existingUserName = await User.findOne({
    username: req.body.username,
  });

  if (existingUserName) {
    return res.status(400).send({
      message: "This username already exists.",
    });
  }

  if (req.body.password.length < 6) {
    return res.status(400).send({
      message: "Password must be at least 6 characters.",
    });
  }

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!emailRegex.test(req.body.email)) {
    return res.status(400).send({
      message: "Email format is incorrect",
    });
  }

  const userObj = {
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: hashedPass,
    gender: req.body.gender,
  };

  try {
    const user = await User.create(userObj);

    const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    user.password = "";

    res.header[("x-auth-token", token)].status(200).send({
      msg: "Register Success!",
      accesss_token: token,
      user: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

/*Login function code */
exports.login = async (req, res) => {
  const existingEmail = await User.findOne({ email: req.body.email });

  if (!existingEmail) {
    return res.status(400).send({
      message: "This email does not exist.",
    });
  }

  const user = await User.findOne({
    email: req.body.email,
  });

  //check the password
  const isValidPassword = bcrypt.compareSync(req.body.password, user.password);
  if (!isValidPassword) {
    return res.status(400).send({
      message: "Password is incorrect.",
    });
  }

  const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  user.password = "";
  res.status(200).send({
    msg: "Login Success!",
    accesss_token: token,
    user: user,
  });
};

/* logout function code  */
exports.logout = async (req, res) => {
  return res.status(200).send({
    msg: "Logged out!",
  });
};
