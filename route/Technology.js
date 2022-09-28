const express = require('express')
const techControl = require('../details/Technology')
const techRoute = express.Router()
techRoute.route("/Technology")
.get(techControl.apiController)
module.exports = techRoute


