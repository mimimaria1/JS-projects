const cardObjectDefinitions = [
  { id: 1, imagePath: "/images/card-KingHearts.png" },
  { id: 2, imagePath: "/images/card-JackClubs.png" },
  { id: 3, imagePath: "/images/card-QueenDiamonds.png" },
  { id: 4, imagePath: "/images/card-AceSpades.png" },
];

const cardBlackImgPath = "/images/card-back-blue.png";

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
  addSrcToImageElem(cardBackElem, cardBackImgPath);
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
