//selectors
const billInput = document.querySelector(".bill-input");
const buttons = document.querySelectorAll(".percentage");
const customInput = document.querySelector(".percentage-input");
const resetButton = document.querySelector(".reset-button");

//event listeners
billInput.addEventListener("keyup", () => {
	handleBill(billInput.value);
	handleReset();
});

buttons.forEach(button => {
	button.addEventListener("click", event => {
		document.querySelector(".percentage.active")?.classList.remove("active");
		event.currentTarget.classList.add("active");
		console.log(event.currentTarget.getAttribute("data-value"));
		handleReset();
	});
});

customInput.addEventListener("focus", () => {
	document.querySelector(".percentage.active")?.classList.remove("active");
	handleReset();
});

customInput.addEventListener("keyup", () => {
	console.log(customInput.value);
	handleReset();
});

resetButton.addEventListener("click", () => {
	document.querySelector(".reset-button").classList.add("disabled");
});

//functions
function handleBill(value) {
	return Number.parseFloat(value).toFixed(2);
};

function handleReset() {
	return document.querySelector(".reset-button.disabled")?.classList.remove("disabled");
};
