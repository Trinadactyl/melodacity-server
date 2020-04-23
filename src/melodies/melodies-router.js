const express = require('express')
const MelodiesService = require('./melodies-service')

const melodiesRouter = express.Router()
const jsonBodyParser = express.json()

melodiesRouter
  .route('/')
  .get((req,res, next) => {
    MelodiesService.getAllMelodies(req.app.get('db'))
      .then(melodies => {
        res.json(melodies)
      })
      .catch(next)
  })
  .post(jsonBodyParser, (req,res,next) => {
    ///const { title, key, progression, melody, user_id } = req.body
    //const newMelody = { title, content, user_id }

    MelodiesService.insertMelody(
      req.app.get('db'),
      req.body
    )
    .then(melody => {
      res
        .status(201)
        .location(`/melodies`)
        .json(melody)
    })
    .catch(next)
  })                                                                

  module.exports = melodiesRouter