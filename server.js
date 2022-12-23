if (process.env.NODE_ENV !== 'production') {
  require('dotenv').parse
}
// init project
const express = require('express')
//const ejs = require('ejs')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const listRouter = require('./routes/lists')

/*const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const initializePassport = require('./passport-config.js');
initializePassport(passport, 
                   email => users.find(user => user.email === email),
                  id => users.find(user => user.id === id));

const users = [];*/
app.set('view engine', 'ejs');
//app.engine('html', ejs.__express)
app.set('views', __dirname +  '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
mongoose.set('strictQuery', false)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', ()=> console.log('Connected to Mongoose'))
/*app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({extended: false}));
*/

app.use('/', indexRouter);
app.use('/lists', listRouter);

/*app.get('/login',(req, res)=>{
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

app.post('/login', function(req, res) {
  debugger;
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  });
});

/*app.post('/login', passport.authenticate('local'), {
         successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
         })*/

//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());

/*app.post("/post", (req, res)=>{
  res.send({body:req.body});
});*/

//app.use(express.json());

// Routes go here

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});