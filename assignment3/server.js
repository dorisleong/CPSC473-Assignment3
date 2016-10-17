var express = require("express"),
    http = require("http"),
    bodyParser = require('body-parser'),
    array = require('./array.js'),
    app = express(),
    toDos = [
        { 
            "description" : "Get groceries",
            "tags"  : [ "shopping", "chores" ]
        },
        { 
            "description" : "Make up some new ToDos",
            "tags"  : [ "writing", "work" ]
        },
        {
            "description" : "Prep for Monday's class",
            "tags"  : [ "work", "teaching" ]
        },
        { 
            "description" : "Answer emails",
            "tags"  : [ "work" ]
        },
        { 
            "description" : "Take Gracie to the park",
            "tags"  : [ "chores", "pets" ]
        },
        { 
            "description" : "Finish writing this book",
            "tags"  : [ "writing", "work" ]
        }
    ];
        
app.use(express.static(__dirname + "/client"));

// tell Express to parse incoming
// JSON objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

http.createServer(app).listen(3000);

// This route takes the place of our
// todos.json file in our example from
// Chapter 5
app.get("/todos.json", function (req, res) {
    res.json(toDos);
});

app.post("/todos", function (req, res) {
    // the object is now stored in req.body
    var newToDo = req.body;

    console.log(newToDo);

    toDos.push(newToDo);

    // send back a simple object
    res.json({"message":"You posted to the server!"});
});

app.post('/avg', function(req, res) {
    var nums = req.body;
    res.send("Average = " + array.avg(nums));
});

app.post('/max', function(req, res) {
    var nums = req.body;
    res.send("Max = " + array.max(nums));
});

app.post('/even', function(req, res) {
    var nums = req.body;
    if (array.even(nums)) {
        res.send("Set contains an even number.");
    } else {
        res.send("Set does not contain an even number.");
    }
});

app.post('/allEven', function(req, res) {
    var nums = req.body;
    if (array.allEven(nums)) {
        res.send("Set contains all even numbers.");
    } else {
        res.send("Set contains an odd number.");
    }
});

app.post('/arrayContains', function(req, res) {
    var strArray = req.body;
    if (array.arrayContains(strArray)) {
        res.send("Set contains given word.");
    } else {
        res.send("Set does not contain given word.");
    }
});

app.post('/arrayContainsNTimes', function(req, res) {
    var strArray = req.body;
    if (array.arrayContainsNTimes(strArray)) {
        res.send("Set contains given word of the speficified number of times");
    } else {
        res.send("Set does not contain given word of the speficified number of times");
    }
});
