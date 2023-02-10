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

  //add src attribute and appropriate value to img element - front of card
  addSrcToImageElem(cardFrontElem, cardItem.imagePath);

  //assign class to back image element of back of card
  addClassToElement(cardBackElem, "card-img");
  //assign class to back image element of front of card
  addClassToElement(cardFrontElem, "card-img");
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
