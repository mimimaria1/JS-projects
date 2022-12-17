//make the input button work with onclick
function saveLead() {
  console.log("Button clicked from onclick(htmlfile)");
}

//Refactor to addEventListener
let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  console.log("Button clicked from addEventlistener");
});

// addEventListener
let box = document.getElementById("box");

box.addEventListener("click", function () {
  console.log("I want to open the box!");
});
// is handy so you dont need to write the onclick in the html file

//How to get value from input field
var text = document.getElementById("text");
window.onload = function () {
  text.addEventListener("input", function () {
    console.log(text.value);
  });
};

//Use a for loop to log out leads
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}

//Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
  ulEl.textContent += myLeads[i] + " ";
}

//How to render <li> elements with innerHTML
for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}

//Use .innerHTML to render a Buy! button inside the div container
const container = document.getElementById("container");
container.innerHTML = "<button>Buy!</button>";

//You can use createElement() and append() instead of innerHTML
for (let i = 0; i < myLeads.length; i++) {
  const li = document.createElement("li");
  li.textContent = myLeads[i];
  ulEl.append(li);
}

//Add the item to the listItems variable instead of the ulEl.innerHTML
let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + "</li>";
}

ulEl.innerHTML = listItems;
console.log(listItems);

//Create a template string
const recipient = "Maria";
const sender = "Lisa";
const message = `Hey ${recipient}! How is it going?`;
console.log(message);

//localStorage.setItem(key, value)
localStorage.setItem("myName", "Maria");
//localStorage.getItem(key)
let name = localStorage.getItem("myName");
console.log(myName);
//localStorage.clear()
localStorage.clear();
//Local storage only stores strings so if
//you want to store other types of data you
//need to convert it to JSON before:
localStorage.setItem("cart", JSON.stringify(["apple", "banana"]));

//And to retrieve it you need to convert it from JSON
const cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart); //prints ['apple', 'banana']

let myLeads = `["www.wikipedia.com"]`;
//turn the myLeads into an array
myLeads = JSON.parse(myLeads);
//push a new value to the array
myLeads.push("www.google.com");
//turn the array in to a string
myLeads - JSON.stringify(myLeads);
// console log with typeof to verify the string
console.log(typeof myLeads);

//truthy and falsy statements
const credits = 12;
if (credits > 0) {
  console.log("Lets play!");
} else {
  console.log("Sorry, you have no credits");
}
//the if () can also be (credits) or (12) or (0) it will still give the same valuee

//Falsy values
// false;
// 0;
// ("");
// null; //how a developer see emptiness
// undefined; //how a javascript see an emptiness
// NaN; //almost never used
// s;
