//A Mongoose Schema defines the structure and property of the document in the MongoDB collection. This Schema is a way to define expected properties and values along with the constraints and indexes.

// A Mongoose model is a wrapper of the Mongoose schema. A Mongoose schema defines the document's properties, default values, types of data, validators, etc. In contrast, a Mongoose model provides an interface for the database to create, query, update, delete records, and so on.

const mongoose= require("mongoose");
// Create Schema
const productSchema= mongoose.Schema({
    name: String,
    brand:String,
    price:Number,
    description:String
});
// Create Model and exports 
module.exports=mongoose.model('product',productSchema);