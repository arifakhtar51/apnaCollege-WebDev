let btn=document.querySelector(".btn");
let fact=document.querySelector("#fact");
let img=document.querySelector("#im");
let url="https://catfact.ninja/fact/";

let url2="https://dog.ceo/api/breeds/image/random";
async function getfact(){
    try{
        let res=await axios.get(url);
    
    // console.log(res.data.fact);
    fact.innerHTML=res.data.fact;
    }
    catch(err){
        console.log(err);
    }
}
async function getDonPics(){
    let resp=await axios.get(url2);
    console.dir( resp.data.message);
    img.setAttribute("src",resp.data.message)
    console.log(resp);
}



btn.addEventListener("click",()=>{
    getfact();
    getDonPics();
})