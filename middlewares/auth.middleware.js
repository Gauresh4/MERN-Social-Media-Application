const jwt = require("jsonwebtoken");

/* Verify Token function */

exports.verifyToken = async (req, res, next) => {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(400).send({
      msg: "Invalid Authentication",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req._id = decoded.id;
    next();
  } catch (err) {
    return res.status(400).send({
      msg: "Invalid Token",
    });
  }
};
