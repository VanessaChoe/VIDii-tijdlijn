// JavaScript Document
console.log("Super Mario Bros!");

var marioT1 = document.querySelector("main section ul li:nth-of-type(1) img:nth-of-type(1)");
var mario1 = document.querySelector("main section ul li:nth-of-type(1) img:nth-of-type(2)");
var blok1 = document.querySelector("main section ul li:nth-of-type(1) button");

var marioT2 = document.querySelector("main section ul li:nth-of-type(2) img:nth-of-type(1)");
var blok2 = document.querySelector("main section ul li:nth-of-type(2) button");

var marioT3 = document.querySelector("main section ul li:nth-of-type(3) img:nth-of-type(1)");
var blok3 = document.querySelector("main section ul li:nth-of-type(3) button");

var marioT4 = document.querySelector("main section ul li:nth-of-type(4) img:nth-of-type(1)");
var blok4 = document.querySelector("main section ul li:nth-of-type(4) button");

var marioT5 = document.querySelector("main section ul li:nth-of-type(5) img:nth-of-type(1)");
var blok5 = document.querySelector("main section ul li:nth-of-type(5) button");

var marioT6 = document.querySelector("main section ul li:nth-of-type(6) img:nth-of-type(1)");
var blok6 = document.querySelector("main section ul li:nth-of-type(6) button");

blok1.addEventListener("click", marioNaarBlok1);
blok2.addEventListener("click", marioNaarBlok2);
blok3.addEventListener("click", marioNaarBlok3);
blok4.addEventListener("click", marioNaarBlok4);
blok5.addEventListener("click", marioNaarBlok5);
blok5.addEventListener("click", marioNaarBlok6);

function marioNaarBlok1() {

    console.log("Mario springt omhoog");

    mario1.classList.add("omhoogSpringen");
    blok1.classList.add("blokjeKnippert");
   
    setTimeout(function(){
        console.log("Mario 1988 verschijnt")
        marioT1.classList.add("marioVisible")}
        , 2000);
    
    setTimeout(function(){
        console.log("Blokje 1 verdwijnt")
        blok1.classList.add("blokjeVerdwijnt")}
        , 2700);

    setTimeout(function(){
        console.log("Mario 1988 valt naar beneden")
        marioT1.classList.add("marioT1valt")}
        , 4000);

    setTimeout(function(){
        console.log("Mario 1985 verdwijnt")
        mario1.classList.add("marioInvisible")}
        , 4500);    

    setTimeout(function(){
        console.log("Mario 1988 blijft")
        marioT1.classList.add("marioT1Stays")}
        , 4500);
}

function marioNaarBlok2() {

    setTimeout(function(){
        console.log("Mario 1988 gaat naar blok 2")
        marioT1.classList.add("marioOpzijEnOmhoog")}
        , 500);

    setTimeout(function(){
        console.log("Blokje 2 knippert")
        blok2.classList.add("blokjeKnippert")}
        , 2500); //schalen bij springen

    setTimeout(function(){
        console.log("Mario 1990 verschijnt en valt naar beneden")
        marioT2.classList.add("marioVisible")}
        , 4900);

    setTimeout(function(){
        console.log("Blokje 2 gaat weg")
        blok2.classList.add("blokjeVerdwijnt")}
        , 5500);

    setTimeout(function(){
        console.log("Mario 1988 verdwijnt")
        marioT1.classList.remove("marioVisible")}
        , 8400); 

    setTimeout(function(){
        console.log("Mario 1990 blijft")
        marioT2.classList.add("marioT1Stays")}
        , 8401);
}

function marioNaarBlok3() {

    setTimeout(function(){
        console.log("Mario 1990 gaat opzij en omhoog")
        marioT2.classList.add("marioOpzijEnOmhoog")}
        , 500);

    setTimeout(function(){
        console.log("Blokje 3 knippert")
        blok3.classList.add("blokjeKnippert")}
        , 2500);

    setTimeout(function(){
        console.log("Mario 1991 verschijnt en valt naar beneden")
        marioT3.classList.add("marioVisible")}
        , 4900);

    setTimeout(function(){
        console.log("Blokje 3 verdwijnt")
        blok3.classList.add("blokjeVerdwijnt")}
        , 5500);

    setTimeout(function(){
        console.log("Mario 1990 verdwijnt")
        marioT2.classList.remove("marioVisible")}
        , 8400); 

    setTimeout(function(){
        console.log("Mario 1991 blijft")
        marioT3.classList.add("marioT1Stays")}
        , 8401);
}

