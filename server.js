const express = require("express");
const bodyparser = require("body-parser");


const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(request, response){
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response){
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    response.sendFile(__dirname+"/index2.html");
    
});

app.listen(process.env.PORT || 3000, function(){
    console.log("server started on port 3000");
});