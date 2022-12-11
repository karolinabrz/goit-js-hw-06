let $input = document.querySelector("#name-input");
let $output = document.querySelector("#name-output");

$input.addEventListener("input", inputChange);

function inputChange(e) {
	$input = e.currentTarget.value;
	if ($input !== "") {
		$output.textContent = e.currentTarget.value;
	} else {
		$output.textContent = "Anonymous";
	}
}