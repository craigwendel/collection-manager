const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/90s')

const filmSchema = new mongoose.Schema({
  name: {type: String, required: true},
  actors: [{
    mainActor: {type: String},
    supportingActor: {type: String}
  }],
  imageURL: {type: String, required: true},
  year: {type: Number, required: true, min: 1990, max: 1999},
  link: {type: String, required: true}
})

const Film = mongoose.model('Film', filmSchema)

module.exports = Film
