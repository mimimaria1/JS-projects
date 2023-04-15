const cardObjectDefinitions = [
  { id: 1, imagePath: "/images/card-KingHearts.png" },
  { id: 2, imagePath: "/images/card-JackClubs.png" },
  { id: 3, imagePath: "/images/card-QueenDiamonds.png" },
  { id: 4, imagePath: "/images/card-AceSpades.png" },
];

const aceId = 4;

const cardBlackImgPath = "/images/card-back-blue.png";

let cards = [];

const playGameButtonElem = document.getElementById();

const collapsedGridAreaTemplate = `"a a" "a a"`;
const cardCollectionCellClass = ".card-pos-a";

const numCards = cardObjectDefinitions.length;

let cardPositions = [];

let gameInProgress = false;
let shuffllingInProgress = false;
let cardsRevealed = false;

const currentGameStatusElem = document.querySelector(".current-status");
const winColor = "green";
const loseColor = "red";

loadGame();

function chooseCard() {
  function canChooseCard() {
    if (canChooseCard()) {
    }
  }
}

function updateStatusElement() {}

function outputChoiceFeedBack(hit) {
  if (hit) {
    updateStatusElement(
      currentGameStatusElem,
      "block",
      winColor,
      "Hit!! - Well Done!! :)"
    );
  } else {
    updateStatusElement(
      currentGameStatusElem,
      "block",
      loseColor,
      "Missed!! :("
    );
  }
}

function evaluateCardChoice(card) {
  if (card.id == aceId) {
    updateScore();
    outputChoiceFeedBack(true);
  } else {
    outputChoiceFeedBack(false);
  }
}

function canChooseCard() {
  return gameInProgress == true && !shuffllingInProgress && !cardRevealed;
}

function loadGame() {
  createCards();
  cards = document.querySelectorAll(".card");
  playGameButtonElem.addEventListener("click", () => startGame());
}

function startGame() {
  initializeNewGame();
  startRound();
  flipCards(true);
}
function initializeNewGame() {}

function startRound() {
  initializeNewRound();
  collectionCards();
  flipCards(true);
  shuffleCards();
}
function initializeNewRound() {}

function collectionCards() {
  transformGridArea(collapsedGridAreaTemplate);
  addCardsToGridAreaCell(cardCollectionCellClass);
}

function transformGridArea(areas) {
  cardContainerElem.style.gridTemplateAreas = areas;
}

function addCardsToGridAreaCell(cellPositionClassName) {
  const cellPositionElem = document.querySelector(cellPositionClassName);

  cards.forEach((card, index) => {
    addChildElement(cellPositionElem, card);
  });
}
function flipCard(card, flipToBack) {
  const innerCardElem = card.firstChild;
  if (flipToBack && !innerCardElem.classList.contains("flip-it")) {
    innerCardElem.classList.add("flip-it");
  } else if (innerCardElem.classList.contains("flip-it")) {
    innerCardElem.classList.remove("flip-it");
  }
}
function flipCards(flipToBack) {
  cards.forEach((card, index) => {
    setTimeout(() => {
      flipCard(card, flipToBack);
    }, index * 100);
  });
}

function shuffleCards() {
  const id = setInterval(shuffle, 12);
  let shuffleCount = 0;
  function shuffle() {
    randomCardPosition();
    if (shuffleCount == 500) {
      clearInterval(id);
      dealCards();
    } else {
      shuffleCount++;
    }
  }
}
function randomCardPosition() {
  const random1 = Math.floor(Math.random() * numCards) + 1;
  const random2 = Math.floor(Math.random() * numCards) + 1;
  const temp = cardPositions[random1 - 1];
  cardPositions[random1 - 1] = cardPositions[random2 - 1];
  cardPositions[random2 - 1] = temp;
}

function dealCards() {
  addCardToGridCell(card);
  const areasTemplate = returnGridAreasMappedToCardPos();
  transformGridArea(areasTemplate);
}

function returnGridAreasMappedToCardPos() {
  let firstPart = "";
  let secondPart = "";
  let areas = "";
  cards.forEach((card, index) => {
    if (cardPositions[index] == 1) {
      areas = areas + "a";
    } else if (cardPositions[index] == 2) {
      areas = areas + "b";
    } else if (cardPositions[index] == 3) {
      areas = areas + "c";
    } else if (cardPositions[index] == 4) {
      areas = areas + "d";
    }
    if (index == 1) {
      firstPart = areas.substring(0, areas.length - 1);
    } else if (index == 3) {
      secondPart = areas.substring(0, areas.length - 1);
    }
    return `"${firstPart}" "${secondPart}"`;
  });
}

function addCardsToAppriateCell() {
  cards.forEach((card) => {
    addCardToGridCell(card);
  });
}

function createCards() {
  cardObjectDefinitions.forEach((cardItem) => {
    createCard(cardItem);
  });
}

const cardContainerElem = document.querySelector(".card-container");

function createCard(cardItem) {
  //create div elements that make up a card
  const cardElem = document.createElement("div");
  const cardInnerElem = document.createElement("div");
  const cardFrontElem = document.createElement("div");
  const cardBlackElem = document.createElement("div");

  //create front and back image elements for a card
  const cardFrontImg = createElement("img");
  const cardBlackImg = createElement("img");

  //add class and if to card element
  addClassToElement(cardElem, "card");
  addIdToElement(cardElem, cardItem.id);

  //add class to inner card element
  addClassToElement(cardInnerElem, "card-inner");

  //add class to front card element
  addClassToElement(cardFrontElem, "card-front");

  //add class to back card element
  addClassToElement(cardBackElem, "card-back");

  //add src attribute and appropriate value to img element - back of card
  addSrcToImageElem(cardBackImg, cardBackImgPath);

  //add src attribute and appropriate value to img element - front of card
  addSrcToImageElem(cardFrontImg, cardItem.imagePath);

  //assign class to back image element of back of card
  addClassToElement(cardBackImg, "card-img");
  //assign class to back image element of front of card
  addClassToElement(cardFrontImg, "card-img");
  //add front image element as child element to front card element
  addChildElement(cardFrontElem, cardFrontImg);
  //add back image element as child element to back card element
  addChildElement(cardBackElem, cardBackImg);
  //add front card element as child element to inner card eleement
  addChildElement(cardInnerElem, cardFrontElem);
  //add back card element as child element to inner card eleement
  addChildElement(cardInnerElem, cardBackElem);
  //add inner card element as a child element to card element
  addChildElement(cardElem, cardInnerElem);
  //add card element as child element to appropiatee grid cell
  addCardToGridCell(cardElem);

  initializeCardPositions(cardElem);
}

function initializeCardPositions(card) {
  cardPositions.push(card.id);
}

function createElement(elemType) {
  return document.createElement(elemType);
}

function addClassToElement(elem, className) {
  elem.classList.add(className);
}

function addIdToElement(elem, id) {
  elem.id = id;
}

function addSrcToImageElem(imgElem, src) {
  imgElem.src = src;
}

function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem);
}

function addCardToGridCell() {
  const cardPositionClassName = mapCardIdToGridCell(card);
  const cardPosElem = document.querySelector(cardPositionClassName);
  addChildElement(cardPosElem, card);
}

function mapCardIdToGridCell(card) {
  if (card.id == 1) {
    return ".card-pos-a";
  } else if (card.id == 2) {
    return ".card-pos-b";
  } else if (card.id == 3) {
    return ".card-pos-c";
  } else if (card.id == 4) {
    return ".card-pos-d";
  }
}
