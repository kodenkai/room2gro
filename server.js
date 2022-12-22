const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/",(req, res)=>{
  res.send("hello user");
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//app.use(express.json());
//app.use(express.static("public"));

// Routes go here

app.listen(process.env.PORT || 4000, ()=>console.log("server on " + process.env.PORT));