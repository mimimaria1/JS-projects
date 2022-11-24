let firstCard = 18;
let secondCard = 8;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
console.log(messageEl);

function startGame() {
  if (sum < 21) {
    console.log("Draw another card?");
  } else if (sum === 21) {
    console.log("Wohooo! BLACKJACK BISH");
    hasBlackJack = true;
  } else {
    console.log("Your out, bye BISH");
    isAlive = false;
  }
}

messageEl.textContent = message;
