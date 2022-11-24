let firstCard = 13;
let secondCard = 8;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Draw another card?";
  } else if (sum === 21) {
    message = "Wohooo! BLACKJACK BISH";
    hasBlackJack = true;
  } else {
    message = "Your out, bye BISH";
    isAlive = false;
  }
  messageEl.textContent = message;
}
