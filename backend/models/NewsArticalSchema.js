// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var NewsArticalSchema = new Schema({
  // Just a string
  saved: {
    type: Date
  },
  url: {
    type: String
  },
  title: {
    type: String
  },
});

// Create the model with the name "Model"
var Model = mongoose.model("NewsArtical", NewsArticalSchema);

// Export the Note model
module.exports = Model;
