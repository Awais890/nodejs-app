

var express = require("express");
var app = express();

app.get('/',(req,res)=>{
    res.send("Hello Form Docker");
});

app.listen(4000,()=>{
    console.log("App listening on port 4000");
});