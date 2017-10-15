var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var NewsArtical = require('./models/NewsArticalSchema.js');
var cors = require('cors');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT||3999;

// Sets up the Express app to handle data parsing
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));


// Mongoose
// =============================================================

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/ecommerce");
// mongoose.connect("mongodb://heroku_8h7bq78n:9lhr1s2sdn9klgf4858k5dru6h@ds163053.mlab.com:63053/heroku_8h7bq78n");

var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Routes
// =============================================================
app.get("/news", function(req, res) {
    NewsArtical.find({}, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});

app.get("/news/:id", function(req, res) {
    NewsArtical.findOne({"_id": req.params.id }, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});

// Create a new note or replace an existing note
app.post("/news", function(req, res) {

  // mongoose requires the user to build up an object to pass to the constructor
  var result = {};

  // Add the text and href of every link, and save them as properties of the result object
  result.title = req.body.title;
  result.url  = req.body.url;
  result.saved = new Date();

  var entry = new NewsArtical(result);

  // And save the new product to the db
  entry.save(function(err, document) {
    // Log any errors
    if (err) {
      console.log(err);
    }
    else{
      res.json(result)
    }
  });
})


// Listen on the server
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
