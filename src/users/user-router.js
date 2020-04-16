const express = require('express')
const UsersService = require('./user-service')

const usersRouter = express.Router()

usersRouter
  .route('/')
  .get((req, res, next) => {
    UsersService.getAllUsers(req.app.get('db'))
      .then(users => {
        res.json(users)
      })
      .catch(next)
  })

  //why does this fn work while above doesn't??????
  // app.get('/users', (req, res, next) => {
  //   const knexInstance = req.app.get('db')
  //   UsersService.getAllUsers(knexInstance)
  //    .then(users => {
  //      res.json(users)
  //    })
  //    .catch(next)
  //  })

  module.exports = usersRouter