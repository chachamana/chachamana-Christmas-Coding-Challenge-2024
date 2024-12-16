const model = require("../modeles/model");

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
async function get_Categories(req, res) {
  try {
    //get all of data from categories collection
    let data = await model.Categories.find({}); //.find() return the first value (meet the condition)

    let filter = data.map((info) => {
      // "YYYY-MM-DD"
      const date = new Date(info.date);
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

      // "HH:mm"
      const formattedTime = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
      return {
        type: info.type,
        color: info.color,
        date: formattedDate,
        time: formattedTime,
      };
    });
    return res.json(filter);
  } catch (err) {
    // if error happens, return 400
    return res.status(400).json({ message: `Error while getting categories: ${err.message}` });
  }
}

// post http://localhost:8080/api/transaction
async function create_Transaction(req, res) {
  if (!req.body) {
    console.log("Request body is missing");
    return res.status(400).json("POST HTTP Data is not provided");
  }

  let { name, type, amount } = req.body;

  try {
    const create = new model.Transactions({
      name,
      type,
      amount,
      date: new Date(),
    });
    // save @database
    const savedData = await create.save();

    return res.status(201).json(savedData);
  } catch (error) {
    return res.status(400).json({ message: `Error while creating transactions: ${error.message}` });
  }
}

// get http://localhost:8080/api/transaction
async function get_Transaction(req, res) {
  try {
    let data = await model.Transactions.find({}); //.find() return the first value (meet the condition)
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ message: `Error while getting transactions: ${err.message}` });
  }
}

// delete http://localhost:8080/api/transaction
async function delete_Transaction(req, res) {
  if (!req.body) {
        //400 = error in the client side
    return res.status(400).json({ message: "Missing required parameter: id" });
  }
  try {
    // Extract the ID from the request body
    // Delete the transaction record by ID
    const result = await model.Transactions.deleteOne(req.body);

    // Check if a record was deleted
    // 404 = no documents match to the id
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No transaction found with the provided ID" });
    }

    return res.json({ message: "Record deleted successfully" });
  } catch (err) {
    // 500 = something error in the server
    console.error("Error deleting transaction:", err); // for debugging
    return res.status(500).json({ message: "Error while deleting transaction record" });
  }
}

//export routes (can use in other files)
module.exports = {
  create_Categories,
  get_Categories,
  create_Transaction,
  get_Transaction,
  delete_Transaction
};
