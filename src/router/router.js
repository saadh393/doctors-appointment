const express = require("express");
const router = express.Router();

router.use("/auth", require('./auth.route'))
router.use("/doctor", require('./doctor.route'))
router.use("/appointment", require('./appointment.route'))


module.exports = router; 