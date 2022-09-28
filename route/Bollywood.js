const express = require('express')
const bollyControl = require('../details/Bollywood')
const bollyRoute = express.Router()
bollyRoute.route("/bollywood")
.get(bollyControl.apiController)
module.exports = bollyRoute

