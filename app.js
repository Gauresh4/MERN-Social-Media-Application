const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/auth.route");

app.use(express.json({ limit: "10mb" }));

app.options("*", cors());

app.use("/api/v1/user", userRouter);

module.exports = app;
