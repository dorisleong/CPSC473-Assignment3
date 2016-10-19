var express = require('express'),
  http = require('http'),
  bodyParser = require('body-parser'),
  array = require('./array.js'),
  app = express();

app.use(express.static(__dirname + '/client'));

// tell Express to parse incoming
// JSON objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

http.createServer(app).listen(3000);
console.log('Server running on port 3000');

app.post('/avg', function (req, res) {
  'use strict';
  var result = array.avg(req.body.array);
  res.json({
    result: result
  });
});

app.post('/max', function (req, res) {
  'use strict';
  var result = array.max(req.body.array);
  res.json({
    result: result
  });
});

app.post('/even', function (req, res) {
  'use strict';
  var result = array.even(req.body.array);
  res.json({
    result: result
  });
});

app.post('/allEven', function (req, res) {
  'use strict';
  var result = array.allEven(req.body.array);
  res.json({
    result: result
  });
});

app.post('/arrayContains', function (req, res) {
  'use strict';
  var result = array.arrayContains(req.body.array, req.body.query);
  res.json({
    result: result
  });
});

app.post('/arrayContainsNTimes', function (req, res) {
  'use strict';
  var result = array.arrayContainsNTimes(
    req.body.array, 
    req.body.query, 
    req.body.n);
  res.json({
    result: result
  });
});