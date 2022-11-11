// JavaScript Document
console.log("Super Mario Bros!");

var marioT1 = document.querySelector("main section ul li:nth-of-type(1) img:nth-of-type(1)");
var mario1 = document.querySelector("main section ul li:nth-of-type(1) img:nth-of-type(2)");
var blok1 = document.querySelector("main section ul li:nth-of-type(1) button");
var mario1985_H1 = document.querySelector("main section h1:nth-of-type(1)");
var mario1988_H1 = document.querySelector("main section h1:nth-of-type(2)");
var background1988 = document.querySelector("main section:nth-of-type(2) img:nth-of-type(1)");

var marioT2 = document.querySelector("main section ul li:nth-of-type(2) img:nth-of-type(1)");
var blok2 = document.querySelector("main section ul li:nth-of-type(2) button");
var mario1990_H1 = document.querySelector("main section h1:nth-of-type(3)");
var background1990 = document.querySelector("main section:nth-of-type(2) img:nth-of-type(2)");

var marioT3 = document.querySelector("main section ul li:nth-of-type(3) img:nth-of-type(1)");
var blok3 = document.querySelector("main section ul li:nth-of-type(3) button");
var mario1991_H1 = document.querySelector("main section h1:nth-of-type(4)");
var background1991 = document.querySelector("main section:nth-of-type(2) img:nth-of-type(3)");

var marioT4 = document.querySelector("main section ul li:nth-of-type(4) img:nth-of-type(1)");
var blok4 = document.querySelector("main section ul li:nth-of-type(4) button");
var mario1996_H1 = document.querySelector("main section h1:nth-of-type(5)");
var background1996 = document.querySelector("main section:nth-of-type(2) img:nth-of-type(4)");

var marioT5 = document.querySelector("main section ul li:nth-of-type(5) img:nth-of-type(1)");
var blok5 = document.querySelector("main section ul li:nth-of-type(5) button");
var mario2002_H1 = document.querySelector("main section h1:nth-of-type(6)");
var background2002 = document.querySelector("main section:nth-of-type(2) img:nth-of-type(5)");

var marioT6 = document.querySelector("main section ul li:nth-of-type(6) img:nth-of-type(1)");
var blok6 = document.querySelector("main section ul li:nth-of-type(6) button");
var mario2007_H1 = document.querySelector("main section h1:nth-of-type(7)");
var background2007 = document.querySelector("main section:nth-of-type(2) img:nth-of-type(6)");

var marioT7 = document.querySelector("main section ul li:nth-of-type(7) img:nth-of-type(1)");
var blok7 = document.querySelector("main section ul li:nth-of-type(7) button");
var mario2012_H1 = document.querySelector("main section h1:nth-of-type(8)");
var background2012 = document.querySelector("main section:nth-of-type(2) img:nth-of-type(7)");

var vraagtekenBlokjes = document.querySelector("main section:nth-of-type(1) ul li");
var audio = document.querySelector("main audio:first-of-type");

// var audiospringen = new Audio("main audio:first-of-type");


blok1.addEventListener("click", marioNaarBlok1);

function marioNaarBlok1() {

    console.log("Mario springt omhoog");

    mario1.classList.add("omhoogSpringen")
    if (audio.play() !== undefined) {
        audio.play().then(function() {
          // Automatic playback started!
        }).catch(function(error) {
          // Automatic playback failed.
        });
    }
 
    setTimeout(function(){
    background1988.classList.add("achtergrondZichtbaar")
    mario1985_H1.classList.add("hidden")
    mario1988_H1.classList.add("visible")}
    , 900);

    blok1.classList.add("blokjeKnippert");
    
    setTimeout(function(){
        console.log("Mario 1988 verschijnt")
        marioT1.classList.add("marioVerschijnt")}
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
        marioT1.classList.add("nieuweMarioBlijft")}
        , 4500);
}

blok2.addEventListener("click", marioNaarBlok2);

