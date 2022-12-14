("use strict");
const { log } = console;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const $inputElement = document.querySelector("input");
const $createButton = document.querySelector("[data-create]");
const $destroyButton = document.querySelector("[data-destroy]");
const $divBox = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    let element = document.createElement("div");

    if (i > 0) {
      width += 10;
      height += 10;
    }

    element.style.width = `${width}px`;
    element.style.height = `${height}px`;

    element.style.backgroundColor = getRandomHexColor();
    $divBox.insertAdjacentElement("afterbegin", element);
    $inputElement.disabled = true;
    $createButton.disabled = true;
  }
};

$createButton.addEventListener("click", (e) => {
  createBoxes($inputElement.value);
});

$destroyButton.addEventListener("click", (e) => {
  $inputElement.disabled = false;
  $createButton.disabled = false;
  while ($divBox.firstChild) {
    $divBox.firstChild.remove();
  }
});
