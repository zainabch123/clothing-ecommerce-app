const prisma = require("../utils/database");

const registerUserDb = async (username, hashedPassword) => {
  return await prisma.user.create({
    data: {
      username: username,
      password: hashedPassword,
    },
  });
};

const loginUserDb = async (username) => {
  return await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
};

module.exports = {
  registerUserDb,
  loginUserDb,
};
