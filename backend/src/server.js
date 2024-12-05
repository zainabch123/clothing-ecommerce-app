//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");
const prisma = require("./database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

//Create endpoints/routes here:
app.get("/", function (req, res) {
  // res.send("Hello world")
  res.json({
    message: "Hello world!",
  });
});

//Export our app so other files can run it
module.exports = app;
