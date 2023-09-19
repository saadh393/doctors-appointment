const express = require('express');
const CatchAsync = require('../helper/CatchAsync');
const Validator = require('../middleware/Validator.middleware');

const { DoctorValidator } = require('../validator/Doctor.Validator');
const { DoctorController } = require('../controller/doctor.Controller');
const auth = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/all', CatchAsync(DoctorController.all))
// router.get('/expertise', CatchAsync(DoctorController.all)) // Todo
router.get('/profile', auth , Validator(DoctorValidator.profile), CatchAsync(DoctorController.profile))

// Updating Doctors Info, Only Doctor Can Update his Data
router.patch('/profile', auth , Validator(DoctorValidator.update), CatchAsync(DoctorController.update));

router.patch('/active', Validator(DoctorValidator.active), CatchAsync(DoctorController.active))
router.patch('/inactive', Validator(DoctorValidator.inactive), CatchAsync(DoctorController.inactive))

module.exports = router;
