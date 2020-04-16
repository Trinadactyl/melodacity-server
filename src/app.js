require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/user-router')
const UsersService = require('./users/user-service')

const app = express();
//const router = express.Router(); ????

const morganOption = (process.env.NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

// //this should be defined in user-router
// app.get('/users', (req, res, next) => {
//  const knexInstance = req.app.get('db')
//  UsersService.getAllUsers(knexInstance)
//   .then(users => {
//     res.json(users)
//   })
//   .catch(next)
// })

console.log(usersRouter)
app.use('/users', usersRouter)

app.get('/', (req, res) => {
  res.send('Hello, world!')
});

app.use(function errorHandler(error, req, res, next) {
  let response
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error'}}
  } else {
    console.error(error)
    response = { message: error.message, error }
  }
  res.status(500).json(response)
});


module.exports = app