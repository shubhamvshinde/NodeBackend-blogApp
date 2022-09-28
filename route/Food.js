const express = require('express')
const foodControl = require('../details/Food')
const foodRoute = express.Router()
foodRoute.route("/Food")
.get(foodControl.apiController)
module.exports = foodRoute
