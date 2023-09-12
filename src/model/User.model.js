const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  date_of_birth: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  user_type: {
    type: String,
    require: true
  }
})