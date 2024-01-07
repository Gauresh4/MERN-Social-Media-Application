const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");

app.use(express.json({ limit: "10mb" }));

app.options("*", cors());

app.use("/api/v1/user", authRouter);
app.use("/api/v1", userRouter);

module.exports = app;
