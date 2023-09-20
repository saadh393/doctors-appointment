const express = require('express');
const CatchAsync = require('../helper/CatchAsync');
const { AuthController } = require('../controller/auth.controller');
const Validator = require('../middleware/Validator.middleware');
const { AuthValidator } = require('../validator/Auth.Validator');
const router = express.Router();


router.post('/register', Validator(AuthValidator.registration), CatchAsync(AuthController.registration));
// This login is only for Patients
router.post('/login', Validator(AuthValidator.login) ,CatchAsync(AuthController.login));

// This login for Doctor Only
router.post('/doctor/login',Validator(AuthValidator.login),CatchAsync(AuthController.doctorLogin));

module.exports = router