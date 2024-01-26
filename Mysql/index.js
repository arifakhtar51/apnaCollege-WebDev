const { faker, da } = require('@faker-js/faker');
const express=require("express");
const mysql=require('mysql2');
const path=require("path");
const methodOverride=require("method-override");



const app=express();
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

const conn = mysql.createConnection({
  host: "localhost",
  user: 'root',
  database: 'delta_app',
  password:"1234",

});


app.listen("8080",()=>{
  console.log("app is listening at port 8080");
})

app.get("/",(req,res)=>{
  // res.send("No. of user ->x");
  let count=0;
  let q="select count(*) from temp2"
  try{
    conn.query(q,(err,result)=>{
        if(err)throw err;
        console.log(result[0]['count(*)']);//result is an array
        // console.log(result.length);
        count=result[0]['count(*)'];
        res.render("home",{count});
        
    })
}
catch(err){
    console.log(err);
}
})

app.get('/user',(req,res)=>{
  let q="select * from temp2"
  try{
    conn.query(q,(err,users)=>{
        if(err)throw err;
        //console.log(users);//result is an array
        // res.send(users);
        res.render("showusers", { users });
        
    })
}
  catch(err){
      console.log(err);
  }
    
});

// edit username 

app.patch("/user/edit/:id",(req,res)=>{
  let id=req.params['id'];
  console.log(req.params);
  let q=`select * from temp2 where id='${id}'`;
  try{
    conn.query(q,(err,user)=>{
        if(err)throw err;
        console.log(user);
        let usr=user[0];
        res.render("edit", { usr });
        
    })
}
  catch(err){
      console.log(err);
  }
});

// update db
app.patch("/edit/username/:id",(req,res)=>{
  // console.log("arif");
  // console.log(req.body);
  // console.log(req.params);
  // res.send("usrname updated");
  const inputPswd=req.body.password;
  const inputUsername=req.body.username;
  let id=req.params['id'];
  let q=`select * from temp2 where id='${id}'`;
  try{
    conn.query(q,(err,user)=>{
        if(err)throw err;
        
        let correctPswd=user[0].password;
        console.log(correctPswd," ",inputPswd);
        if(correctPswd==inputPswd){
            let q = 'UPDATE temp2 SET username = ? WHERE id = ?';
                conn.query(q, [inputUsername, id], (err, u) => {
                  console.log(u);
                  // res.send("UPDATE password");
                  res.redirect("/user");
                })
            }
        
        else{
          res.send("Wrong password");
        }     
    })
  }
    catch(err){
        console.log(err);
    }


});


app.post("/user/newuser",(req,res)=>{
  res.render("newuser");
})

app.post("/user/addNewUser",(req,res)=>{
  console.log(req.body);
  let {username,password,email}=req.body;
  if(username.length==0 || username.length==0 ||username.length==0){
    res.send(" Failed  Please enter correct Information");
  }
  else{
    let q="insert into temp2 (id,username,password,email) values ? ";
    let data=[[faker.string.uuid(),username,password,email]];
    console.log(data);
    try{
      conn.query(q,[data],(err,result)=>{
        if(err)throw err;
        res.redirect("/user");
        console.log("result->",result);
      })
    }
    catch(err){
      console.log(err);
    }
  }
})



// delete a user 
app.patch("/user/delete/:id",(req,res)=>{
  let id=req.params['id'];
  console.log(req.params);
  let q=`delete from temp2 where id='${id}'`;
  try{
    conn.query(q,(err,user)=>{
        if(err)throw err;
        console.log(user);
        let usr=user[0];
        res.redirect("/user");
        
    })
}
  catch(err){
      console.log(err);
  }
});


// let q="show tables";
// let q2="INSERT INTO temp2 (id,name,password) values (?,?,?)";
// let q3="INSERT INTO temp2 (id,username,password,email) values ?";
// // let temp=[
// //           [102,"BArifakhtar","B1234a"],
// //           [103,"CArifakhtar","C1234c"],
// //         ];

// let  getRandomUser= ()=> {
//           return [
//             faker.string.uuid(),
//             faker.internet.userName(),
//             faker.internet.password(),
//             faker.internet.email(),
//       ]
// };

// let bulkData=[];
// for(let i=0;i<100;i++){
//   let data=getRandomUser();
//   bulkData.push(data);

// }
// console.log(bulkData);
// try{
//     conn.query( q3,[bulkData],(err,result)=>{
//         if(err)throw err;
//         console.log(result);//result is an array
//         console.log(result.length);
//     })
// }
// catch(err){
//     console.log(err);
// }







// console.log(getRandomUser());