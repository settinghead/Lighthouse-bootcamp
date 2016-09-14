'use strict';

var express = require("express");
var app = express();
app.set("view engine", "ejs");
var PORT = process.env.PORT || 8080; // default port 8080


var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) => {
  res.end("Hello!");
});

app.get("/urls", (req, res) => {
  // let templateVars = { urls: urlDatabase };

  var urlTable = [
    {name: 'penguine1', url: 'https://goo.gl/tX1jBu'},
    {name: 'penguine2', url: 'https://goo.gl/qtoZUU'},
    {name: 'penguine3', url: 'https://goo.gl/bPQRzS'},
    {name: 'wanna shorten your url?', url: 'https://goo.gl/'}
  ];

  res.render("urls_index", {
    urlTable: urlTable
  });
});

app.get("/urls/:id", (req, res) => {
  var templateVars = { shortURL: req.params.id };
  res.render("urls_show", templateVars);
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.end("<html><body>Hello <b>World</b></body></html>\n");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
