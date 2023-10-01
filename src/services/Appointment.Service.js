const AppointmentModel = require("../model/Appointment.model")

const get = async (data) => {
  const { doctor_id } = data;
  const appointments = await AppointmentModel.find({ doctor_id });
  return appointments;
}

const create = async (data) => {
  const { doctor_id,  date, time } = data;
  const appointments = await AppointmentModel.find({ doctor_id, date }).populate('doctor');
  const { working_period } = appointments.doctor;

  // Check if the time is in the working period of the doctor
  if (time < working_period.start || time > working_period.end) {
    throw new Error("This time is not in the working period of the doctor");
  }

  // Check if the time is already taken
  const isTaken = appointments.some((appointment) => {
    return appointment.time === time;
  });
}

module.exports.AppointmentService = {
  get,
  create
}