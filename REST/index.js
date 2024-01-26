const { render } = require("ejs");
const express=require("express");
const app=express();
const path=require("path");
app.set("view engine ","ejs");
app.set("views",path.join(__dirname, "views" ));

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));


const methodOverride = require('method-override');
app.use(methodOverride("_method"));


const port=8080;
app.listen(port,()=>{
    console.log("app is listening at port no. ",port);
})

let posts=[
    {
        id:uuidv4(),
        username:"arifakhtar51",
        content:"I have selected "
    },
    {
        id:uuidv4(),
        username:"kumkum",
        content:"Hard work is a key of success "
    },
    {
        id:uuidv4(),
        username:"selected",
        content:"I have selected "
    }
    
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{ posts });
});

app.get("/posts/new",(req,res)=>{
    res.render("posts.ejs");
});

app.post("/post",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();

    posts.push({id,username,content});
    console.log("post created successfully");
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let singlepost=posts.find((p)=>p.id===id);
    res.render("singlePost.ejs",{ singlepost });
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>p.id===id);
    let newContent=req.body.content;
    post.content=newContent;
    console.log(id);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>p.id===id);
    res.render("edit.ejs",{ post });
});


app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((p)=>p.id!==id);
     res.redirect("/posts");
});