function marioNaarBlok2() {

    setTimeout(function(){
        console.log("Mario 1988 gaat naar blok 2")
        marioT1.classList.add("marioOpzijEnOmhoog")}
        , 500);

    setTimeout(function(){
        audio.play()}
        , 2300);

    setTimeout(function(){
        console.log("Blokje 2 knippert")
        blok2.classList.add("blokjeKnippert")
        background1990.classList.add("achtergrondZichtbaar")
        mario1988_H1.classList.remove("visible")
        mario1990_H1.classList.add("visible")
        if (audio.play() !== undefined) {
            audio.play().then(function() {
              // Automatic playback started!
            }).catch(function(error) {
              // Automatic playback failed.
            });
        }}
        , 2500); //schalen bij springen

    setTimeout(function(){
        console.log("Mario 1990 verschijnt en valt naar beneden")
        marioT2.classList.add("marioVerschijnt")}
        , 4900);

    setTimeout(function(){
        console.log("Blokje 2 gaat weg")
        blok2.classList.add("blokjeVerdwijnt")}
        , 5500);

    setTimeout(function(){
        console.log("Mario 1988 verdwijnt")
        marioT1.classList.remove("marioVerschijnt")}
        , 8400); 

    setTimeout(function(){
        console.log("Mario 1990 blijft")
        marioT2.classList.add("nieuweMarioBlijft")}
        , 8401);
}


blok3.addEventListener("click", marioNaarBlok3);

function marioNaarBlok3() {

    setTimeout(function(){
        console.log("Mario 1990 gaat opzij en omhoog")
        marioT2.classList.add("marioOpzijEnOmhoog")}
        , 500);

    setTimeout(function(){
        if (audio.play() !== undefined) {
            audio.play().then(function() {
              // Automatic playback started!
            }).catch(function(error) {
              // Automatic playback failed.
            });
        }}
        , 2100);

    setTimeout(function(){
        console.log("Blokje 3 knippert")
        blok3.classList.add("blokjeKnippert")
        background1991.classList.add("achtergrondZichtbaar")
        mario1990_H1.classList.remove("visible")
        mario1991_H1.classList.add("visible")}
        , 2500);

    setTimeout(function(){
        console.log("Mario 1991 verschijnt en valt naar beneden")
        marioT3.classList.add("marioVerschijnt")}
        , 4900);

    setTimeout(function(){
        console.log("Blokje 3 verdwijnt")
        blok3.classList.add("blokjeVerdwijnt")}
        , 5500);

    setTimeout(function(){
        console.log("Mario 1990 verdwijnt")
        marioT2.classList.remove("marioVerschijnt")}
        , 8400); 

    setTimeout(function(){
        console.log("Mario 1991 blijft")
        marioT3.classList.add("nieuweMarioBlijft")}
        , 8401);
}

blok4.addEventListener("click", marioNaarBlok4);

function marioNaarBlok4() {

    setTimeout(function(){
        console.log("Mario 1991 gaat opzij en omhoog")
        marioT3.classList.add("marioOpzijEnOmhoog")}
        , 500);

    setTimeout(function(){
        if (audio.play() !== undefined) {
            audio.play().then(function() {
              // Automatic playback started!
            }).catch(function(error) {
              // Automatic playback failed.
            });
        }}
        , 2100);

    setTimeout(function(){
        console.log("Blokje 4 knippert")
        blok4.classList.add("blokjeKnippert")
        background1996.classList.add("achtergrondZichtbaar")
        mario1991_H1.classList.remove("visible")
        mario1996_H1.classList.add("visible")}
        , 2500);

    setTimeout(function(){
        console.log("Mario 2002 verschijnt en valt naar beneden")
        marioT4.classList.add("marioVerschijnt")}
        , 4900);

    setTimeout(function(){
        console.log("Blokje 4 verdwijnt")
        blok4.classList.add("blokjeVerdwijnt")}
        , 5500);

    setTimeout(function(){
        console.log("Mario 1991 verdwijnt")
        marioT3.classList.remove("marioVerschijnt")}
        , 8400); 

    setTimeout(function(){
        console.log("Mario 2002 blijft")
        marioT4.classList.add("nieuweMarioBlijft")}
        , 8401);
}

blok5.addEventListener("click", marioNaarBlok5);

