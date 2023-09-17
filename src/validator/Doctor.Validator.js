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

module.exports.DoctorValidator = {
  profile,
  active,
  inactive
}