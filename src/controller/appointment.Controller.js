const { AppointmentSlots } = require("../helper/AppointmentSlots");
const { WorkingPeriodValidate } = require("../helper/WorkingPeriodValidate");
const { AppointmentService } = require("../services/Appointment.Service");
const { DoctorService } = require("../services/Doctor.service");

const get = async (req, res) => {
  const { date, doctor_id } = req.body;
  const user = req.headers.user;

  const doctor = await DoctorService.getDoctorById(doctor_id);
  WorkingPeriodValidate(date, doctor[0]);

  // Getting Appointment
  const appointments = AppointmentService.get({ date, doctor_id, user });

  const slots = AppointmentSlots(doctor[0].working_period, date, appointments)

  res.json({
    id: "random Id will",
    date,
    doctor_id,
    slots
  });
}

const create = async (req, res) => {
  const body = req.body;
  const patient = req.headers.user
  const response = await AppointmentService.create({ ...body, ...patient });

  res.json(response)
}


module.exports.AppointmentController = {
  get,
  create
}