let total = document.getElementById("total");
let amount = document.getElementById("amount");

let data = JSON.parse(localStorage.getItem("amount"));
total.innerText = data;
amount.innerText = data;

let payButton = document.getElementById("button");
payButton.addEventListener("click", () => {
  window.location.assign("payment.html");
});

let logoimg = document.getElementById("logoimg");

logoimg.addEventListener("click", () => {
  window.location.assign("./index.html");
});
