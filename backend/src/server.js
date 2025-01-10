require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.disable("x-powered-by");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersRouter = require("./routes/user");

//Create endpoints/routes here:
app.get("/", function (req, res) {
  // res.send("Hello world")
  res.json({
    message: "Hello World!",
  });
});

app.use("/users", usersRouter);

//Export our app so other files can run it
module.exports = app;
