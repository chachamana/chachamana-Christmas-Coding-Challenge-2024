//defines the schema 　(set data type & default value, )

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//categories =>field=> ['type', 'color']
const categories_model = new Schema({
  type: { type: String, default: "savings" },
  color: { type: String, default: "#FCBE44" },
  date: { type: Date, default: Date.now },
});

//This defines the schema for a "transactions" collection.

//transactions =>field =>['name', 'type', 'amount', 'date']
const transactions_model = new Schema({
  name: { type: String, default: "Annoymous" },
  type: { type: String, default: "savings" },
  amount: { type: Number, default: 0},
  date: { type: Date, default: Date.now },
  time: { type: String },
});

//define models
const Categories = mongoose.model("categories", categories_model);
const Transactions = mongoose.model("transactions", transactions_model);

//exports both (to use in other parts of the application)
module.exports = {
  Categories,
  Transactions,
};
