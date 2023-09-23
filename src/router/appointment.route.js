const express = require('express');
const Validator = require('../middleware/Validator.middleware');
const auth = require('../middleware/auth.middleware');
const { userType } = require('../config/userType');
const { AppointmentValidator } = require('../validator/Appointment.Validator');
const CatchAsync = require('../helper/CatchAsync');
const { AppointmentController } = require('../controller/appointment.Controller');

const router = express.Router();

// Get the Available times of Spacifc Doctor on Particular Date.
router.get("/", auth(userType.PATIENT), Validator(AppointmentValidator.get), CatchAsync(AppointmentController.get))

// Create An Appointment, Take patient id, doctor id , date and time, return a token for getting status 
router.post("/")

// Edit time and Date of Particular Doctor
router.patch("/")

// Delete an Appointment
router.delete('/')




module.exports = router;