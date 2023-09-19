const User = require("../model/User.model");
const Doctor = require("../model/Doctor.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const filterKey = require("../util/filterKey");
const { userType } = require("../config/userType");

// Data = email, password
const login = async (data) => {
  const { email, password } = data;
  let user = await User.ifExist(email);

  const isPasswordMatch = await bcrypt.compare(user.password, password);
  if (!!user && await bcrypt.compare(password, user.password)) {

    // Generatign token
    const token = jwt.sign({ user: user.id, email: user.email, user_type : userType.PATIENT }, process.env.TOKEN_KEY, {
      expiresIn: "2h"
    });

    user = user.filterKey('__v', 'password', 'user_type')
    user.token = token;
    return user;

  } else {
    throw Error("Wrong Credential")
  }

}

const DoctorLogin = async (email, password) => {
  const doctor = await Doctor.getDoctor(email);
  const isPasswordMatch = await bcrypt.compare(password, doctor.password);

  if (!!doctor && isPasswordMatch) {
    return {
      ...doctor.filterKey("password"),
      token: jwt.sign({ email, id: doctor._id, user_type : userType.DOCTOR }, process.env.TOKEN_KEY)
    };
  }
}

module.exports.AuthService = {
  login,
  DoctorLogin
}