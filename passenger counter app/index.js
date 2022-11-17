// document.getElementById("count-el").innerText = 5;
//--------------------------------------------------------
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

console.log("Let's count people on the subway!");

//Learned about; script tag, variables, numbers,
//strings, console.log(), functions, the DOM,
// getElementById(), innerText and textContent
