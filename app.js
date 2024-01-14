const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const commentRouter = require("./routes/comment.route");
const postRouter = require("./routes/post.route");
const notificationRouter = require("./routes/notification.route");

const axios = require("axios");

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    exposedHeaders: ["x-auth-token"], // Include x-auth-token in the list of exposed headers
    allowedHeaders: "Content-Type, Authorization, x-auth-token", // Include x-auth-token in the list of allowed headers
  })
);

let frontEndUrl;
if (process.env.NODE_ENV === "production") {
  frontEndUrl = process.env.FRONTEND_URL;
} else frontEndUrl = "http://localhost:3000";

app.use(
  cors({
    origin: frontEndUrl,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.json({ limit: "10mb" }));

app.use("/api/v1/user", authRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", commentRouter);
app.use("/api/v1", postRouter);
app.use("/api/v1", notificationRouter);

module.exports = app;
