const express = require('express')
const UsersService = require('./user-service')

const usersRouter = express.Router()
const jsonBodyParser = express.json()

usersRouter
  .route('/')
  .get((req, res, next) => {
    UsersService.getAllUsers(req.app.get('db'))
      .then(users => {
        res.json(users)
      })
      .catch(next)
  })
  .post('/', jsonBodyParser, (req, res) => {
    const { password } = req.body

    for (const field of ['full_name', 'user_name', 'password'])
      if(!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        })
      const passwordError = UsersService.validatePassword(password)

      if (passwordError)  
        return res.status(400).json({ error: passwordError }) 
        
      res.send('ok')
  })


  module.exports = usersRouter