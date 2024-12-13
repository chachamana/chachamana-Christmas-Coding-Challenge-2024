const express = require("express");
const cors = require("cors");
const app = express();

//keep App-setting , api-key, Database URL .. etc,,as an external file(config.env)
//& load them ↑
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;

//use middleware
app.use(cors()); //CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // parse data   JSON.parse(jsonData);

//using routes
app.use(require("./routes/route"));

//mongodb connection
const con = require("./db/connection.js");

con
  .then((db) => {
    if (!db) return process.exit(1); // if no database

    // show in terminal
    app.listen(port, () => {
      console.log(`Server is running on port : http://localhost:${port}`);
    });

    // Handle server-level errors
    app.on("error", (err) => {
      console.error(`Failed to connect with HTTP Server: ${err}`);
    });
  })
  .catch((error) => {
    console.error(`Connection Failed: ${error}`); // Handle database connection errors
  });
