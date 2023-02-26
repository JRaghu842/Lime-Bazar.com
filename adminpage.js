
let AllData = [];

// sort
let sort1 = document.getElementById("sort_by_price_btn_low");
let sort2=document.getElementById("sort_by_price_btn_high")

sort1.addEventListener("click", () => {
  if (AllData && AllData.length) {
    AllData.sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });

    rendercardlist(AllData);
  } else {
    console.log("nothing to sort");
  }
});


sort2.addEventListener("click", () => {
    if (AllData && AllData.length) {
      AllData.sort((a, b) => {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      });
  
      rendercardlist(AllData);
    } else {
      console.log("nothing to sort");
    }
  });



let url="https://testapi2-9psr.onrender.com"
let mainSection=document.getElementById("all_products")
function fetchdata(){
    fetch("https://testapi2-9psr.onrender.com/products")
    .then((res)=>{
       
        return res.json();
       
    })
    .then((data)=>{
        console.log(data)
       
    

        let products_data =data.map(item=>({
            id:item.id,
            title:item.title,
            brand:item.brand,
            category:item.category,
            imageurl:item.image,
            price:item.price
        }))
        rendercardlist(products_data)
        AllData=products_data
        count1.innerText=products_data.length
       
    })
}
fetchdata()

function rendercardlist(cardData){
    let cardList=`
    <div class="row">
    ${cardData.map(item=>getcard(item.id,item.title,item.brand,item.imageurl,item.category,item.price))
    .join("")}
</div>
    `

    mainSection.innerHTML=cardList
   
}
function getcard(id,title,brand,imageurl,category,price){
    let card=`
   <div  class="card" data-id=${id}>
    <div class="card-image">
    <image src=${imageurl} "alt=error"/>
    </div>
    <div class="card-body">
      <div class="space">
      <div class="card-brand">${brand}</div>
      <div class="card-category">${category} </div></div>
    <h3 class=" card-item card-title">${title}</h3>
   
    <div class="card-item card-description">Rs.${price}</div>

    <div id="id_number"> id- ${id} </div>


  </div>
    </div>
    </div>`
    
    return card
}






// count
let count=0
let count1=document.getElementById("count1")
let count2=document.getElementById("count2")
let count3=document.getElementById("count3")
let count4=document.getElementById("count4")
let count33=0
let count44=0

 

// add products

let title1=document.getElementById("add_products_title")
let price1=document.getElementById("add_products_price")
let category1=document.getElementById("add_products_category")
let image1=document.getElementById("add_products_image")
let description1=document.getElementById("add_products_description")
let brand1=document.getElementById("add_products_brand")
let btn1=document.getElementById("add_products_btn")

btn1.addEventListener("click",add_prodoucts)
   
async function add_prodoucts(){
    
 
    try{
    
let obj={
    title:title1.value,
    price:price1.value,
    category:category1.value,
    image:image1.value,
    description:description1.value,
    brand:brand1.value,

}

let add_products1= await  fetch("https://testapi2-9psr.onrender.com/products",{
    method:'POST',
    headers:{
        "Content-Type": 'application/json'
    },
    body:JSON.stringify(obj)
    
})

fetchdata()
count++
count2.textContent = count

    }
    catch(error){
      console.log(error)
    }
}



// update products

let title2=document.getElementById("update_products_title")
let price2=document.getElementById("update_products_price")
let category2=document.getElementById("update_products_category")
let image2=document.getElementById("update_products_image")
let description2=document.getElementById("update_products_description")
let brand2=document.getElementById("update_products_brand")
let id2=document.getElementById("update_products_id")
let btn2=document.getElementById("update_products_btn")


btn2.addEventListener("click",update_products)

async function update_products(){
    try{
          let id=id2.value;
          let title =title2.value;
          let price=price2.value;
          let category=category2.value;
          let image=image2.value;
          let description=description2.value;
          let brand=brand2.value
        
    let update_products1= await fetch(`${url}/products/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type": 'application/json'
        },
        body:JSON.stringify({title:title,price:price,category:category,image:image,description:description,brand:brand})
    })
    fetchdata()
    count33++
count3.textContent = count33

    }
    catch(err){
       console.log(err)
    }
}


// update price

let id3=document.getElementById("update_price_id")
let price3=document.getElementById("update_price_price")
let btn3=document.getElementById("update_price_btn")

btn3.addEventListener("click",update_price)

async function update_price(){

    try{
         
        let id=id3.value;
        let price=price3.value

        let update_price1= await fetch(`${url}/products/${id}`,{
            method:'PATCH',
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({price:price})
        })
        fetchdata()
    }
    catch(err){
        console.log(err)
    }
}



// update_brand

let id4=document.getElementById("update_brand_id")
let brand4=document.getElementById("update_brand_brand")
let btn4=document.getElementById("update_brand_btn")

btn4.addEventListener("click",update_brand)

async function update_brand(){

    try{
         
        let id=id4.value;
        let brand=brand4.value

        let update_brand1= await fetch(`${url}/products/${id}`,{
            method:'PATCH',
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({brand:brand})
        })
        fetchdata()
    }
    catch(err){
        console.log(err)
    }
}


// delete products

let id5=document.getElementById("delete_products_id")
let btn5=document.getElementById("delete_products_btn")


btn5.addEventListener("click",delete_products)

async function delete_products(){

    try{
         
        let id=id5.value;
        

        let delete1= await fetch(`${url}/products/${id}`,{
            method:'DELETE',
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify()
        })
        fetchdata()
        count44++
count4.textContent = count44
    }
    catch(err){
        console.log(err)
    }
}




// Sort by price low to high
// document.getElementById("sort_by_price_btn_low").addEventListener("click", function(){
//     let sortedData = products_data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//     rendercardlist(sortedData);
//   });
  
  // Sort by price high to low
//   document.getElementById("sort_by_price_btn_high").addEventListener("click", function(){
//     let sortedData = products_data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//     rendercardlist(sortedData);
//   });


  




