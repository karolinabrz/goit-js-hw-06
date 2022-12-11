function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const $button = document.querySelector("button");
const $span = document.querySelector("span");
const $spanText = $span.textContent;
const $body = document.querySelector("body");

$button.addEventListener("click", () => {
	$span.innerHTML = getRandomHexColor();
	$body.style.background = getRandomHexColor();
});