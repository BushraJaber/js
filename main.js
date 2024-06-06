var change=document.querySelector("div");
var bigbutton=document.querySelector(".bigBtn");
var smallbutton=document.querySelector(".smallBtn");


function  Bigfun (){
    change.classList.add("big");
    change.classList.remove("small");
}
function  Smallfun (){
    change.classList.add("small");
    change.classList.remove("big");
}
bigbutton.onclick=Bigfun;

smallbutton.onclick=Smallfun;
