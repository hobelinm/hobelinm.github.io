var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('/'));

app.get('/', function (req, res) {
  res.sendFile('./index.html');
});

app.listen(3000, () => console.log('Listening on port 3000'));
