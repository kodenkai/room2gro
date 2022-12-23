const localStrategy = require('passport-local').Strategy

function authentication

function initialize(passport) {
  passport.use(new localStrategy({usernaneField: 'email'}), authentication)
}