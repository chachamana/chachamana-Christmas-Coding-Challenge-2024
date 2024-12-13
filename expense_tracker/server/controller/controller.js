const model= require('../modules/module');

// get categories
function create_Categories(req,res){
    res.json('Get Request From Categories')
}


//export routes (can use in other files)

module.exports={
    create_Categories
}