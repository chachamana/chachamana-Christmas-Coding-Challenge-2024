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

const con = require("./db/connection.js");

(async function startServer() {
    try {
        const db = await con; // connect to MongoDB
        // if db (false)
        if (!db) {
            console.error("Database connection failed");
            process.exit(1); // finish process
        }

        // run the Server
        app.listen(port, () => {
            console.log(`Server is running on port : http://localhost:${port}`);
        });

        // handling the Server
        app.on("error", (err) => {
            console.error(`Failed to connect with HTTP Server: ${err}`);
        });
    } catch (error) {
        // handling the Server connection error
        console.error(`Connection Failed: ${error}`);
        process.exit(1); // finish process
    }
})();
