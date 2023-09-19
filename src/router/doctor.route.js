const express = require('express');
const CatchAsync = require('../helper/CatchAsync');
const Validator = require('../middleware/Validator.middleware');

const { DoctorValidator } = require('../validator/Doctor.Validator');
const { DoctorController } = require('../controller/doctor.Controller');
const auth = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/profile',auth , Validator(DoctorValidator.profile), CatchAsync(DoctorController.profile))
router.get('/all', CatchAsync(DoctorController.all))
router.patch('/active', Validator(DoctorValidator.active), CatchAsync(DoctorController.active))
router.patch('/inactive', Validator(DoctorValidator.inactive), CatchAsync(DoctorController.inactive))

module.exports = router;
