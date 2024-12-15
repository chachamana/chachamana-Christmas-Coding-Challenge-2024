const model = require("../modules/module");

// post http://localhost:8080/api/categories

async function create_Categories(req, res) {
    try {
        // create data  to save @ MongoDB
        const Create = new model.Categories({
            type: "Savings",
            color: "#1F3B5C",
        });

        // save() => save data @ MONGO DB
        const result = await Create.save();

        // if successed save(), return the data(result)
        return res.json(result);
    } catch (err) {
        // if error happens, return 400
        return res.status(400).json({ message: `Error while creating categories: ${err.message}` });
    }
}

// get http://localhost:8080/api/categories

async function create_Categories(req, res) {
}




//export routes (can use in other files)
module.exports = {
  create_Categories,
};


