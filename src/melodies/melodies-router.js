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
  melodiesRouter
    .route('/:user_id')
    .get((req, res, next) => {
      MelodiesService.getUserMelodies(req.app.get('db'),res.user_id)
        .then(melodies => {
          res.json(melodies)
        })
        .catch(next)
    })                                                                

  module.exports = melodiesRouter