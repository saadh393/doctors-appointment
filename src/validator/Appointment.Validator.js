const Joi = require("joi")

const get = Joi.object({
  doctor_id: Joi.string().required(),
  date: Joi.date().required()
});

const create = Joi.object({
  doctor_id: Joi.string().required(),
  patient_id: Joi.string().required(),
  date: Joi.date().required(),
  time: Joi.date().required()
})

module.exports.AppointmentValidator = {
  get,
  create
}