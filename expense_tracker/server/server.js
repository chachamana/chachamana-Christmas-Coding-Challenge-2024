
const express= require("express");
const cors=require("cors");
const app = express();


const port = 3000;

//use middleware
app.use(cors()); //CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // parse data   JSON.parse(jsonData);






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });