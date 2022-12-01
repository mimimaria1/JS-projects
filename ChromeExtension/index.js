let myLeads = ["www.royalexclusif.com", "www.cz.nl", "www.pidz.nl"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + "</li>";
}

ulEl.innerHTML = listItems;

console.log(listItems);
