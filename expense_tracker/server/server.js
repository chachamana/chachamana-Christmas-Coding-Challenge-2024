
const express= require("express");
const cors=require("cors");
const app = express();


//keep App-setting , api-key, Database URL .. etc,,as an external file(config.env)
//& load them ↑
require('dotenv').config({path:"./config.env"});
const port = process.env.PORT || 3000;

//use middleware
app.use(cors()); //CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // parse data   JSON.parse(jsonData);


//using routes
app.use(require("./routes/route"));


// show in terminal
app.listen(port, () => {
    console.log(`Server is running on port : http://localhost:${port}`)
  });