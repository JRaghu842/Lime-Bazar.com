let LsData = JSON.parse(localStorage.getItem("products")) || [];

let prodimg = document.getElementById("prodimg");
let nameing = document.getElementById("name");
let brand = document.getElementById("brand");

let cost = document.getElementById("cost");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let saved = document.getElementById("saved");

let occasion = document.getElementById("occasion");
let brandname = document.getElementById("brand");
let color = document.getElementById("color");
let country = document.getElementById("country");
let lengths = document.getElementById("length");
let lengthcms = document.getElementById("lengthcms");
let material = document.getElementById("material");
let prints = document.getElementById("print");
let code = document.getElementById("code");
let contains = document.getElementById("contains");
let type = document.getElementById("type");
let work = document.getElementById("work");


prodimg.src = LsData.img;
nameing.innerHTML = `Title : ${LsData.title}`;
brand.innerHTML = `Brand : ${LsData.brand}`;

cost.innerHTML = `:- ₹ ${Number(LsData.price)}`;
discount.innerHTML = `:- ${10}% `;
total.innerHTML = Number(LsData.price) - Math.ceil(Number(LsData.price) / 10);
saved.innerHTML = `:- ₹ ${Math.ceil(Number(LsData.price) / 10)}`;

occasion.innerHTML = `occasion : ${LsData.occasion}`;
brandname.innerHTML = `Brand name : ${LsData.brand}`;
color.innerHTML = `color : ${LsData.color}`;
country.innerHTML = `country of origin : ${LsData.country}`;
lengths.innerHTML = `length : ${LsData.lengths}`;
lengthcms.innerHTML = `length (cms) : ${LsData.lengthcms}`;
material.innerHTML = `material : ${LsData.material}`;
prints.innerHTML = `print & pattern : ${LsData.prints}`;
code.innerHTML = `product code : ${LsData.code}`;
contains.innerHTML = `product contains : ${LsData.contains}`;
type.innerHTML = `type : ${LsData.type}`;
work.innerHTML = `work : ${LsData.work}`;


let buttons = document.querySelectorAll(".btn");

let count = 0;
for (let button of buttons) {
  button.addEventListener("click", function () {
    localStorage.setItem("size", button.innerHTML);
    count++;
  });
}

let addToCart = document.getElementById("addtocart");
let cartData = JSON.parse(localStorage.getItem("addingToCart")) || [];
addToCart.addEventListener("click", function () {
  if (count == 0) {
    alert("Please select the size");
  } else if (CheckDuplicate(LsData)) {
    alert("Product Already in cart");
  } else {
    cartData.push(LsData);
    localStorage.setItem("addingToCart", JSON.stringify(cartData));
    alert("Product Added to cart");
    window.location.assign("/cart.html");
  }
 window.location.assign("cart.html")
});



function CheckDuplicate(product) {
  for (let i = 0; i < cartData.length; i++) {
    if (cartData[i].id === product.id) {
      return true;
    }
  }
  return false;
}

logo.addEventListener("click", () => {
  window.location.assign("index.html");
});

men.addEventListener("click", () => {
  window.location.assign("categoryPage/category.html");
});

cart.addEventListener("click", () => {
  window.location.assign("cart/cart.html");
});

login.addEventListener("loginlink", () => {
  window.location.assign("login/login.html");
});
