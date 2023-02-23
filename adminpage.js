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


  </div>
    </div>
    </div>`
    
    return card
}