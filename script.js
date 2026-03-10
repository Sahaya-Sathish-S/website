/* SCROLL ANIMATION FOR CARDS */

window.addEventListener("scroll", revealCards);

function revealCards(){

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let position = card.getBoundingClientRect().top;
let screenPosition = window.innerHeight;

if(position < screenPosition - 100){

card.classList.add("show");

}

});

}



/* SMOOTH PAGE LOAD ANIMATION */

window.addEventListener("load", function(){

document.body.style.opacity = "1";

});



/* EVENT CARD CLICK → OPEN REGISTRATION PAGE */

let eventCards = document.querySelectorAll(".card");

eventCards.forEach(function(card){

card.addEventListener("click", function(){

let eventName = card.querySelector("h3").innerText;

/* redirect to registration page with event name */

window.location.href = "registration.html?event=" + encodeURIComponent(eventName);

});

});



/* COUNTDOWN TIMER */

let eventDate = new Date("April 20, 2026 09:00:00").getTime();

let timer = setInterval(function(){

let now = new Date().getTime();

let distance = eventDate - now;

let days = Math.floor(distance/(1000*60*60*24));

let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

let minutes = Math.floor((distance%(1000*60*60))/(1000*60));

let seconds = Math.floor((distance%(1000*60))/1000);

let countdown = document.getElementById("countdown");

if(countdown){

countdown.innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s";

}

if(distance < 0){

clearInterval(timer);

if(countdown){

countdown.innerHTML="Event Started";

}

}

},1000);



/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", function(){

let navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background = "rgba(0,0,0,0.8)";
navbar.style.boxShadow = "0 0 20px cyan";

}

else{

navbar.style.background = "rgba(0,0,0,0.5)";
navbar.style.boxShadow = "none";

}

});