let arr=[100,20,30,490,50];

// Done
// let b=arr.filter((ele)=>{
//     return ele>30;
// })
// console.log(arr," new \n",b);

// let c=arr.map((ele)=>{
//     return ele*2
// })
// console.log(arr," new-> ",c);
// let cnt=0;
// setInterval(()=>{
//     console.log(cnt);
//     cnt++;
// },2000);

// setTimeout(()=>{
//     console.log("arif");
// },3000);

// arr.reduce((res,ele)=>{
//     console.log(res," ", ele," ","\n");
//     return ele;
// })

// max element in array

// let maxi=arr.reduce((res,ele)=>{
//     if(res>ele)return res;
//     else return ele;
// })
// console.log(maxi)




// let names=['a','b','c','d','e'];
// let [x,y,...othersVariable]=names;
// console.log(othersVariable);
// o/p=[ 'c', 'd', 'e' ]


let stu={
    name:"arif",
    age:"20"
}
let teach={
    Name:"Arif",
    Age:"22"
}

let obj=(obj1,obj2)=>
    ({...obj1,...obj2})
     
console.log(obj({1:'a'},{2:'a'}));



// app.js

