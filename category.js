function toggleDropdown(span) {
  var dropdown = span.nextElementSibling;
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

fetch('https://testapi2-9psr.onrender.com/Products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayproduct(data) // This will output the data to the console
    // You can do whatever you want with the data here
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
    let cartcontainer=document.getElementById("card")
    function displayproduct(data){
      cartcontainer.innerHTML="";
      data.forEach((ele,ind )=> {
        let  div=document.createElement("div")
        let image=document.createElement("img")
        let hr=document.createElement("hr")  
        let he1=document.createElement("h3") 
        let he2=document.createElement("h4") 
        let p1=document.createElement("p")  
        let p2=document.createElement("p")
        p2.innerText=("₹",ele.price);
        image.src=ele.image;
        he1.innerText=ele.title;
        // he2.innerText=ele.brand;
        // p1.innerText=ele.category;
        cartcontainer.append(div)
        div.append(imag,hr,p2,he1,he2,p1,)
      });
    }