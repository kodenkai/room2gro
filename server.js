const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// Routes go here

app.listen(process.env.PORT || 3000);