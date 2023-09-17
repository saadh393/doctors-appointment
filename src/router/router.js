const express = require("express");
const router = express.Router();

router.use("/", require('./view.route'))
router.use("/auth", require('./auth.route'))
router.use("/doctor", require('./doctor.route'))


module.exports = router; 