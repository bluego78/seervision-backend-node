//********************************************************************/
// Defines the routes and specify the methods they accepts 
//********************************************************************/
'use strict';
module.exports = function(app) {

    // The controller is included so each route can call it’s handler
    var todo = require('../controllers/todoController');

    // Route 1 to get the list of todos
    app.route('/todos')
        .get(todo.list_all_todos)
        .post(todo.create_a_todo);

    // Route 2 to get a specific todo by id
    app.route('/todos/:id')
        .put(todo.update_a_todo);

};