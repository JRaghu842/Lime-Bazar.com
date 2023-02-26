let url = "https://testapi2-9psr.onrender.com/";

let form = document.getElementById("register-form");
let username = document.getElementById("name");
let password = document.getElementById("password");


form.addEventListener("submit", login_user_data);

async function login_user_data(event) {
  event.preventDefault();
  let obj = {
    name: username.value,
   password: password.value,
   
  };

  let login_request = await fetch(`${url}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  let response = await login_request.json();
  console.log(response);

   window.location.href='adminpage.html'
   alert("Hey..Admin welcome to Admin section")
}

