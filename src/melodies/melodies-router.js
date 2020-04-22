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
  .post('/melodies', jsonBodyParser, (req,res,next                                                                                                                                                                                                                                                                                ))

  module.exports = melodiesRouter