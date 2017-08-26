var express = require('express');
var app = express();
var edu = require('./edu.js');
var exp = require('./exp.js');


/************** MIDDLEWARE ***************/

function logreq(req, res, next){
  console.log(req.method + req.url);
  next();
}

function sendData(req, res, next){
  if (req.url === '/education'){
      res.send(edu);
  } else if (req.url === '/experience'){
      res.send(exp);
  }
}

/************* DEFINE ROUTES *************/

app.get('/education', logreq, sendData);
app.get('/experience', logreq, sendData);

app.use(express.static(__dirname + '/'));


/************ LISTEN ON PORT **************/

var port = process.env.PORT;

app.listen(port, function() {
  console.log('listening on port ' + port);
});