let total = document.getElementById("total");
let amount = document.getElementById("amount");

let data = JSON.parse(localStorage.getItem("amount"));
total.innerText = data;
amount.innerText = data;

let payButton = document.getElementById("button");
payButton.addEventListener("click", () => {
  window.location.href = "/payment.html";
});
