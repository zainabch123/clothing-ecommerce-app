const { registerUserDb} = require("../domains/user")

const registerUser = async (req, res) => {
    console.log("Hi There from controller")
try {

} catch (error) {
    console.log("Error", error);
}

};

module.exports = {
    registerUser
}