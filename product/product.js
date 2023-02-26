let buttons = document.querySelectorAll(".btn");

let count = 0;
for (let button of buttons) {
  button.addEventListener("click", function () {
    localStorage.setItem("size", button.innerHTML);
    count++;
  });
}

let addToCart = document.getElementById("addtocart");
// let cartData = JSON.parse(localStorage.getItem("addingToCart")) || []
addToCart.addEventListener("click", function () {
  if (count > 1) {
    // cartData.push(***)
    // localStorage.setItem("addingTOCart",JSON.stringify(****) {

    // })

    console.log("Yes you have selected an item");
  }
});
