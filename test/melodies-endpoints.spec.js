const knex = require('knex')
const jwt = require('jsonwebtoken')
const app = ('../src/app')
const helpers = require('./test-helpers')

describe ('Melodies endpoints', function() {
  let db 

  const { testMelodies} = helpers.makeFixtures()
  const testMelody = testMelody[0]
  
  before('make knex instance', () => {
    db = knex({
      client:'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('cleanup', () => db('melodacity_melodies').truncate())

  afterEach('clean the table', () => db('melodacity_melodies').truncate())

  describe(`GET /melodies`, () => {
    beforeEach('insert melodies', () =>
      helpers.seedMelodies(
        db,
        testMelodies
      )
    )
    it(`responds 200 and all the melodies`, () => {
      return supertest(app)
        .get('/melodies')
        .expect(200, testMelodies)
    })
  })

  describe(`POST /melodies`, () => {
    beforeEach('insert melodies', () => 
      helpers.seedMelodies(
        db,
        testMelodies
      )
    )

    const requiredData = ['title, user_id, content']

    requiredData.forEach(data => {
      const saveMelodyAttempt = {
        title: testMelody.title,
        user_id: testMelody.user_id,
        content: testMelody.content,
      }

      it(`responds with 400 error when '${data}' is missing`, () => {
        delete requiredData[data]
        return supertest(app)
        .post('/melodies')
        .send(saveMelodyAttempt)
        .expect(400, {
          error: `Missing '${data}' in request body`,
        })
      })

      it(`Responds 200 when all data is sent in`, () => {
        const saveMelody = {
          title: testMelody.title,
          user_id: testMelody.user_id,
          content: testMelody.content,
        } 

        return supertest(app)
        .post(`/melodies`)
        .send(saveMelody)
        .expect(200)
      })
    })
  })

  describe(`GET /melodies/:user_id`, () => {
    context(`Given user id`, () => {
      beforeEach('insert melody', () => 
        helpers.seedMelodies(
          db,
          testMelody
        )
      )
      it(`responds 200 and the assciated melodies`, () => {
        return supertest(app)
        .get('/melodies/:user_id')
        .expect(200, testMelody)
      })
    })
  })

  describe(`DELETE /melodies/:user_id`, () => {
    context(`Given user id`, () => {
      beforeEach('insert melody', () => 
        helpers.seedMelodies(
          db,
          testMelody
        )
      )
      it(`responds 201`, () => {
        return supertest(app)
        .delete('/melody/:user_id')
        .expect(201)
      })
    })
  })

//end of describe Melodies endpoints
})