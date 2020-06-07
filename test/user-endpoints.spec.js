const { expect } = require('chai')
const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')
//const userRouter = require('../../users/user-router')

describe('User Endpoints', function() {
  let db

  const { testUsers } = helpers.makeFixtures()
  const testUser = testUsers[0]

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

  describe(`GET /users`, () => {
    context(`Given no users`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/users')
          .expect(200, [])
      })
    })

    context(`See all users`, () => {
      beforeEach('insert users', () => 
        helpers.seedUsers(
          db,
          testUsers,
        )
      )
      it(`responds with 200 and users`, () => {
        return supertest(app)
          .get('/users')
          .expect(200, testUsers)
      })
    })
  })

  describe(`GET /users/:id`, () => {
    context(`Given user id`, () => {
      beforeEach('insert user', () => 
        helpers.seedUsers(
          db,
          testUser
        )
      )
      it(`responds 200 and the user`, () => {
        return supertest(app)
          .get('/user/:id')
          .expect(200, testUser)
      })
    })
  })

//end of describe User Endpoints
})



