const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctor_id: {
    type : mongoose.Schema.Types.ObjectId, 
    ref : "Doctor"
  }, 
  patient_id : {
    type : mongoose.Schema.Types.ObjectId, 
    ref : "User"
  }, 
  duration : Number, 
  time : Date
})