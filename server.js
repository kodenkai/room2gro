const express = require("express");
const app = express();
//const bodyParser = require("body-parser");

app.set('view-engine', 'ejs')

app.get('/',(req, res)=>{
  res.render(index.ejs);
});

//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());

/*app.post("/post", (req, res)=>{
  res.send({body:req.body});
});*/

//app.use(express.json());
//app.use(express.static("public"));

// Routes go here

app.listen(process.env.PORT || 4000, ()=>console.log("server on " + process.env.PORT));