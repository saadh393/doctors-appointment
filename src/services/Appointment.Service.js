const AppointmentModel = require("../model/Appointment.model")

const get = async (data) => {
  const { doctor_id } = data;
  const appointments = await AppointmentModel.find({ doctor_id });

  return appointments;


}

module.exports.AppointmentService = {
  get
}