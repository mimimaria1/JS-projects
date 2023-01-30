const cardObjectDefinitions = [
  { id: 1, imagePath: "/images/card-KingHearts.png" },
  { id: 2, imagePath: "/images/card-JackClubs.png" },
  { id: 3, imagePath: "/images/card-QueenDiamonds.png" },
  { id: 4, imagePath: "/images/card-AceSpades.png" },
];

function createCard(cardItem) {
  //create div elements that make up a card
  const cardElem = document.createElement("div");
  const cardInnerElem = document.createElement("div");
  const cardFrontElem = document.createElement("div");
  const cardBlackElem = document.createElement("div");

  //create front and back image elements for a card
  const cardFrontImg = createElement("img");
  const cardBlackImg = createElement("img");
}

function createElement(elemType) {
  return document.createElement(elemType);
}

function adddClassToElement() {}
