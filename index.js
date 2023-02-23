let image1 = document.getElementById("img1");

window.addEventListener("load", function () {
  rendering(`https://testapi2-9psr.onrender.com/Products/90`);
});

function rendering(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      image1.src = data.image;
    });
}
