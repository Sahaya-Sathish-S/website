/* GET EVENT NAME FROM URL */

const params = new URLSearchParams(window.location.search);

const eventName = params.get("event");

if(eventName){

document.getElementById("eventTitle").innerText =
eventName + " Registration";

}



/* FORM SUBMIT */

document.getElementById("registrationForm")
.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("successPopup")
.classList.add("show");

});