let image1 = document.getElementById("img1");
let price1 = document.getElementById("price1");
let brand1 = document.getElementById("brand1");

let image2 = document.getElementById("img2");
let price2 = document.getElementById("price2");
let brand2 = document.getElementById("brand2");

let image3 = document.getElementById("img3");
let price3 = document.getElementById("price3");
let brand3 = document.getElementById("brand3");

let image4 = document.getElementById("img4");
let price4 = document.getElementById("price4");
let brand4 = document.getElementById("brand4");

let image5 = document.getElementById("img5");
let price5 = document.getElementById("price5");
let brand5 = document.getElementById("brand5");

let image6 = document.getElementById("img6");
let price6 = document.getElementById("price6");
let brand6 = document.getElementById("brand6");

let image7 = document.getElementById("img7");
let price7 = document.getElementById("price7");
let brand7 = document.getElementById("brand7");

let image8 = document.getElementById("img8");
let price8 = document.getElementById("price8");
let brand8 = document.getElementById("brand8");

let image9 = document.getElementById("img9");
let price9 = document.getElementById("price9");
let brand9 = document.getElementById("brand9");

let image10 = document.getElementById("img10");
let price10 = document.getElementById("price10");
let brand10 = document.getElementById("brand10");

let image11 = document.getElementById("img11");
let price11 = document.getElementById("price11");
let brand11 = document.getElementById("brand11");

let image12 = document.getElementById("img12");
let price12 = document.getElementById("price12");
let brand12 = document.getElementById("brand12");

let image13 = document.getElementById("img13");
let price13 = document.getElementById("price13");
let brand13 = document.getElementById("brand13");

let image14 = document.getElementById("img14");
let price14 = document.getElementById("price14");
let brand14 = document.getElementById("brand14");

let image15 = document.getElementById("img15");
let price15 = document.getElementById("price15");
let brand15 = document.getElementById("brand15");

let image16 = document.getElementById("img16");
let price16 = document.getElementById("price16");
let brand16 = document.getElementById("brand16");

let image17 = document.getElementById("img17");
let price17 = document.getElementById("price17");
let brand17 = document.getElementById("brand17");

let image18 = document.getElementById("img18");
let price18 = document.getElementById("price18");
let brand18 = document.getElementById("brand18");

window.addEventListener("load", function () {
  rendering1(`https://testapi2-9psr.onrender.com/Products/96`);
  rendering2(`https://testapi2-9psr.onrender.com/Products/100`);
  rendering3(`https://testapi2-9psr.onrender.com/Products/93`);

  rendering4(`https://testapi2-9psr.onrender.com/Products/43`);
  rendering5(`https://testapi2-9psr.onrender.com/Products/48`);
  rendering6(`https://testapi2-9psr.onrender.com/Products/46`);

  rendering7(`https://testapi2-9psr.onrender.com/Products/14`);
  rendering8(`https://testapi2-9psr.onrender.com/Products/18`);
  rendering9(`https://testapi2-9psr.onrender.com/Products/19`);

  rendering10(`https://testapi2-9psr.onrender.com/Products/79`);
  rendering11(`https://testapi2-9psr.onrender.com/Products/58`);
  rendering12(`https://testapi2-9psr.onrender.com/Products/59`);

  rendering13(`https://testapi2-9psr.onrender.com/Products/97`);
  rendering14(`https://testapi2-9psr.onrender.com/Products/99`);
  rendering15(`https://testapi2-9psr.onrender.com/Products/92`);

  rendering16(`https://testapi2-9psr.onrender.com/Products/36`);
  rendering17(`https://testapi2-9psr.onrender.com/Products/35`);
  rendering18(`https://testapi2-9psr.onrender.com/Products/33`);
});

function rendering1(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image1.src = data.image;
      price1.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand1.innerHTML = `By ${data.brand}`;
    });
}

function rendering2(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image2.src = data.image;
      price2.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand2.innerHTML = `By ${data.brand}`;
    });
}

function rendering3(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image3.src = data.image;
      price3.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand3.innerHTML = `By ${data.brand}`;
    });
}

function rendering4(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image4.src = data.image;
      price4.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand4.innerHTML = `By ${data.brand}`;
    });
}

function rendering5(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image5.src = data.image;
      price5.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand5.innerHTML = `By ${data.brand}`;
    });
}

function rendering6(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image6.src = data.image;
      price6.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand6.innerHTML = `By ${data.brand}`;
    });
}

function rendering7(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image7.src = data.image;
      price7.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand7.innerHTML = `By ${data.brand}`;
    });
}

function rendering8(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image8.src = data.image;
      price8.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand8.innerHTML = `By ${data.brand}`;
    });
}

function rendering9(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image9.src = data.image;
      price9.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand9.innerHTML = `By ${data.brand}`;
    });
}

function rendering10(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image10.src = data.image;
      price10.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand10.innerHTML = `By ${data.brand}`;
    });
}

