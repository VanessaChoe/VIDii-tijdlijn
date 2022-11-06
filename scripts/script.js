// JavaScript Document
console.log("Super Mario Bros!");

var marioT1 = document.querySelector("main section ul li:nth-of-type(1) img:nth-of-type(1)");
var mario1 = document.querySelector("main section ul li:nth-of-type(1) img:nth-of-type(2)");

// var mario2 = document.querySelector("main section ul li:nth-of-type(2) img");
// var mario3 = document.querySelector("main section ul li:nth-of-type(3) img");
// var mario4 = document.querySelector("main section ul li:nth-of-type(4) img");
// var mario5 = document.querySelector("main section ul li:nth-of-type(5) img");
// var mario6 = document.querySelector("main section ul li:nth-of-type(6) img");
// var mario7 = document.querySelector("main section ul li:nth-of-type(7) img");
// var mario8 = document.querySelector("main section ul li:nth-of-type(8) img");
// var mario9 = document.querySelector("main section ul li:nth-of-type(9) img");
// var mario10 = document.querySelector("main section ul li:nth-of-type(10) img");
// var mario11 = document.querySelector("main section ul li:nth-of-type(11) img");

var blok1 = document.querySelector("main section ul li:nth-of-type(1) button");
// var blok2 = document.querySelector("main section ul li:nth-of-type(2) button");
// var blok3 = document.querySelector("main section ul li:nth-of-type(3) button");
// var blok4 = document.querySelector("main section ul li:nth-of-type(4) button");
// var blok5 = document.querySelector("main section ul li:nth-of-type(5) button");
// var blok6 = document.querySelector("main section ul li:nth-of-type(6) button");
// var blok7 = document.querySelector("main section ul li:nth-of-type(7) button");
// var blok8 = document.querySelector("main section ul li:nth-of-type(8) button");
// var blok9 = document.querySelector("main section ul li:nth-of-type(9) button");
// var blok10 = document.querySelector("main section ul li:nth-of-type(10) button");
// var blok11 = document.querySelector("main section ul li:nth-of-type(11) button");



// blok1.addEventListener('click' , function() {
//     mario1.classList.add("omhoogSpringen");
// });

function MarioSpringtOmhoog() {

    console.log("Mario springt omhoog");

    mario1.classList.add("omhoogSpringen");
    blok1.classList.add("blokjeKnippert");
   
    setTimeout(function(){
        marioT1.classList.add("marioVisible")}
        , 2000);
    setTimeout(function(){
    marioT1.classList.add("marioT1valt")}
    , 4000);

    mario1.classList.add(".marioT1")
}

blok1.addEventListener("click", MarioSpringtOmhoog);



// blok2.addEventListener('click' , function() {
//     mario2.classList.add("omhoogSpringen");
// });
// blok3.addEventListener('click' , function() {
//     mario3.classList.add("omhoogSpringen");
// });
// blok4.addEventListener('click' , function() {
//     mario4.classList.add("omhoogSpringen");
// });
// blok5.addEventListener('click' , function() {
//     mario5.classList.add("omhoogSpringen");
// });
// blok6.addEventListener('click' , function() {
//     mario6.classList.add("omhoogSpringen");
// });
// blok7.addEventListener('click' , function() {
//     mario7.classList.add("omhoogSpringen");
// });
// blok8.addEventListener('click' , function() {
//     mario8.classList.add("omhoogSpringen");
// });
// blok9.addEventListener('click' , function() {
//     mario9.classList.add("omhoogSpringen");
// });
// blok10.addEventListener('click' , function() {
//     mario10.classList.add("omhoogSpringen");
// });
// blok11.addEventListener('click' , function() {
//     mario11.classList.add("omhoogSpringen");
// });