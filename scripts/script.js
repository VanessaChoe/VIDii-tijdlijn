// JavaScript Document
console.log("Super Mario Bros!");

var marioT1 = document.querySelector("main section ul li:nth-of-type(1) img:nth-of-type(1)");
var mario1 = document.querySelector("main section ul li:nth-of-type(1) img:nth-of-type(2)");
var blok1 = document.querySelector("main section ul li:nth-of-type(1) button");

var marioT2 = document.querySelector("main section ul li:nth-of-type(2) img:nth-of-type(1)");
var blok2 = document.querySelector("main section ul li:nth-of-type(2) button");

function Mario1SpringtOmhoog() {

    console.log("Mario springt omhoog");

    mario1.classList.add("omhoogSpringen");
    blok1.classList.add("blokjeKnippert");
   
    setTimeout(function(){
        console.log("marioT verschijnt")
        marioT1.classList.add("marioVisible")}
        , 2000);
    
    setTimeout(function(){
        console.log("blok verdwijnt")
        blok1.classList.add("blokjeVerdwijnt")}
        , 2700);

    setTimeout(function(){
        console.log("mario1 valt naar beneden")
        marioT1.classList.add("marioT1valt")}
        , 4000);

    setTimeout(function(){
        console.log("mario1 verdwijnt")
        mario1.classList.add("marioInvisible")}
        , 4500);    

    setTimeout(function(){
        console.log("marioT1 blijft")
        marioT1.classList.add("marioT1Stays")}
        , 4500);
}

function marioNaarBlok() {
    // console.log("Mario 2 springt omhoog");

    setTimeout(function(){
        console.log("mario gaat opzij en omhoog")
    marioT1.classList.add("marioOpzijEnOmhoog")}
    , 500);

    setTimeout(function(){
    blok2.classList.add("blokjeKnippert")}
    , 2500);

    setTimeout(function(){
        console.log("marioT2 verschijnt")
        marioT2.classList.add("marioVisible")}
    , 4900);

    setTimeout(function(){
        console.log("blok verdwijnt")
        blok2.classList.add("blokjeVerdwijnt")}
    , 5500);

    setTimeout(function(){
        console.log("marioT1 verdwijnt")
        marioT1.classList.remove("marioVisible")}
    , 8400); 

    setTimeout(function(){
        console.log("marioT2 blijft")
        marioT2.classList.add("marioT1Stays")}
    , 8401);

    
    // setTimeout(function(){
    //     console.log("marioT1 wordt onzichtbaar")
    // marioT1.classList.add("marioInvisible")}
    // , 3000);    
    
    // setTimeout(function(){
    //     console.log("marioT12 wordt zichtbaar")
    // marioT12.classList.add("omhoogSpringen")}
    // , 5000);    

    // setTimeout(function(){
    //     console.log("marioT1 omhoog")
    //     marioT1.classList.add("marioOmhoog")
    //     marioT1.append('section ul li:nth-of-type(2)')
    // }
    // , 2000);


    // marioT1.classList.add("marioOmhoog");
    // blok2.classList.add("blokjeKnippert");
   
    // setTimeout(function(){
    //     console.log("marioT2 verschijnt")
    //     marioT2.classList.add("marioVisible")}
    //     , 2000);
    
    // setTimeout(function(){
    //     console.log("blok verdwijnt")
    //     blok2.classList.add("blokjeVerdwijnt")}
    //     , 2700);

    // setTimeout(function(){
    //     console.log("marioT2 valt naar beneden")
    //     marioT2.classList.add("marioT2valt")}
    //     , 4000);

    // setTimeout(function(){
    //     console.log("marioT1 verdwijnt")
    //     marioT1.classList.add("marioInvisible")}
    //     , 4500);    

    // setTimeout(function(){
    //     console.log("marioT2 blijft")
    //     marioT2.classList.add("marioT1Stays")}
    //     , 4500);
}

blok1.addEventListener("click", Mario1SpringtOmhoog);
blok2.addEventListener("click", marioNaarBlok);




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