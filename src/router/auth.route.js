const express = require('express');
const CatchAsync = require('../helper/CatchAsync');
const { AuthController } = require('../controller/auth.controller');
const Validator = require('../middleware/Validator.middleware');
const { AuthValidator } = require('../validator/Auth.Validator');
const router = express.Router();


router.get('/registration', Validator(AuthValidator.registration), CatchAsync(AuthController.registration));
router.get('/login',Validator(AuthValidator.login),CatchAsync(AuthController.login));

module.exports = router