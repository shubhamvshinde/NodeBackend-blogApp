const express = require('express')
const fitControl = require('../details/Fitness')
const fitRoute = express.Router()
fitRoute.route("/Fitness")
.get(fitControl.apiController)
module.exports = fitRoute

