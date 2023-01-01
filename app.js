const express  = require("express");
const request = require("request");
const bodyparser = require("body-parser");
const app = express();



app.listen(3000,function(){
    console.log("Server running on port 3000");
})