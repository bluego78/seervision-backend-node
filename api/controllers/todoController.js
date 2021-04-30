//********************************************************************/
// Defines the actions called by the routes
// that uses the mongoose methods
//********************************************************************/

// Import mongoose and the Todo Model
var mongoose = require('mongoose'),
    Todo = mongoose.model('Todos');

// GET METHOD of a list of todos 
exports.list_all_todos = function(req, res) {
  Todo.find({deleted: null}, function(err, todo) {
    if (err)
      res.send(err);
    res.json(todo);
  });
};

// GET METHOD of a todo by id 
exports.read_a_todo = function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    if (err)
      res.send(err);
    res.json(todo);
  });
};

// POST METHOD create a todo 
exports.create_a_todo = function(req, res) {
  var new_todo = new Todo(req.body);
  new_todo.save(function(err, todo) {
    if (err)
      res.send(err);
    res.json(todo);
  });
};

// PUT METHOD update a todo 
exports.update_a_todo = function(req, res) {
  Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, todo) {
    if (err)
      res.send(err);
    res.json(todo);
  });
};

// DELETE METHOD deletes a todo by id
exports.delete_a_todo = function(req, res) {
  Todo.remove({
    _id: req.params.id
  }, function(err, todo) {
    if (err)
      res.send(err);
    res.json({ message: 'todo successfully deleted' });
  });
};