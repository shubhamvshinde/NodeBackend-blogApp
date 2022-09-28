const express = require('express')
const hollyControl = require('../details/Hollywood')
const hollyRoute = express.Router()
hollyRoute.route("/Hollywood")
.get(hollyControl.apiController)
module.exports = hollyRoute
