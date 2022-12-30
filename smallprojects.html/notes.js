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

//
let trueOfFalse = Boolean("hello");
console.log(trueOfFalse);
//would return true
let trueOrFalse = Boolean("");
console.log(trueOfFalse);
//would return false

//Truthy or Falsy
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(100)); // true
console.log(Boolean(null)); // false
console.log(Boolean([0])); // true
console.log(Boolean(-0)); // false

//function for calling a name
function greetUser(name) {
  welcomeEl.textContent = "Welcome back, " + name;
}
greetUser("Maria");

//Or
function greetUser(greeting) {
  welcomeEl.textContent = greeting + ", Maria!";
}
greetUser("Helloooww");

//Or
function greetUser(greeting, name) {
  welcomeEl.textContent = greeting + ", " + name + " !";
}
greetUser("Helloooww", "James");

//template literals
welcomeEl.textContent = `${greeting} , ${name} !`;

// add the ability to choose the emoji
function greetUser(greeting, name, emoji) {
  welcomeEl.textContent = `${greeting} , ${name} ${emoji}!`;
}
greetUser("Hello", "Maria", "😃");

//function that adds two numbers together and returns the sum
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 4)); //should log 7
console.log(add(9, 102)); //should log 111

//parameters are created INSIDE the function 
function greetUser(greeting, name, emoji)
//arguments are created OUTISDE of the function
greetUser("Hello", "Maria")

//create a function that returns the first item in the array
function getFirst(arr) {
  return arr[0]
}
let firstCard = getFirst([10,2,9])
console.log(firstCard)

//learned: 
//const variable, 
//addEventListener(), 
//innerHTML, 
//input.value, 
//function parameters, 
//template strings, 
//localStorage,
//JSON object
//objects in arrays

//PRACTISES/////////////////////

//create a function that takes a single parameter, an array,
//and logs all the items of the array to the console
//call the function while passing in myCourses as an argument
let myCourses = ["HTML", "CSS", "JAVASCRIPT"]

function logItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
logItems(myCourses)

//Save value to localStorage
//delete your code and refresh the page
//fetch your value from localStorage and log it out

localStorage.setItem("myCredits", "100") >>DELETE 

let myCredits = localStorage.getItem("myCredits")
console.log(myCredits)

//fetch the button from the DOM, store it in a variable
const janeBtn =  document.getElementById("jane-btn")
//use addEventlistener() to listen for button clicks
janeBtn.addEventListener("click", function(){
  console.log(data[0].score)
})
//log jane's score when the button is clicked (via data)

let data = [
  {
    player: "Jane",
    score: 52
  },
  {
    player: "Mark",
    score: 41
  }
]
//--------------
//the function takes two parameters: a descripction and an array.
//It should return a string based upon the description and array
function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are`
  const lastIndex = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if ( i === lastIndex) {
      baseString += arr[i]
    } else {
      baseString += arr[i] + ", "
    }
  }
  return baseString
}

const sentence = generateSentence("highest mountain", ["mount everest", "k2"])
console.log(sentence)

//create a function that renders the three team images
//use a for loop, template strings (``), plus equals (+=)
//.innerHTML to solve the problem
const images = [
  "image1"
  "image2"
  "image3"
]

const container = document.getElementById("container")
function renderImages() {
  let imagesDOM = ""
  for(let i = 0; i < images.length; i++) {
    imagesDOM += `<img alt="Employee" class="team-img" src="${imgs[i]}">`
  }
  container.innerHTML = imagesDOM
}

renderImages()


//continue learning
//basic JS FTW
//ES6 and beyond
//APIs & async JavaScript
//server-side JavaScript
//credit to Per Harald Borg