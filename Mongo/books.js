const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/insta');
}
main().then(res=>console.log("connection successful"))
.catch(err=>console.log(err));

const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLenght:50

    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:1,

    },
    discount:{
        type:Number,
        default:0,
    }
})

const Book=mongoose.model("book",bookSchema);

const book1=new Book({
    title:"God of war",
    price:"999",
    author:"arif",
    discount:29
})
book1.save().then((res)=>console.log(res)).catch(err=>console.log(err));



