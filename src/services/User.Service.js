const User = require("../model/User.model");
const bcrypt = require('bcrypt');


const createUser = async (userData) => {
  if (await User.ifExist(userData.email)) {
    throw new Error("User already Exist")
  }
  const user = await User.create({
    ...userData,
    password: await bcrypt.hash(userData.password, 10)
  });
  return user.filterKey("password");
}


module.exports.userService = {
  createUser
}