const express = require('express');
const CatchAsync = require('../helper/CatchAsync');
const Validator = require('../middleware/Validator.middleware');

const { DoctorValidator } = require('../validator/Doctor.Validator');
const { DoctorController } = require('../controller/doctor.Controller');
const auth = require('../middleware/auth.middleware');
const { userType } = require('../config/userType');

const router = express.Router();

router.get('/all', CatchAsync(DoctorController.all))

router.get('/expertise', auth(userType.PATIENT), CatchAsync(DoctorController.expertisedDoctor)) // Todo
router.get('/profile', auth(userType.DOCTOR), CatchAsync(DoctorController.profile))

// Updating Doctors Info, Only Doctor Can Update his Data
router.patch('/profile', auth(userType.DOCTOR), Validator(DoctorValidator.update), CatchAsync(DoctorController.update));

router.patch('/active', auth(userType.ADMIN), Validator(DoctorValidator.active), CatchAsync(DoctorController.active))
router.patch('/inactive', auth(userType.ADMIN), Validator(DoctorValidator.inactive), CatchAsync(DoctorController.inactive))

module.exports = router;
