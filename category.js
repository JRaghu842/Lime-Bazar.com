function toggleDropdown(span) {
  var dropdown = span.nextElementSibling;
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}
const url = `https://testapi2-9psr.onrender.com/Products?category=Men`;

// fillter this all
let price1=document.getElementById("price1")
let price2=document.getElementById("price2")
let price3=document.getElementById("price3")
let price4=document.getElementById("price4")
let numofpro=document.getElementById("numofpro")
let gray=document.getElementById("gray")
let blue=document.getElementById("blue")
let red=document.getElementById("red")
let white=document.getElementById("white")
let black=document.getElementById("black")
let yellow=document.getElementById("yellow")
let products = [];
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    displayproduct(data) // This will output the data to the console
    // You can do whatever you want with the data here
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
    let cartcontainer=document.getElementById("card")

    let stdivs=document.querySelectorAll(".stdivs") 
    function displayproduct(data){
      cartcontainer.innerHTML="";
      data.forEach((ele,ind )=> {
        let  div=document.createElement("div")
        div.className=("stdivs")
        div.addEventListener("click",()=>{
          let obj={
            img:ele.image,
            title:ele.title,
            brand:ele.brand,
            price:ele.price,
            occasion:ele.description.occasion,
            brandname:ele.brand,
            color:ele.description.color,
            lengths:ele.description.length,
            lengthcms:ele.description["length(cms)"],
            material:ele.description.material,
            prints:ele.description["print & pattern"],
            code:ele.description["product code"],
            contains:ele.description["product contains"],
            type:ele.description.type,
            work:ele.description.work,
            country:ele.description["country of origin"],
            rating:ele.rating
          }
          localStorage.setItem('products', JSON.stringify(obj))
        })
        let image=document.createElement("img")
        let hr=document.createElement("hr")  
        let he1=document.createElement("h3") 
        let div1=document.createElement("div") 
        div1.className=("bottomcard")
        let p4=document.createElement("p")
        p4.innerText=`By ${ele.brand}`
        let div2=document.createElement("div")
        div2.className=("bottomcard1")
        let div3=document.createElement("div")
        div3.className=("bottomcard2")
        let icon1=document.createElement("i")
        icon1.className=("fa-regular fa-heart")
        let icon2=document.createElement("i")
        icon2.className=("fa-brands fa-whatsapp")
        let p2=document.createElement("p")
        p2.innerText="₹ "+ele.price;
        image.src=ele.image;
        he1.innerText=ele.title;
        cartcontainer.append(div)
        div.append(image,hr,div1,)
        div1.append(div2,div3)
        div2.append(p2,he1,p4)
        div3.append(icon1,icon2)
      });
    }
  //  Do All fillter part From here
  price1.addEventListener("click",() =>{
    if(price1.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&price_gte=300&price_lte=500')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  price2.addEventListener("click",() =>{
    if(price2.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&price_gte=699&price_lte=999')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  price3.addEventListener("click",() =>{
    if(price3.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&price_gte=1000&price_lte=1499')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  price4.addEventListener("click",() =>{
    if(price4.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&price_gte=1500&price_lte=2499')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  gray.addEventListener("click",() =>{
    if(gray.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&color=gray')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  blue.addEventListener("click",() =>{
    if(blue.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&color=blue')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  red.addEventListener("click",() =>{
    if(red.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&color=red')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  black.addEventListener("click",() =>{
    if(black.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&color=black')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  white.addEventListener("click",() =>{
    if(white.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&color=white')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  yellow.addEventListener("click",() =>{
    if(yellow.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&color=yellow')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let Manyavar=document.getElementById("Manyavar")
  Manyavar.addEventListener("click",() =>{
    if(Manyavar.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&brand=Manyavar')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let Showoff=document.getElementById("Showoff")
  Showoff.addEventListener("click",() =>{
    if(Showoff.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&brand=Showoff')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let hrx=document.getElementById("HRX")
  hrx.addEventListener("click",() =>{
    if(hrx.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&brand=HRX')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let Mufti=document.getElementById("Mufti")
  Mufti.addEventListener("click",() =>{
    if(Mufti.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&brand=Mufti')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let Soch=document.getElementById("Soch")
  Soch.addEventListener("click",() =>{
    if(Soch.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&brand=Soch')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let Shoeland=document.getElementById("Shoeland")
  Shoeland.addEventListener("click",() =>{
    if(Shoeland.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&brand=Shoeland')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let Bag=document.getElementById("Bag")
  Bag.addEventListener("click",() =>{
    if(Bag.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Bag')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let Belt=document.getElementById("Belt")
  Belt.addEventListener("click",() =>{
    if(Belt.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Belt')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let Caps=document.getElementById("Caps")
  Caps.addEventListener("click",() =>{
    if(Caps.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Caps')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let Shoes=document.getElementById("Shoes")
  Shoes.addEventListener("click",() =>{
    if(Shoes.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Shoes')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let longkurtas=document.getElementById("longkurtas")
  longkurtas.addEventListener("click",() =>{
    if(longkurtas.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.type=longkurtas')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let slimfitSweatshirts=document.getElementById("slimfitSweatshirts")
  slimfitSweatshirts.addEventListener("click",() =>{
    if(slimfitSweatshirts.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.type=slim%20fit%20Sweatshirts')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let RegularfitSweatshirts=document.getElementById("RegularfitSweatshirts")
  RegularfitSweatshirts.addEventListener("click",() =>{
    if(RegularfitSweatshirts.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.type=Regular%20fit%20Sweatshirts')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let slimfitjacket=document.getElementById("slimfitjacket")
  slimfitjacket.addEventListener("click",() =>{
    if(slimfitjacket.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.type=slim%20fit%20jacket')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let regularfitjacket=document.getElementById("regularfitjacket")
  regularfitjacket.addEventListener("click",() =>{
    if(regularfitjacket.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.type=regular%20fit%20jacket')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let regularfithoodie=document.getElementById("regularfithoodie")
  regularfithoodie.addEventListener("click",() =>{
    if(regularfithoodie.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.type=regular%20fit%20hoodie')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let regularfit=document.getElementById("regularfit")
  regularfit.addEventListener("click",() =>{
    if(regularfit.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.type=regular%20fit')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let longlength=document.getElementById("longlength")
  longlength.addEventListener("click",() =>{
    if(longlength.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.type=long%20length')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let shortlength=document.getElementById("shortlength")
  shortlength.addEventListener("click",() =>{
    if(shortlength.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.type=short%20length')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let Slimfit=document.getElementById("Slimfit")
  Slimfit.addEventListener("click",() =>{
    if(Slimfit.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.type=Slim%20fit')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let regular=document.getElementById("regular")
  regular.addEventListener("click",() =>{
    if(regular.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.type=regular ')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let partywear=document.getElementById("partywear")
  partywear.addEventListener("click",() =>{
    if(partywear.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.occasion=casual%20wear%20and%20party%20wear')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let casualwear=document.getElementById("casualwear")
  casualwear.addEventListener("click",() =>{
    if(casualwear.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.occasion=casual%20wear')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let ethnicwear=document.getElementById("ethnicwear")
  ethnicwear.addEventListener("click",() =>{
    if(ethnicwear.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.occasion=ethnic%20wear')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let festivewear=document.getElementById("festivewear")
  festivewear.addEventListener("click",() =>{
    if(festivewear.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.occasion=festive%20wear')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let sportswear=document.getElementById("sportswear")
  sportswear.addEventListener("click",() =>{
    if(sportswear.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.occasion=sports%20wear')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })
  let workwear=document.getElementById("workwear")
  workwear.addEventListener("click",() =>{
    if(workwear.checked==true){
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men&description.occasion=casual%20wear%20and%20office%20wear')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
    else{
      fetch('https://testapi2-9psr.onrender.com/Products?category=Men')
      .then(response => response.json())
    .then(data => {
      console.log(data)
      displayproduct(data)
      numofpro.innerText=`${data.length} Products`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
    }
  })