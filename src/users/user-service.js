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
  validatePassword(password) {
    if (password.length < 8) {
      return 'Password must be longer than 8 characters'
    }
    if (password.length > 72) {
      return 'Password must be less that 72 characters'
    }
  }
  

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
