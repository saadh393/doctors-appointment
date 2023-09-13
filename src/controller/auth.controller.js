const User = require("../model/User.model")
const { userService } = require("../services/User.Service")

const login = (req, res) => {
  res.json()
}
const registration = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.json(user)
}

module.exports.AuthController = { login, registration }