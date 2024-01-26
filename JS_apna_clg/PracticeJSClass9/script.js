let bdy=document.querySelector("body");

console.log(bdy);

let newp=document.createElement('p');
newp.innerText="Hii i am arif";

newp.classList.add('red');
bdy.appendChild(newp);

let newh=document.createElement('h1');
newh.innerText="Hii i am blue";

newh.classList.add('blue');
bdy.appendChild(newh);



