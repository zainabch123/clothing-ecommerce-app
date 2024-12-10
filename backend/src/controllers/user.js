const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClientKnownRequestError } = require("@prisma/client");
const { registerUserDb} = require("../domains/user")

const registerUser = async (req, res) => {
    const {username, password} = req.body;
    try {

} catch (error) {
    console.log("Error", error);
}

};

module.exports = {
    registerUser
}