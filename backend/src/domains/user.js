const prisma = require("../utils/database");

const registerUserDb = async(username, hashedPassword) => {
    return await prisma.user.create({
        data: {
            username: username,
            password: hashedPassword,
        }
    });

};


module.exports = {
    registerUserDb,
}
