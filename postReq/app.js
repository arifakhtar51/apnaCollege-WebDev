const express=require("express");
const app=express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register",(req,res)=>{
   let { user } =req.query;
   console.log(user);
    res.send(`Standard get  welcome ${user}!!`);
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    let { user } =req.body;
    res.send(`Standard POST response  welcome ${user}!!`);
   
})
port=9000;
app.listen(port,()=>{
    console.log("app is listening ",port);
})