function marioNaarBlok5() {

    console.log("marioNaarBlok5")

    setTimeout(function(){
        console.log("Mario 2002 gaat opzij en omhoog")
        marioT4.classList.add("marioOpzijEnOmhoog")}
        , 501);

    setTimeout(function(){
        if (audio.play() !== undefined) {
            audio.play().then(function() {
              // Automatic playback started!
            }).catch(function(error) {
              // Automatic playback failed.
            });
        }}
        , 2100);

    setTimeout(function(){
        console.log("Blokje 5 knippert")
        blok5.classList.add("blokjeKnippert")
        background2002.classList.add("achtergrondZichtbaar")
        mario1996_H1.classList.remove("visible")
        mario2002_H1.classList.add("visible")}
        , 2500);

    setTimeout(function(){
        console.log("Mario 2007 verschijnt en valt naar beneden")
        marioT5.classList.add("marioVerschijnt")}
        , 4901);

    setTimeout(function(){
        console.log("Blokje 5 verdwijnt")
        blok5.classList.add("blokjeVerdwijnt")}
        , 5501);

    setTimeout(function(){
        console.log("Mario 2002 verdwijnt")
        marioT4.classList.remove("marioVerschijnt")}
        , 8401); 

    setTimeout(function(){
        console.log("Mario 2007 blijft")
        marioT5.classList.add("nieuweMarioBlijft")}
        , 8402);
}

blok6.addEventListener("click", marioNaarBlok6);

function marioNaarBlok6() {

    console.log("marioNaarBlok6")

    setTimeout(function(){
        console.log("Mario 1991 gaat opzij en omhoog")
        marioT5.classList.add("marioOpzijEnOmhoog")}
        , 500);

    setTimeout(function(){
        if (audio.play() !== undefined) {
            audio.play().then(function() {
              // Automatic playback started!
            }).catch(function(error) {
              // Automatic playback failed.
            });
        }}
        , 2100);

    setTimeout(function(){
        console.log("Blokje 6 knippert")
        blok6.classList.add("blokjeKnippert")
        background2007.classList.add("achtergrondZichtbaar")
        mario2002_H1.classList.remove("visible")
        mario2007_H1.classList.add("visible")}
        , 2500);

    setTimeout(function(){
        console.log("Mario 2002 verschijnt en valt naar beneden")
        marioT6.classList.add("marioVerschijnt")}
        , 4900);

    setTimeout(function(){
        console.log("Blokje 6 verdwijnt")
        blok6.classList.add("blokjeVerdwijnt")}
        , 5500);

    setTimeout(function(){
        console.log("Mario 1991 verdwijnt")
        marioT5.classList.remove("marioVerschijnt")}
        , 8400); 

    setTimeout(function(){
        console.log("Mario 2007 blijft")
        marioT6.classList.add("nieuweMarioBlijft")}
        , 8401);
}



blok7.addEventListener("click", marioNaarBlok7);

function marioNaarBlok7() {

    console.log("marioNaarBlok7")

    setTimeout(function(){
        console.log("Mario 2007 gaat opzij en omhoog")
        marioT6.classList.add("marioOpzijEnOmhoog")}
        , 500);

    setTimeout(function(){
        if (audio.play() !== undefined) {
            audio.play().then(function() {
              // Automatic playback started!
            }).catch(function(error) {
              // Automatic playback failed.
            });
        }}
        , 2300);

    setTimeout(function(){
        console.log("Blokje 7 knippert")
        blok7.classList.add("blokjeKnippert")
        background2012.classList.add("achtergrondZichtbaar")
        mario2007_H1.classList.remove("visible")
        mario2012_H1.classList.add("visible")}
        , 2500);

    setTimeout(function(){
        console.log("Mario 2012 verschijnt en valt naar beneden")
        marioT7.classList.add("marioVerschijnt")}
        , 4900);

    setTimeout(function(){
        console.log("Blokje 7 verdwijnt")
        blok7.classList.add("blokjeVerdwijnt")}
        , 5500);

    setTimeout(function(){
        console.log("Mario 2007 verdwijnt")
        marioT6.classList.remove("marioVerschijnt")}
        , 8400); 

    setTimeout(function(){
        console.log("Mario 2012 blijft")
        marioT7.classList.add("nieuweMarioBlijft")}
        , 8401);
}

