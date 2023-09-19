const User = require("../model/User.model");
const Doctor = require("../model/Doctor.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const filterKey = require("../util/filterKey");

// Data = email, password
const login = async (data) => {
  const { email, password } = data;
  let user = await User.ifExist(email);


  const isPasswordMatch = await bcrypt.compare(user.password, password);


  if (!!user && await bcrypt.compare(password, user.password)) {

    // Generatign token
    const token = jwt.sign({ user: user.id, email: user.email }, process.env.TOKEN_KEY, {
      expiresIn: "2h"
    });

    user = user.filterKey('__v', 'password', 'user_type')
    user.token = token;
    return user;

  } else {
    throw Error("Wrong Credential")
  }

}

module.exports.AuthService = {
  login
}