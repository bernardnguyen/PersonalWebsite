var express = require('express');
var app = express();

// var edu = require('./edu/');
// var exp = require('./exp/');
// var proj = require('./proj/');
// var rand = require('./rand/');


/************** MIDDLEWARE ***************/

function logreq(req, res, next){
  console.log(req.method + req.url);
  next();
}

function sendData(req, res, next){
  if (req.url === '/education'){
    res.send(edu);
  } else if (req.url === '/experiences'){
    res.send(exp);
  } else if (req.url === '/projects'){
    res.send(proj);
  } else if (req.url === '/random'){
    res.send(rand);
  }
}

/************* DEFINE ROUTES *************/

// app.get('/education', logreq, sendData);
// app.get('/experiences', logreq, sendData);
// app.get('/projects', logreq, sendData);
// app.get('/random', logreq, sendData);

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