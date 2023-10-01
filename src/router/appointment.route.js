/**
 * Express router for handling appointment related requests.
 * @module appointmentRoute
 */

const express = require('express');
const Validator = require('../middleware/Validator.middleware');
const auth = require('../middleware/auth.middleware');
const { userType } = require('../config/userType');
const { AppointmentValidator } = require('../validator/Appointment.Validator');
const CatchAsync = require('../helper/CatchAsync');
const { AppointmentController } = require('../controller/appointment.Controller');

const router = express.Router();

/**
 * Route for getting the available times of a specific doctor on a particular date.
 * @name get/
 * @function
 * @memberof module:appointmentRoute
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.body.doctor_id - The ID of the doctor
 * @param {string} req.body.date - The date for which the available times are requested
 * @returns {Object} - An object containing the available times for the doctor on the requested date
 */
router.get("/", auth(userType.PATIENT), Validator(AppointmentValidator.get), CatchAsync(AppointmentController.get))

/**
 * Route for creating a new appointment.
 * @name post/
 * @function
 * @memberof module:appointmentRoute
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.body.doctor_id - The ID of the doctor
 * @param {string} req.body.date - The date for the appointment
 * @param {string} req.body.time - The time for the appointment
 * @returns {Object} - An object containing a token for getting the status of the appointment
 */
router.post("/", auth(userType.PATIENT), Validator(AppointmentValidator.create), CatchAsync(AppointmentController.create))

/**
 * Route for editing the time and date of a particular appointment.
 * @name patch/
 * @function
 * @memberof module:appointmentRoute
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.body.appointmentId - The ID of the appointment to be edited
 * @param {string} req.body.date - The new date for the appointment
 * @param {string} req.body.time - The new time for the appointment
 * @returns {Object} - An object containing the updated appointment details
 */
router.patch("/", auth(userType.DOCTOR), Validator(AppointmentValidator.edit), CatchAsync(AppointmentController.edit))

/**
 * Route for deleting an appointment.
 * @name delete/
 * @function
 * @memberof module:appointmentRoute
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.body.appointmentId - The ID of the appointment to be deleted
 * @returns {Object} - An object containing a message indicating the success of the deletion
 */
router.delete('/', auth(userType.PATIENT), Validator(AppointmentValidator.delete), CatchAsync(AppointmentController.delete))

module.exports = router;