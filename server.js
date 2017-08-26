var express = require('express');
var app = express();

var edu = require('./edu/edu.js');
var exp = require('./exp/exp.js');
var proj = require('./proj/proj.js');
var rand = require('./rand/rand.js');


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

app.get('/education', logreq, sendData);
app.get('/experiences', logreq, sendData);
app.get('/projects', logreq, sendData);
app.get('/random', logreq, sendData);

//app.use(express.static(__dirname + '/'));

app.use(express.static(path.join(__dirname, 'public'),{index:false,extensions:['html']}));



/************ LISTEN ON PORT **************/

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on port ' + port);
});