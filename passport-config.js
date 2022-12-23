const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');


function initialize(passport, getUserByEmail) {
  const authentication = (email, password, done) => {
    const user = getUserByEmail(email);
    if (user== null) {
      return done(null, false, {message: 'No user with that email'});
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, {message: 'Incorrect password. Please try again.'});
      }
    } catch (e) {
      return done(e)
    }
  }
  passport.use(new localStrategy({usernaneField: 'email'}), authentication);
  
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
}

module.exports = initialize;