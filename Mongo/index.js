const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'));

  async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  }
  main().then(res=>console.log("connection successful"))
  .catch(err=>console.log(err));

  const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number
  })
const User=mongoose.model("User",userSchema);
const Employess =mongoose.model("Employee",userSchema);

// const user2=new User({
//     name:"bob",
//     age:20,
//     email:"bob@gmail.com",
    
// })
// user2.save()
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

User.find({age:{$gt:19}}).then((data)=>console.log(data))
.catch(err=>console.log(err));