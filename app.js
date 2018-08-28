var express = require("express");
var app= express();
app.set("view engine","ejs");
app.get("/",function(req,res){
    
    var contacts = [{firstname:"Vibhav",lastname:"Singh",contact:"9870488283"},
    {firstname:"Vikash",lastname:"Kumar",contact:"9069769703"},
    {firstname:"Rishabh",lastname:"Verma",contact:"9582824672"},
    {firstname:"Lovie",lastname:"Sharma",contact:"9953051465"},
    {firstname:"Palak",lastname:"Mehrotra",contact:"8368352195"},
    ];
    res.render("landing",{contacts:contacts});
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started");
});