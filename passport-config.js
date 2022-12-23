const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail, getUserById) {
  const authentication = async (email, password, done) => {
    const user = getUserByEmail(email);
    if (user== null) {
      return done(null, false, {message: 'No user with that email'});
    }
    try {
      const compareResults = await new Promise((resolve, reject) => {
    bcrypt.compare(password,user.password, function(err, val) {
      if (err) reject(err)
      resolve(val)
    });
    })
      if (compareResults) {
        return done(null, user);
      } else {
        return done(null, false, {message: 'Incorrect password. Please try again.'});
      }
    } catch (e) {
      return done(e)
    }
  }
  passport.use(new localStrategy({usernaneField: 'email'}, authentication));
  
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id))
  });
}

module.exports = initialize;