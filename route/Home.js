const express = require('express')
const homeControl = require('../details/Home')
const homeRoute = express.Router()
homeRoute.route("/Home")
.get(homeControl.apiController)
module.exports = homeRoute