function rendering11(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image11.src = data.image;
      price11.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand11.innerHTML = `By ${data.brand}`;
    });
}

function rendering12(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image12.src = data.image;
      price12.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand12.innerHTML = `By ${data.brand}`;
    });
}

function rendering13(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image13.src = data.image;
      price13.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand13.innerHTML = `By ${data.brand}`;
    });
}

function rendering14(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image14.src = data.image;
      price14.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand14.innerHTML = `By ${data.brand}`;
    });
}

function rendering15(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image15.src = data.image;
      price15.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand15.innerHTML = `By ${data.brand}`;
    });
}

function rendering16(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image16.src = data.image;
      price16.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand16.innerHTML = `By ${data.brand}`;
    });
}

function rendering17(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image17.src = data.image;
      price17.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand17.innerHTML = `By ${data.brand}`;
    });
}

function rendering18(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image18.src = data.image;
      price18.innerHTML = `₹${data.price} <span id="off"> 10% off</span> `;
      brand18.innerHTML = `By ${data.brand}`;
    });
}

let heart1 = document.getElementById("heart1");
let heart2 = document.getElementById("heart2");
let heart3 = document.getElementById("heart3");
let heart4 = document.getElementById("heart4");
let heart5 = document.getElementById("heart5");
let heart6 = document.getElementById("heart6");
let heart7 = document.getElementById("heart7");
let heart8 = document.getElementById("heart8");
let heart9 = document.getElementById("heart9");
let heart10 = document.getElementById("heart10");
let heart11 = document.getElementById("heart11");
let heart12 = document.getElementById("heart12");
let heart13 = document.getElementById("heart13");
let heart14 = document.getElementById("heart14");
let heart15 = document.getElementById("heart15");
let heart16 = document.getElementById("heart16");
let heart17 = document.getElementById("heart17");
let heart18 = document.getElementById("heart18");
let heart19 = document.getElementById("heart19");
let heart20 = document.getElementById("heart20");
let heart21 = document.getElementById("heart21");
let heart22 = document.getElementById("heart22");
let heart23 = document.getElementById("heart23");
let heart24 = document.getElementById("heart24");

let count1 = 0;
heart1.addEventListener("click", function () {
  count1++;
  if (count1 % 2 != 0) {
    heart1.className = "fa fa-heart";
  }
  if (count1 % 2 == 0) {
    heart1.className = "fa-regular fa-heart";
  }
});

let count2 = 0;
heart2.addEventListener("click", function () {
  count2++;
  if (count2 % 2 != 0) {
    heart2.className = "fa fa-heart";
  }
  if (count2 % 2 == 0) {
    heart2.className = "fa-regular fa-heart";
  }
});

let count3 = 0;
heart3.addEventListener("click", function () {
  count3++;
  if (count3 % 2 != 0) {
    heart3.className = "fa fa-heart";
  }
  if (count3 % 2 == 0) {
    heart3.className = "fa-regular fa-heart";
  }
});

let count4 = 0;
heart4.addEventListener("click", function () {
  count4++;
  if (count4 % 2 != 0) {
    heart4.className = "fa fa-heart";
  }
  if (count4 % 2 == 0) {
    heart4.className = "fa-regular fa-heart";
  }
});

let count5 = 0;
heart5.addEventListener("click", function () {
  count5++;
  if (count5 % 2 != 0) {
    heart5.className = "fa fa-heart";
  }
  if (count5 % 2 == 0) {
    heart5.className = "fa-regular fa-heart";
  }
});

let count6 = 0;
heart6.addEventListener("click", function () {
  count6++;
  if (count6 % 2 != 0) {
    heart6.className = "fa fa-heart";
  }
  if (count6 % 2 == 0) {
    heart6.className = "fa-regular fa-heart";
  }
});

let count7 = 0;
heart7.addEventListener("click", function () {
  count7++;
  if (count7 % 2 != 0) {
    heart7.className = "fa fa-heart";
    heart7.innerHTML = `<span class="likes"> <br> ${42 + 1} likes </span>`;
  }
  if (count7 % 2 == 0) {
    heart7.className = "fa-regular fa-heart";
    heart7.innerHTML = `<span class="likes"> <br> ${42} likes </span>`;
  }
});

let count8 = 0;
heart8.addEventListener("click", function () {
  count8++;
  if (count8 % 2 != 0) {
    heart8.className = "fa fa-heart";
    heart8.innerHTML = `<span class="likes"> <br> ${9 + 1} likes </span>`;
  }
  if (count8 % 2 == 0) {
    heart8.className = "fa-regular fa-heart";
    heart8.innerHTML = `<span class="likes"> <br> ${9} likes </span>`;
  }
});

let count9 = 0;
heart9.addEventListener("click", function () {
  count9++;
  if (count9 % 2 != 0) {
    heart9.className = "fa fa-heart";
    heart9.innerHTML = `<span class="likes"> <br> ${16 + 1} likes </span>`;
  }
  if (count9 % 2 == 0) {
    heart9.className = "fa-regular fa-heart";
    heart9.innerHTML = `<span class="likes"> <br> ${16} likes </span>`;
  }
});

