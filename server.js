var express = require('express');
var app = express();

/************* DEFINE ROUTES *************/

app.get('/education', function(req, res) {
  res.sendfile('./edu.html');
});

app.get('/experiences', function(req, res) {
  res.sendfile('./exp.html');
});

app.get('/projects', function(req, res) {
  res.sendfile('./proj.html');
});

app.get('/random', function(req, res) {
  res.sendfile('./rand.html');
});

app.use(express.static(__dirname + '/'));

/************ LISTEN ON PORT **************/

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on port ' + port);
});