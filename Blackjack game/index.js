let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Draw another card?";
  } else if (sum === 21) {
    message = "Wohooo! BLACKJACK!!!";
    hasBlackJack = true;
  } else {
    message = "Your out, bye!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  console.log("Draw new card!");
  let card = 3;
  sum += card;
  renderGame();
}
