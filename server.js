const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

//middlewares
app.use(cors());

//database connection
const DB_URL = process.env.MONGODB_URL.replace(
  "<password>",
  process.env.MONGODB_PASSWORD
);
mongoose
  .connect(DB_URL)
  .then(() => console.log("Database connection successfull"));

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connecting to DataBase");
});

// db.once("open", () => {
//   console.log("Connected to DataBase");
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandle rejection , server is getting down...!");
});