function marioNaarBlok4() {

    setTimeout(function(){
        console.log("Mario 1991 gaat opzij en omhoog")
        marioT3.classList.add("marioOpzijEnOmhoog")}
        , 500);

    setTimeout(function(){
        console.log("Blokje 4 knippert")
        blok4.classList.add("blokjeKnippert")}
        , 2500);

    setTimeout(function(){
        console.log("Mario 2002 verschijnt en valt naar beneden")
        marioT4.classList.add("marioVisible")}
        , 4900);

    setTimeout(function(){
        console.log("Blokje 4 verdwijnt")
        blok4.classList.add("blokjeVerdwijnt")}
        , 5500);

    setTimeout(function(){
        console.log("Mario 1991 verdwijnt")
        marioT3.classList.remove("marioVisible")}
        , 8400); 

    setTimeout(function(){
        console.log("Mario 2002 blijft")
        marioT4.classList.add("marioT1Stays")}
        , 8401);
}


function marioNaarBlok5() {

    console.log("marioNaarBlok5")

    setTimeout(function(){
        console.log("Mario 2002 gaat opzij en omhoog")
        marioT4.classList.add("marioOpzijEnOmhoog")}
        , 501);

    setTimeout(function(){
        console.log("Blokje 5 knippert")
        blok5.classList.add("blokjeKnippert")}
        , 2501);

    setTimeout(function(){
        console.log("Mario 2007 verschijnt en valt naar beneden")
        marioT5.classList.add("marioVisible")}
        , 4901);

    setTimeout(function(){
        console.log("Blokje 5 verdwijnt")
        blok5.classList.add("blokjeVerdwijnt")}
        , 5501);

    setTimeout(function(){
        console.log("Mario 2002 verdwijnt")
        marioT4.classList.remove("marioVisible")}
        , 8401); 

    setTimeout(function(){
        console.log("Mario 2007 blijft")
        marioT5.classList.add("marioT1Stays")}
        , 8402);
}

function marioNaarBlok6() {

    console.log("marioNaarBlok6")

    setTimeout(function(){
        console.log("Mario 1991 gaat opzij en omhoog")
        marioT5.classList.add("marioOpzijEnOmhoog")}
        , 500);

    setTimeout(function(){
        console.log("Blokje 6 knippert")
        blok6.classList.add("blokjeKnippert")}
        , 2500);

    setTimeout(function(){
        console.log("Mario 2002 verschijnt en valt naar beneden")
        marioT6.classList.add("marioVisible")}
        , 4900);

    setTimeout(function(){
        console.log("Blokje 6 verdwijnt")
        blok6.classList.add("blokjeVerdwijnt")}
        , 5500);

    setTimeout(function(){
        console.log("Mario 1991 verdwijnt")
        marioT5.classList.remove("marioVisible")}
        , 8400); 

    setTimeout(function(){
        console.log("Mario 2007 blijft")
        marioT6.classList.add("marioT1Stays")}
        , 8401);
}

// function marioNaarBlok7() {

//     setTimeout(function(){
//         console.log("Mario 1991 gaat opzij en omhoog")
//         marioT6.classList.add("marioOpzijEnOmhoog")}
//         , 500);

//     setTimeout(function(){
//         console.log("Blokje 4 knippert")
//         blok7.classList.add("blokjeKnippert")}
//         , 2500);

//     setTimeout(function(){
//         console.log("Mario 2002 verschijnt en valt naar beneden")
//         marioT7.classList.add("marioVisible")}
//         , 4900);

    // setTimeout(function(){
    //     console.log("Blokje 4 verdwijnt")
    //     blok7.classList.add("blokjeVerdwijnt")}
    //     , 5500);

    // setTimeout(function(){
    //     console.log("Mario 1991 verdwijnt")
    //     marioT6.classList.remove("marioVisible")}
    //     , 8400); 

    // setTimeout(function(){
    //     console.log("Mario 2002 blijft")
    //     marioT7.classList.add("marioT1Stays")}
    //     , 8401);







// blok1.addEventListener('mousemove', ()=>{
//     blok1.classList.add('hoverBlokjeSpringtOmhoog')
// })
// blok1.addEventListener('mouseleave', ()=>{
//     blok1.classList.remove('hoverBlokjeSpringtOmhoog')
// })





