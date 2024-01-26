const express=require("express");
const app=express();

let port =8080;
app.set("view engine","ejs");

// app.get("/",(req,res)=>{
//     res.render("home");
// });

// app.get("/rolldice",(req,res)=>{
//     let val=Math.floor(Math.random()*6)+1;
//     res.render("rolldice",{num:val});
// });

// app.get("/home",(req,res)=>{
//     res.send("Hello I am at Home");
// })



// instagram ejs

app.get("/insta/:username",(req,res)=>{

    let  {username} =(req.params);
    let instaData=require("./data.json");
    const data=instaData[username];
    if(data){
        res.render("insta",{ data });
        // console.log(data);
    }
    else{
        res.render("errors.ejs");
    }
    // console.log(data,instaData[username]);
    
})




//serving static files

app.use(express.static("public"));




app.listen(port,()=>{
    console.log("app is liestening at port ",port);
})
