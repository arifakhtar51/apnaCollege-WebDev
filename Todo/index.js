
const express=require('express');
const app=express();


// good practive env me hai port so import karo
require("dotenv").config();
const PORT=process.env.PORT || 4000;

// middleware to parse to json body
app.use(express.json());


// import routes for todo api

const todoRoutes=require("./routes/todos");
app.use("/api/v1",todoRoutes);


app.listen(PORT,()=>{
    console.log( ` app is running at port no.${PORT}`);
})



// connection with database

const dpConnect=require("./config/database");
dpConnect();


// default route not necessary but it is good practice

app.get("/",(req,res)=>{
    res.send('<h1>Hii I am Here</h1>')
})