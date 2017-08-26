var express = require('express');
var app = express();
var router = express.Router();


var edu = require('./edu');
var exp = require('./exp');
var proj = require('./proj');
var rand = require('./rand');


/************** MIDDLEWARE ***************/

// function logreq(req, res, next){
//   console.log(req.method + req.url);
//   next();
// }

// function sendData(req, res, next){
//   if (req.url === '/education'){
//     res.send(edu);
//   } else if (req.url === '/experiences'){
//     res.send(exp);
//   } else if (req.url === '/projects'){
//     res.send(proj);
//   } else if (req.url === '/random'){
//     res.send(rand);
//   }
// }

/************* DEFINE ROUTES *************/

// app.get('/education', logreq, sendData);
// app.get('/experiences', logreq, sendData);
// app.get('/projects', logreq, sendData);
// app.get('/random', logreq, sendData);

// app.use(express.static(__dirname + '/'));

app.use('/education', edu);
app.use('/experiences', exp);
app.use('/projects', proj);
app.use('/random', rand);

/************ LISTEN ON PORT **************/

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on port ' + port);
});