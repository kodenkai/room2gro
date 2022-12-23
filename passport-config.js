const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');


function initialize(passport) {
  const authentication = (email, password, done) => {
    const user = getUserByEmail(email);
    if (user== null) {
      return done(null, false, {message: 'No user with that email'});
    }
    
    try {
      if (await bcrypt.compare(password, user.password)) {
        
      } else {
        return done(null, false, {message: 'No user with that email'});
      }
    } catch {
      
    }
  }
  passport.use(new localStrategy({usernaneField: 'email'}), authentication);
  
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
}