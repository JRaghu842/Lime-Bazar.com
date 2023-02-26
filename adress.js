let total=document.getElementById("total")
let amount=document.getElementById("amount")

let data=JSON.parse(localStorage.getItem("amount"))
total.innerText=data
amount.innerText=data

let payButton=document.getElementById("pay")
payButton.addEventListener("click",()=>{
window.location.assign("payment.html")
})