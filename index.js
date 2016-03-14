var express = require('express');
var app = express();

app.get('/hello-world', function (req, res) {
  res.send('hello world!');
});

app.listen(3000, function () {
  console.log('listening at port 3000!');
});