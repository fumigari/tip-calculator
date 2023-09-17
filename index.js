//selectors
const buttons = document.querySelectorAll(".percentage");
//event listeners

buttons.forEach(button => {
	button.addEventListener("click", event => {
		document.querySelector(".percentage.active")?.classList.remove("active");
		event.currentTarget.classList.add("active");
	})
})

//function

