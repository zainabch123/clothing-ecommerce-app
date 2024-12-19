const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClientKnownRequestError } = require("@prisma/client");
const { registerUserDb, loginUserDb } = require("../domains/user");
const secret = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await registerUserDb(username, hashedPassword);
    const token = jwt.sign({ id: newUser.id }, secret);

    return res.status(201).json({ user: newUser, token: token });
  } catch (error) {
    console.log("Error", error);
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const foundUser = await loginUserDb(username);

    const validPassword = await bcrypt.compare(password, foundUser.password);

    if (!validPassword) {
      res.status(401).json({ Error: "Invalid password" });
    }

    const token = jwt.sign({ id: foundUser.id }, secret);

    return res.status(200).json({ user: foundUser, token });
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
