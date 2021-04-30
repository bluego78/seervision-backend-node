//********************************************************************/
// Mongoose is a package that lets you to use a MongoDB instance
//********************************************************************/

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// Define the Schema/Structure of the Todo
// and all the default values
var TodoSchema = new Schema({
  text: {
    type: String,
    required: 'Please enter a text for the todo'
  },
  created: {
    type: Date,
    default: Date.now
  },
  deleted: {
    type: Date,
    default: null
  },
  done: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Todos', TodoSchema);