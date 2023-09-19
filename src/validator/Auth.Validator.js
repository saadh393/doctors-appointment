const Joi = require("joi");
const { userType } = require("../config/userType");

const registration = Joi.object({
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  repeat_password: Joi.ref('password'),
  date_of_birth: Joi.date().required(),
  email: Joi.string().email().required(),
  user_type: Joi.string().valid(userType.DOCTOR, userType.PATIENT)
});

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

module.exports.AuthValidator = { registration, login } 