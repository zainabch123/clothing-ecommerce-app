const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClientKnownRequestError } = require("@prisma/client");
const { registerUserDb } = require("../domains/user");
const secret = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await registerUserDb(username, hashedPassword);
    const token = jwt.sign({id: newUser.id}, secret)

    return res.status(201).json({ user: newUser, token: token});
    
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = {
  registerUser,
};
