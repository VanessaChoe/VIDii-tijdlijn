// JavaScript Document
console.log("Super Mario Bros!");

const mario = document.querySelector('.mario');
const tube1 = document.querySelector('.tube1');

function springenNaarTube1() {
    console.log("springenNaarTube(1)");
    mario.classList.add("naarTube1");  
    setTimeout(function(){
        mario.classList.remove("naarTube1")
    },5000);
}

tube1.addEventListener('click' , springenNaarTube1) ;
