const { expect } = require('chai')
const knex = require('knex')
const app = require('../src/app')
const userRouter = require('./users/user-router')
const helpers = require('./test-helpers')


describe('User Endpoints', function() {
  let db

  const { testUsers } = helpers.makeFixtures()

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('clean the table', () => db('melodacity_users').truncate())

  afterEach('clean the table', () => db('melodacity_users').truncate())

  describe(`POST /users`, () => {
    context(`User Validation`, () => {
      beforeEach('insert users', () => 
        helpers.seedUsers(
          db,
          testUsers,
        )
      )
      const requiredFields = ['full_name', 'user_name', 'password']

      requiredFields.forEach(field => {
        const registerAttemptBody = {
          full_name: 'test full_name',
          user_name: 'test user_name',
          password: 'test password'
        }

        it(`responds with 400 required error when ${field} is missing`, () => {
          delete registerAttemptBody[field]

          return supertest(app)
            .post('/users')
            .send(registerAttemptBody)
            .expect(400, {
              error: `Missing '${field}' in request body`,
            })
        })
      })

      it(`responds 400 'Password must be longer that 8 characters' when empty password`, () => {
        const userShortPassword = {
          full_name: 'test full_name',
          user_name: 'test user_name',
          password: '1234567',
        }
        return supertest(app)
          .post('/users')
          .send(userShortPassword)
          .expect(400, { error: `Password must be longer than 8 characters`})
      })

      it(`responds 400 'Password must be less thhan 72 characters' when long password`, () => {
        const userLongPassword = {
          full_name: 'test full_name',
          user_name: 'test user_name',
          password: '*'.repeat(73),
        }
        return supertest(app)
          .post('/users')
          .send(userLongPassword)
          .expect(400, { error: `Password must be less that 72 characters` })
      })

    })
  })




//end of describe User Endpoints
})



