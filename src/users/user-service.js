//const Treeize = require('treeize')
//const xss = require('xss')

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
  
//end
}

module.exports = UsersService
