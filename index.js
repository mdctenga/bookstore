var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello world!');
});

app.get('/yo', function(req, res) {
  res.send('YO!');
});

app.listen(3000, function () {
  console.log('listening at port 3000!');
});