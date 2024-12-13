const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//defines the schema 　(set data type & default value, )

//categories =>field=> ['type', 'color']
const categories_model = new Schema({
    type:{type:String, default :"food"},
    color:{type:String, default :"#FCBE44"},
})

//This defines the schema for a "transactions" collection.

//transactions =>field =>['name', 'type', 'amount', 'date']
const transactions_model = new Schema({
    name:{type:String , default:"Annoymous"},
    type:{type:String, default :"food"},
    amount:{type:Number},
    date:{type:Date, default:Date.now},
})

//mongoose.model() creates and compiles models based on the schemas:
const Categories= mongoose.model('categories', categories_model);
const Transactions= mongoose.model('transactions', transactions_model);


export default Transactions;

//exports both Categories and Transactions for usage in other parts of the application
module.exports ={
    Categories,
    Transactions
}
