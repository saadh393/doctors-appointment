const User = require("../model/User.model")

const createUser = async (userData) => {
  if (await User.ifExist(userData.email)) {
    throw new Error("User already Exist")
  }
  return await User.create(userData);
}


module.exports.userService = {
  createUser
}