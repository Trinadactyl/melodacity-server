const { expect } = require('chai')
const knex = require('knex')
const app = require('../src/app')
const userRouter = require('./users/user-router')


describe('User Endpoints', function() {
let db

before('make knex instance', () => {
  db = knex({
    client: 'pg',
    connection: process.env.TEST_DB_URL,
  })
})

after('disconnect from db', () => db.destroy())

before('clean the table', () => db('melodacity_users').truncate())

context('Given there are users in teh database', () => {
  const testUsers = [
    {
      id: 1,
      full_name: 'First test user',
      user_name: 'First'
    },
    {
      id: 2,
      full_name: 'Second test user',
      user_name: 'Second'
    },
    {
      id: 3,
      full_name: 'Third test user',
      user_name: 'Third'
    },
    {
      id: 4,
      full_name: 'Fourth test user',
      user_name: 'Fourth'
    }
  ]
})

})



