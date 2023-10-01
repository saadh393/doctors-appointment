const { WorkingPeriodValidate } = require("../helper/WorkingPeriodValidate");
const { AppointmentService } = require("../services/Appointment.Service");
const { DoctorService } = require("../services/Doctor.service");

const get = async (req, res) => {
  const { date, doctor_id } = req.body;
  const user = req.headers.user;

  // Validate Date
  // -  Past and Future Date Checkup
  // - Date Day Cross Check to see if Sunday == date's Day

  const doctor = await DoctorService.getDoctorById(doctor_id);
  const isDateValidate = WorkingPeriodValidate(date, doctor[0]);

  // Getting Appointment
  const response = AppointmentService.get({ date, doctor_id, user })

  res.json(response);
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