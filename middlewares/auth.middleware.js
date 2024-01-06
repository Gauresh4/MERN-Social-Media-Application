const jwt = require("jsonwebtoken");

/* Verify Token function code start here */

exports.verifyToken = async (req, res, next) => {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(400).send({
      msg: "Invalid Authentication",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req._id = decoded._id;
    next();
  } catch (err) {
    return res.status(400).send({
      msg: "Invalid Token",
    });
  }
};
