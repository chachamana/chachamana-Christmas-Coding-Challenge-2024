// import a middleware to manage Router (Express module)
const routes=require('express').Router();


// when a client sends GET requests to '/api/categories '
routes.route('/api/categories') //define endpoint(api/categories  URL)
.get((req,res)=>res.json('Get Request From Categories')) //'return springs