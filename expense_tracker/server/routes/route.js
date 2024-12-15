// import a middleware to manage Router (Express module)
const routes=require('express').Router();
const controller=require('../controller/controller.js')

// available to check  by post man !!(example: POST http://localhost:8080/api/categories)


// when a client sends GET requests to routes.route('/api/categories')

routes.route('/api/categories') //define endpoint(URL)
.post(controller.create_Categories)
.get(controller.get_Categories);


routes.route('/api/transaction')
.post(controller.create_Transaction);



//export routes
module.exports=routes;
/*
( example )
const routes = require('./path/to/this/file');
app.use(routes);
*/