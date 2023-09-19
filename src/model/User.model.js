const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
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
    require: true,
    select : false,
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

/**
 * Check if user exist in Database
 * @param {string} email - The user's email
 * @returns {Promise<boolean>}
 */
userSchema.statics.ifExist = async function (email) {
  const user = await this.findOne({ email });
  return user;
}

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return await bcrypt.compare(password, user.password);
}

userSchema.methods.filterKey = function (...args) {
  const userObject = this.toObject();
  args.forEach(arg => {
    delete userObject[arg];
  });
  return userObject;
}


/**
 * @typedef User
 * **/
const User = mongoose.model('User', userSchema)

module.exports = User;