let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
	e.preventDefault()
	let userinput = document.getElementById("contact")
	console.log(userinput.length)


	if (userinput.value.length >= 10) {
		userinput.style.Color = "red"
	}

})


