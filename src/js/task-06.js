const input = document.querySelector("#validation-input");
const inputLength = input.dataset.length;

input.addEventListener("blur", (event) => {
	if (event.target.value.length == Number(inputLength)) {
		input.classList.add("valid");
		input.classList.remove("invalid");
	} else {
		input.classList.remove("valid");
		input.classList.add("invalid");
	}
});