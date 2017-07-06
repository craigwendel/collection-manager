const express = require("express")
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const app = express()
const homepageRoutes = require("./routes/homepage")
const filmsRoutes = require("./routes/films")
const mongoose = require('mongoose')

app.engine('mustache', mustache())
app.set("view engine", 'mustache')
app.set("layout", 'layout')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: false}))
mongoose.Promise = require('bluebird')
mongoose.createConnection('mongodb://localhost:27017/90s')

app.use(homepageRoutes)
app.use(filmsRoutes)

app.listen(3000, function () {
  console.log("90's movies launched!")
})
