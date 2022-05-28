/* Node.js is perfect for event-driven applications.
    In Formtend we can add events with butoon user click etc..
    But in Node we add events with Api's.



    In this code We are counting total no of request made using API's

*/

const express= require("express"); 
const EventEmitter= require("events"); // events modele return a class
const app= express();
const event= new EventEmitter; // class object created
let c=0;
event.on("countReq",()=>{  // carete countReq event
    c++;
    console.log(c);
})

app.get("",(_,res)=>{
    event.emit("countReq");// countReq event called
    res.send("I am home");
});

app.get("/about",(_,res)=>{
    event.emit("countReq");
    res.send("I am about");
});

app.get("/contact",(_,res)=>{
    event.emit("countReq");
    res.send("I am contact");
});

app.listen(8000,()=>{
    console.warn("Sever started on port 8000");
})