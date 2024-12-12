const router = require("express").Router();
const { registerUser } = require("../controllers/user");

//Register a new user:
router.post("/register", registerUser);

module.exports = router;
