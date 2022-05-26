
//set up connetion with database using Mongoose package

const mongoose=require("mongoose"); // import Package
const database="mongodb://localhost:27017/ecommerse";  // Database Url
const conn= async()=>{
    await mongoose.connect(database);
}
module.exports= conn;