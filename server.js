// init project
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('/passport-config.js');
initializePassport(passport);

const users = [];
// app.set('view engine', 'ejs');
app.engine('html', ejs.__express);
app.set('views', './views');
app.set('view engine', 'ejs');

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
      if (err) reject(err)
      resolve(hash)
    });
    })
    //const hashedPassword = await bcrypt.hashed();
    //console.log(hashedPassword);
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
app.post('/login', (req, res)=>{
  
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