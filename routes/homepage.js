const express = require('express')
const router = express.Router()
const Film = require('../models/Film')

router.get('/', function (req, res) {
  Film.find()
  .sort('year')
  .then(function (films, actors) {
    res.render('index', {
      films: films,
      actors: actors
    })
  })
})

module.exports = router
