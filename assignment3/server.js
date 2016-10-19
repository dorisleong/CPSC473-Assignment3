var express = require("express"),
    http = require("http"),
    bodyParser = require('body-parser'),
    array = require('./array.js'),
    app = express();

app.use(express.static(__dirname + "/client"));

// tell Express to parse incoming
// JSON objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

http.createServer(app).listen(3000);
console.log("Server running on port 3000");

app.post('/avg', function(req, res) {
    var nums = req.body;
    res.send(JSON.stringify(array.avg(nums)));
});

app.post('/max', function(req, res) {
    var nums = req.body.maxNums;
    res.send("Max = " + array.max(nums));
});

app.post('/even', function(req, res) {
    var nums = req.body.evenNums;
    if (array.even(nums)) {
        res.send("Set contains an even number.");
    } else {
        res.send("Set does not contain an even number.");
    }
});

app.post('/allEven', function(req, res) {
    var nums = req.body.allEvenNums;
    if (array.allEven(nums)) {
        res.send("Set contains all even numbers.");
    } else {
        res.send("Set contains an odd number.");
    }
});

app.post('/arrayContains', function(req, res) {
    var strArray = req.body.containsArray;
    var strQuery = req.body.containsQuery;
    if (array.arrayContains(strArray, strQuery)) {
        res.send("Set contains given word.");
    } else {
        res.send("Set does not contain given word.");
    }
});

app.post('/arrayContainsNTimes', function(req, res) {
    var strArray = req.body.containsNTimesArray;
    var strQuery = req.body.containsNTimesQuery;
    var n = req.body.nTimes;
    if (array.arrayContainsNTimes(strArray, strQuery, n)) {
        res.send("Set contains given word of the speficified number of times");
    } else {
        res.send("Set does not contain given word of the speficified number of times");
    }
});
