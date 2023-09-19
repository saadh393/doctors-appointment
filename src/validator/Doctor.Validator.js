const Joi = require("joi");

const profile = Joi.object({
  id: Joi.string().required()
})

const active = Joi.object({
  id: Joi.string().required()

})

const inactive = Joi.object({
  id: Joi.string().required()

})

const update = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  date_of_birth: Joi.string(),
  firstName: Joi.string(),
  expertise: Joi.array(),
  photo: Joi.string(),
  designation: Joi.string(),
  working_period: Joi.object({
    day: Joi.string().valid(
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ).required(),
    start: Joi.date().timestamp('javascript').required(),
    end: Joi.date().timestamp('javascript').required(),
  })

})

module.exports.DoctorValidator = {
  profile,
  active,
  inactive,
  update
}