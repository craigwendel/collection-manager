const express = require('express')
const router = express.Router()
const Film = require('../models/Film')

router.get('/newfilm', function (req, res) {
  res.render('newfilm')
})

router.post('/newfilm', function (req, res) {
  const film = new Film()
  film.name = req.body.name
  film.actors.push({mainActor: req.body.mainActor, supportingActor: req.body.supportingActor})
  film.imageURL = req.body.imageURL
  film.year = req.body.year
  film.link = req.body.link
  film.save()
  .then(function (film) {
    console.log('This is the new film info')
    res.redirect('/')
  })
  .catch(function (validationError, films, actors) {
    res.render('newfilm', {
      films: films,
      actors: actors,
      validationError: validationError
    })
  })
})

router.get('/:id/edit', function (req, res){
  Film.findOne({'_id': req.params.id})
  .then(function (films, actors) {
    res.render('edit', {
      films: films,
      actors: actors
    })
  })
})

router.post('/:id', function (req,res) {
  Film.findOne({'_id': req.params.id})
  .then(function (film) {
    film.name = req.body.name
    film.actors.push({mainActor: req.body.mainActor, supportingActor: req.body.supportingActor})
    film.imageURL = req.body.imageURL
    film.year = req.body.year
    film.link = req.body.link
    film.save()
  .then(function (film) {
    console.log('This is the edited film info')
    res.redirect('/')
  })
  .catch(function (validationError, films, actors) {
    res.render('newfilm', {
      films: films,
      actors: actors,
      validationError: validationError
    })
  })
  })
})

router.post('/:id/delete', function (req, res) {
  Film.deleteOne({'_id': req.params.id})
  .then(function (film) {
    res.redirect('/')
  })
})

module.exports = router
