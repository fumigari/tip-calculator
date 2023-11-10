//selectors
const billInput = document.querySelector(".bill-input");
const buttons = document.querySelectorAll(".percentage");
const customInput = document.querySelector(".percentage-input");
const peopleInput = document.querySelector(".people-input");
const errorMessage = document.querySelector(".error-message");
const resetButton = document.querySelector(".reset-button");

const totalPrice = document.querySelector(".total-price");
const tipPrice = document.querySelector(".tip-price");

let currentBill, currentPercentage, currentPeople;

//event listeners
billInput.addEventListener("keyup", () => {
	currentBill = billInput.value;
	verifier();
	handleReset();
});

buttons.forEach(button => {
	button.addEventListener("click", event => {
		document.querySelector(".percentage.active")?.classList.remove("active");
		event.currentTarget.classList.add("active");
		currentPercentage = event.currentTarget.getAttribute("data-value");
		customInput.value = "";
		verifier();
		handleReset();
	});
});

customInput.addEventListener("keyup", () => {
	document.querySelector(".percentage.active")?.classList.remove("active");
	currentPercentage = customInput.value;
	verifier();
	handleReset();
});

peopleInput.addEventListener("keyup", () => {
	if(peopleInput.value < 1){
		peopleInput.style.outline = "none";
		peopleInput.style.border = "2px solid red"
		errorMessage.textContent = "Can't be zero";
		return;
	}

	peopleInput.style.outline = null;
	peopleInput.style.border = "2px solid var(--strong-cyan)";
	errorMessage.textContent = "";
	currentPeople = +peopleInput.value;

	verifier();
	handleReset();
})

resetButton.addEventListener("click", () => {
	document.querySelector(".reset-button").classList.add("disabled");
	clearAllFields();
});

//functions
function calculateTip(bill, percent, person) {
  const totalTip = (bill * percent) / 100;
  const tip = totalTip / person;
	const total = (parseFloat(bill) + parseFloat(totalTip)) / person;

  return { tip: tip, total: total };
}

function renderPrices(object) {
	tipPrice.textContent = object.tip.toFixed(2);
	totalPrice.textContent = object.total.toFixed(2);
};


function verifier() {
 	if (
		currentBill === undefined || 
		currentPercentage === undefined || 
		currentPeople === undefined) {
		return;
	}

  renderPrices(calculateTip(currentBill, currentPercentage, currentPeople));
};

function handleReset() {
	return document.querySelector(".reset-button.disabled")?.classList.remove("disabled");
};

function clearAllFields() {
	document.querySelector(".percentage.active")?.classList.remove("active");
	document.querySelector(".white-container").reset();
}