const User = require("../model/User.model")

const createUser = async (userData) => {
  if (await User.ifExist(userData.email)) {
    throw new Error("User already Exist")
  }
  const user = await User.create(userData);
  return user.filterKey("password");
}


module.exports.userService = {
  createUser
}