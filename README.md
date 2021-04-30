### This a working server

Note: a working server instance is running at https://my-todolist-api.herokuapp.com so you don't need to start your server locally to test the todolist app.

Download/Clone in your local repository and run 

### `npm run start`


The server will connects to an example mongo db and will respond at your calls (you can also try with POSTMAN)
You will find many comments on the code inside each file.


### What will you find
  
## Server.js (that is the entry point server) it will runs on port 3001, but you can easily change it directly inside the file or creating a .env file with the PORT var.
    note: a working serve instance is running at https://my-todolist-api.herokuapp.com so you don't need to start your server locally to test the todolist app
    
## Api folder that contains:

  # models folder
    -here you can find the todoController.js that handles the call from the serve and does the mongo db query, then returns data.

  # controllers folder
    -here you can find the todoModel.js that defines the schema/structure of the todo Object.

  # routes folder
    -here you can find the todoRoutes.js file where are defined the routes that the server accept whit theri methods
