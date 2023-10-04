

// JavaScript Document
console.log("hi");

// variabelen

hamburgerMenu = document.querySelector(".menuIngeklapt");
hamburgerKnop = document.querySelector(".hamburgerKnop");

menuAchtergrond = document.querySelector("body>div");

zoekKnop = document.querySelector("#zoekKnop");
zoekArticle = document.querySelector(".zoekArticle");

navBar = document.querySelector("nav");

// zoekknop uitklappen

zoekKnop.onclick = zoekKnopUitklappen;

function zoekKnopUitklappen(){
zoekArticle.classList.toggle("zoekNavUitgeklapt");
menuAchtergrond.classList.toggle("zwartAchtergrond");
}

// menu inklappen

menuAchtergrond.onclick = menuInklappen;

function menuInklappen(){
    zoekArticle.classList.remove("zoekNavUitgeklapt")
    menuAchtergrond.classList.remove("zwartAchtergrond")
}


// hamburger menu

hamburgerKnop.onclick = menuUitklappen;

function menuUitklappen(){
    hamburgerMenu.classList.toggle("menuUitgeklapt");
}   