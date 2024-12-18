const router = require("express").Router();
const { registerUser, loginUser } = require("../controllers/user");

//Register a new user:
router.post("/register", registerUser);

//Login a new user:
router.post("/login", loginUser);

module.exports = router;
