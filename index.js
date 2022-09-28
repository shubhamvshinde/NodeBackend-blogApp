const express = require("express")
const bollyRoute = require("./route/Bollywood")
const fitRoute = require("./route/Fitness")
const foodRoute = require("./route/Food")
const homeRoute = require("./route/Home")
const hollyRoute = require("./route/Hollywood")
const techRoute = require("./route/Technology")
const cors = require("cors")
const app = express();

app.use(cors())
app.use("/api",bollyRoute)
app.use("/api",fitRoute)
app.use("/api",foodRoute)
app.use("/api",homeRoute)
app.use("/api",hollyRoute)
app.use("/api",techRoute)

app.listen(process.env.PORT||8000,()=>{
    console.log("App is working")
})