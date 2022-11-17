// Grab the welcome-el paragraph (inhtml) and store it into a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");

// Create 2 variables (name + greeting) that contains your name
// and we want to render the greeting variable on the page
let nombre = "Maria Nerwa";
let message = "Welcome back to the page ";

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = message + nombre;

welcomeEl.innerText = welcomeEl.innerText + "👋";
// OR the shorter way with +=
//welcomeEl.innerText += "👋";
