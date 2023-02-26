let url = "https://testapi2-9psr.onrender.com/";

let form = document.getElementById("register-form");
let username = document.getElementById("name");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let password = document.getElementById("password");
let email = document.getElementById("email");
let number = document.getElementById("Number");

form.addEventListener("submit", register_user_data);

async function register_user_data(event) {
  event.preventDefault();
  let obj = {
    name: username.value,
    firstname: firstname.value,
    lastname: lastname.value,
    password: password.value,
    email: email.value,
    number: number.value,
  };

  let register_request = await fetch(`${url}registeruser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  let response = await register_request.json();
  console.log(response);

  window.location.href='loginadmin.html'
}

