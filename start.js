var elementsBox = document.getElementById("numElmts");
var elementsBoxButton = document.getElementById("submitNumElmts");
elementsBoxButton.addEventListener("click", getNumElements);
var numElements = 0;

function getNumElements() {
  numElements = elementsBox.value;
  localStorage.setItem("numElements", numElements);
}