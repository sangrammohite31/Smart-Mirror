const express = require("express");
const app = express();
app.listen(3000,()=>{
    console.log("connected to http://localhost:3000")
})

app.get("/app",(req,res)=>{
  res.sendFile(__dirname +"/index.html")
})
app.get('/getdata',(req,res)=>{
    
    res.json({"name":"sangram"})
})
obj ={
    "name ": "lalu jadhav"
};



module.exports =app;