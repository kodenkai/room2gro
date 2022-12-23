if (process.env.NODE_ENV != 'production') {
  require('dotenv').config
}
// init project
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const initializePassport = require('./passport-config.js');
initializePassport(passport, 
                   email => users.find(user => user.email === email),
                  id => users.find(user => user.id === id));

const users = [];
// app.set('view engine', 'ejs');
app.engine('html', ejs.__express);
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/',(req, res)=>{
  res.render('index.ejs', {name:'kyle'})
});

app.get('/login',(req, res)=>{
  res.render('login.ejs')
});

app.get('/register',(req, res)=>{
  res.render('register.ejs')
});

app.post('/register', async (req, res)=>{
  console.log(req.body.password);
  try {
    const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      if (err) reject(err);
      resolve(hash)
    });
    })
    users.push({
      id: Date.now().toString(),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hashedPassword
    });
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
  console.log(users);
})

app.post('/login', passport.authenticate('local'), {
         successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
         })

//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());

/*app.post("/post", (req, res)=>{
  res.send({body:req.body});
});*/

//app.use(express.json());
//app.use(express.static("public"));

// Routes go here

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});