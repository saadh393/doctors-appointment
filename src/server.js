const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const path = require('path')
const app = express();

// Handling cors 
app.use(cors());

// Body Parser to Json 
app.use(express.json());

// Url Encoded bodies 
app.use(express.urlencoded({ extended: true }))

// Routing
app.use('/v1', require('./router/router'));


// Not Found 
app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: "Route Not Found"
  })
})

// Error handlers
app.use((err, req, res, next) => {
  res.status(400).json({
    status: 'Bad Request',
    message: err instanceof Array ? err[0].message : err + ""
  })
})

module.exports = app