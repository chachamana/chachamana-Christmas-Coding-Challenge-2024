// import a middleware to manage Router (Express module)
const routes=require('express').Router();
const controller=require('../controller/controller.js')


// when a client sends GET requests to routes.route('/api/categories')
// available to check  by post man (POST http://localhost:8080/api/categories)
routes.route('/api/categories') //define endpoint(URL)
.post(controller.create_Categories) ; //controller.js ('return springs')


//export routes (can use in other files)
/*
example
const routes = require('./path/to/this/file');
app.use(routes);
*/
module.exports=routes;