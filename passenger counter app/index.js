// document.getElementById("count-el").innerText = 5;
//--------------------------------------------------------
// select text and ~ cmd + k + c ~ to make it a comment
//--------------------------------------------------------

let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);
}
save();
