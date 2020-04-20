const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  return [
    {
      id: 1,
      user_name: 'test-user-1',
      full_name: 'Test user 1',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 2,
      user_name: 'test-user-2',
      full_name: 'Test user 2',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 3,
      user_name: 'test-user-3',
      full_name: 'Test user 3',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 4,
      user_name: 'test-user-4',
      full_name: 'Test user 4',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
  ]
}

function makeMelodiesArray(users) {
  return [
    {
      id: 1,
      title: 'First test melody!',
      user_id: users[0].id,
      date_created: '2029-01-22T16:28:32.615Z',
      content: 'do re mi fa so la ti da',
    },
    {
      id: 2,
      title: 'Second test melody!',
      user_id: users[1].id,
      date_created: '2029-01-22T16:28:32.615Z',
      content: 'do re mi fa so la ti da',
    },
    {
      id: 3,
      title: 'Third test melody!',
      user_id: users[2].id,
      date_created: '2029-01-22T16:28:32.615Z',
      content: 'do re mi fa so la ti da',
    },
    {
      id: 4,
      title: 'Fourth test melody!',
      user_id: users[3].id,
      date_created: '2029-01-22T16:28:32.615Z',
      content: 'do re mi fa so la ti da',
    },
  ]
}

function makeFixtures() {
  const testUsers = makeUsersArray()
  const testMelodies = makeMelodiesArray(testUsers)
  return { testUsers, testMelodies }
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.into('melodacity_users').insert(preppedUsers)
    .then(() =>
      // update the auto sequence to stay in sync
      db.raw(
        `SELECT setval('melodacity_users_id_seq', ?)`,
        [users[users.length - 1].id],
      )
    )
}

function seedMelodies(db, users, melodies =[]) {
  return db.transaction(async (trx) => {
    await seedUsers(trx, users);
    await trx.into("melodacity_melodies").insert(melodies);
    await trx.raw(`SELECT setval('melodacity_melodies_id_seq' , ?)`, [
      melodies[melodies.length - 1].id,
    ]);
  });
}

module.exports = {
  makeUsersArray,
  makeMelodiesArray,
  makeFixtures,
  seedUsers,
  seedMelodies,
}