let count10 = 0;
heart10.addEventListener("click", function () {
  count10++;
  if (count10 % 2 != 0) {
    heart10.className = "fa fa-heart";
  }
  if (count10 % 2 == 0) {
    heart10.className = "fa-regular fa-heart";
  }
});

let count11 = 0;
heart11.addEventListener("click", function () {
  count11++;
  if (count11 % 2 != 0) {
    heart11.className = "fa fa-heart";
  }
  if (count11 % 2 == 0) {
    heart11.className = "fa-regular fa-heart";
  }
});

let count12 = 0;
heart12.addEventListener("click", function () {
  count12++;
  if (count12 % 2 != 0) {
    heart12.className = "fa fa-heart";
  }
  if (count12 % 2 == 0) {
    heart12.className = "fa-regular fa-heart";
  }
});

let count13 = 0;
heart13.addEventListener("click", function () {
  count13++;
  if (count13 % 2 != 0) {
    heart13.className = "fa fa-heart";
  }
  if (count13 % 2 == 0) {
    heart13.className = "fa-regular fa-heart";
  }
});

let count14 = 0;
heart14.addEventListener("click", function () {
  count14++;
  if (count14 % 2 != 0) {
    heart14.className = "fa fa-heart";
  }
  if (count14 % 2 == 0) {
    heart14.className = "fa-regular fa-heart";
  }
});

let count15 = 0;
heart15.addEventListener("click", function () {
  count15++;
  if (count15 % 2 != 0) {
    heart15.className = "fa fa-heart";
  }
  if (count15 % 2 == 0) {
    heart15.className = "fa-regular fa-heart";
  }
});

let count16 = 0;
heart16.addEventListener("click", function () {
  count16++;
  if (count16 % 2 != 0) {
    heart16.className = "fa fa-heart";
    heart16.innerHTML = `<span class="likes"> <br> ${25 + 1} likes </span>`;
  }
  if (count16 % 2 == 0) {
    heart16.className = "fa-regular fa-heart";
    heart16.innerHTML = `<span class="likes"> <br> ${25} likes </span>`;
  }
});

let count17 = 0;
heart17.addEventListener("click", function () {
  count17++;
  if (count17 % 2 != 0) {
    heart17.className = "fa fa-heart";
    heart17.innerHTML = `<span class="likes"> <br> ${18 + 1} likes </span>`;
  }
  if (count17 % 2 == 0) {
    heart17.className = "fa-regular fa-heart";
    heart17.innerHTML = `<span class="likes"> <br> ${18} likes </span>`;
  }
});

let count18 = 0;
heart18.addEventListener("click", function () {
  count18++;
  if (count18 % 2 != 0) {
    heart18.className = "fa fa-heart";
    heart18.innerHTML = `<span class="likes"> <br> ${11 + 1} likes </span>`;
  }
  if (count18 % 2 == 0) {
    heart18.className = "fa-regular fa-heart";
    heart18.innerHTML = `<span class="likes"> <br> ${11} likes </span>`;
  }
});

let count19 = 0;
heart19.addEventListener("click", function () {
  count19++;
  if (count19 % 2 != 0) {
    heart19.className = "fa fa-heart";
  }
  if (count19 % 2 == 0) {
    heart19.className = "fa-regular fa-heart";
  }
});

let count20 = 0;
heart20.addEventListener("click", function () {
  count20++;
  if (count20 % 2 != 0) {
    heart20.className = "fa fa-heart";
  }
  if (count20 % 2 == 0) {
    heart20.className = "fa-regular fa-heart";
  }
});

let count21 = 0;
heart21.addEventListener("click", function () {
  count21++;
  if (count21 % 2 != 0) {
    heart21.className = "fa fa-heart";
  }
  if (count21 % 2 == 0) {
    heart21.className = "fa-regular fa-heart";
  }
});

let count22 = 0;
heart22.addEventListener("click", function () {
  count22++;
  if (count22 % 2 != 0) {
    heart22.className = "fa fa-heart";
  }
  if (count22 % 2 == 0) {
    heart22.className = "fa-regular fa-heart";
  }
});

let count23 = 0;
heart23.addEventListener("click", function () {
  count23++;
  if (count23 % 2 != 0) {
    heart23.className = "fa fa-heart";
  }
  if (count23 % 2 == 0) {
    heart23.className = "fa-regular fa-heart";
  }
});

let count24 = 0;
heart24.addEventListener("click", function () {
  count24++;
  if (count24 % 2 != 0) {
    heart24.className = "fa fa-heart";
  }
  if (count24 % 2 == 0) {
    heart24.className = "fa-regular fa-heart";
  }
});

let logo = document.getElementById("logo");
let men = document.getElementById("men");
logo.addEventListener("click", () => {
  window.location.assign("index.html");
});
men.addEventListener("click", () => {
  window.location.assign("categoryPage/category.html");
});
