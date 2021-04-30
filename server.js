//********************************************************************/
// Sets up the server listening to the port 3000 on localhost
//********************************************************************/

//Express is the server module
var express = require('express'),
    //creates the server
    app = express(), 
    //establish the port
    port = process.env.PORT || 3001,
    //require mongoose
    mongoose = require('mongoose'),
    //created model is loading here
    Todo = require('./api/models/todoModel'), 
    //this is to parse the body
    bodyParser = require('body-parser');



// Setup the connection for mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://todo_user:todo2021@cluster0.evtoi.mongodb.net/todo?retryWrites=true&w=majority'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Import the routes file
var routes = require('./api/routes/todoRoutes'); 
// Register the routes
routes(app); 


// Start listening
app.listen(port); 


//console.log('Server started on: ' + port);