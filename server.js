var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = require("./app/data/friends");

var htmlRoutes = require("./app/routing/htmlRoutes")(app, path);





app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });
  