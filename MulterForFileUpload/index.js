

// multer is a module used for  upload file 

const multer = require("multer");
const express = require("express");
const app = express();
const path= require("path"); // will require for get file extension

// it will serve as a milldeware
const upload = multer({
    storage: multer.diskStorage  ({
        destination: function (req, file, cb) {
            cb(null, "uploads");
        },
        filename: function (req, file, cb) {
            cb(null, file.filename + "_" + Date.now() + path.extname(file.originalname))
        }
    })
}).single("file");

// give upload middleware as a parameter to route
app.post("/upload", upload,(req, res) => {

    res.send("Working");
})

app.listen(8000);