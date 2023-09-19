const User = require("../model/User.model");
const { AuthService } = require("../services/Auth.Service");
const { doctorService } = require("../services/Doctor.service")
const { userService } = require("../services/User.Service")

const login = async (req, res) => {
  const data = req.body;
  const user = await AuthService.login(data);

  res.json(user)
}
const registration = async (req, res) => {
  if (req.body.user_type === 'doctor') {
    const doctor = await doctorService.createDoctor(req.body);
    res.json(doctor)
  } else if (req.body.user_type === 'patient') {
    const user = await userService.createUser(req.body);
    res.json(user)
  } else {
    res.json('user type not found')
  }
}

module.exports.AuthController = { login, registration } 