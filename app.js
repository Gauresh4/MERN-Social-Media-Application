const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const commentRouter = require("./routes/comment.route");
const postRouter = require("./routes/post.route");

app.use(express.json({ limit: "10mb" }));

app.options("*", cors());

app.use("/api/v1/user", authRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", commentRouter);
app.use("/api/v1", postRouter);

module.exports = app;
