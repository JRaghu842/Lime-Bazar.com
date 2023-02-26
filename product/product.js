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
nameing.innerHTML = LsData.title;
brand.innerHTML = LsData.brand;

cost.innerHTML = `₹ ${Number(LsData.price)}`;
discount.innerHTML = `${10}% `;
total.innerHTML = `₹ ${Math.ceil(Number(LsData.price) / 10)}`;
saved.innerHTML = Number(LsData.price) - Math.ceil(Number(LsData.price) / 10);

occasion.innerHTML = LsData.occasion;
brandname.innerHTML = LsData.brand;
color.innerHTML = LsData.color;
country.innerHTML = LsData.country;
lengths.innerHTML = LsData.lengths;
lengthcms.innerHTML = LsData.lengthcms;
material.innerHTML = LsData.material;
prints.innerHTML = LsData.prints;
code.innerHTML = LsData.code;
contains.innerHTML = LsData.contains;
type.innerHTML = LsData.type;
work.innerHTML = LsData.work;

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
  }
});



function CheckDuplicate(product) {
  for (let i = 0; i < cartData.length; i++) {
    if (cartData[i].id === product.id) {
      return true;
    }
  }
  return false;
}
