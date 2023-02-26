let total=document.getElementById("totalbill")
         

let data=JSON.parse(localStorage.getItem("amount"))
total.innerText=data

  let button = document.getElementById("form");
  button.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.assign("paymentSuccess.html")
    
  });