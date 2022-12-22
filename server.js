// init project
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
const bcrypt = require('bcrypt');

const users = [];
app.use(bodyParser.urlencoded({ extended: true }));
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
  try {
    const hashedPassword = await bcrypt.hashed(req.body.password, 10);
    users.push({
      id: Date.now().toString()
    })
  } catch {
    
  }
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