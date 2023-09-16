const express = require("express");
const router = express.Router();

router.use("/auth", require('./auth.route'))
router.use("/", require('./view.route'))


module.exports = router; 