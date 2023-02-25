let form = document.getElementById("form")
let form1 = document.getElementById("form1")
form.addEventListener("submit", (e) => {
	e.preventDefault()
	let userinput = document.getElementById("contact")
	console.log(userinput.value.length)


	if (userinput.value.length >= 10) {

		let otpp = '';
		for (let i = 0; i < 4; i++) {
			otpp += Math.floor(Math.random() * 10)
		}
		alert(otpp)
	}
})


form1.addEventListener("submit", (e) => {
	let validation = document.getElementById("verify")
	e.preventDefault();

	if (validation.value.length >= 4) {
		//window.location.href =""

		console.log("hi")
	}
})
