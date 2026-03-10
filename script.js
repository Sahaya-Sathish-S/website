window.addEventListener("scroll", function () {

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let position = card.getBoundingClientRect().top;
let screenPosition = window.innerHeight;

if(position < screenPosition - 100){

card.classList.add("show");

}

});

});