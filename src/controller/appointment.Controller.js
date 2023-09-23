const { AppointmentService } = require("../services/Appointment.Service");

const get = async (req, res) => {
  const { date, doctor_id } = req.body;
  const user = req.headers.user;

  const response = AppointmentService.get({ date, doctor_id, user })

  res.json(response);
}


module.exports.AppointmentController = {
  get
}