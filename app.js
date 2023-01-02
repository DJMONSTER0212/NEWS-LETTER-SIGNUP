const express  = require("express");
const request = require("request");
const https  =require("https")
const bodyparser = require("body-parser");
const app = express();
// for server to serve static files such as css and images we use a special function 
app.use(express.static("public")); //(foldername)
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    let firstname = req.body.fname;
    let lastname = req.body.lname;
    let email = req.body.email;
    // console.log(firstname);
    // console.log(lastname);
    // console.log(email);
    let data = {
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstname,
                    LNAME:lastname
                }
            }
        ]
    }
    var jsonData = JSON.stringify(data);

    const url  = "https://us21.api.mailchimp.com/3.0/lists/300d7931d5"
    const options  = {
        method:"POST",
        auth:"DJ:0726fe06ebe46be4faeb19cdc8a4abc7-us21"
    }
    const request=https.request(url,options,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
});

app.listen(3000,function(){
    console.log("Server running on port 3000");
})
// api-key
// 0726fe06ebe46be4faeb19cdc8a4abc7-us21

// list Id
// 300d7931d5