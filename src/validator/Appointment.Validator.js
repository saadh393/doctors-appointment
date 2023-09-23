const Joi = require("joi")

const get = Joi.object({
  doctor_id : Joi.string().required(),
  date : Joi.date().required()
})

module.exports.AppointmentValidator = {
  get
}