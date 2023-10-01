const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: Date,
  time: Date
})


const AppointmentModel = mongoose.model("Appointment", appointmentSchema);

module.exports = AppointmentModel