const express = require("express")
const cors = require("cors")

const logger = require("./logger")

const countryRouter = require("./routers/countries")
const peopleRouter = require("./routers/people")

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger) // can also do app.use("/", logger) means on all routes execute logger
//app.method =  only runs if the first argument strictly, .use does everything after /

app.use("/countries", countryRouter)
app.use("/people", peopleRouter)

module.exports = app