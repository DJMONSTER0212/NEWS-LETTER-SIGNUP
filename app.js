const express  = require("express");
const request = require("request");
const bodyparser = require("body-parser");
const app = express();
// for server to serve static files such as css and images we use a special function 
app.use(express.static("public")); //(foldername)

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});


app.listen(3000,function(){
    console.log("Server running on port 3000");
})