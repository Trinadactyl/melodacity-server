//const Treeize = require('treeize')
const xss = require('xss')

const UsersService = {
  getAllUsers(db) {
    return db
      .from('melodacity_users AS muser')
      .select(
        'muser.id',
        'muser.full_name',
        'muser.user_name',
        'muser.date_created',
      )
  },

// // ---What does all this do?
 
//   serializeUsers(users) {
//     //const UserTree = new Treeize()

//     // Some light hackiness to allow for the fact that `treeize`
//     // only accepts arrays of objects, and we want to use a single
//     // object.
//     //const UserData = UserTree.grow([ users ]).getData()[0]

//     const { user } = users
//     return {
//       id: users.id,
//       name: users.full_name,
//       user_name: users.user_name,
//       date_created: users.date_created
//     }
//   },

}

module.exports = UsersService
