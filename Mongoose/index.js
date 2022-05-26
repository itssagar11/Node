// CURD API Using Mongoose.
// Mongoose is an ODM (Object database Modelling) library for Node.js that defines objects with a schema mapped to a MongoDB document.

const express= require("express");
const product= require("./product");
const conn= require("./config");
const objId= require("mongodb").ObjectId; // will use to convert string to object of Id
const app= express();
conn(); // initailize connection with database
app.use(express.json()); // mendatory to get json as api body from front end
// post Api
app.post("",async(req,res)=>{
        const data=new product(req.body);
        const result= await data.save();
        res.send("data Fired Successfully");
});

//get Api
app.get("",async(req,res)=>{
    const data=await product.find();
    res.send(data);
});

// Put Api
app.put("/:_id",async(req,res)=>{

    const data=await product.updateOne(
        {_id:objId(req.params._id)},
        {$set:req.body}
        );
    res.send(data);
});

// Remove api
app.delete("/:_id",async(req,res)=>{

    const data=await product.deleteOne(
        {_id:objId(req.params._id)}
        );
    res.send(data);
});


//initialized server at port 8000
app.listen(8000);