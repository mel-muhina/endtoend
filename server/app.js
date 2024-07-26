const express = require("express")
const cors = require("cors")

const logger = require("./logger")

const app = express()
app.use(cors())
app.use(logger) // can also do app.use("/", logger) means on all routes execute logger
//app.method =  only runs if the first argument strictly, .use does everything after /
module.exports = app