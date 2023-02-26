let carditem = document.getElementById("details");
    let actuvalPrice = document.getElementById("cardPrice");
    let price = document.getElementById("cost");
    let tax = document.getElementById("Tax");
    let amount = document.getElementById("bill");
    let quntity = document.getElementById("quantity");
    let cost = 0;

    let itmes = JSON.parse(localStorage.getItem("cart"));
    //    console.log(itmes)
    render(item);

    //    <------------rendering---------------->
    function render(data) {
        let cards = data
            .map((ele) => {
                let card = Createcard();
                return card;
            }).join("");
            
        carditem.innerHTML = cards;
    }
    // <------card creating ---------->
    function Createcard(image, titel, brand, price, size) {
        cost += price;
        let card = `
        <div class="card">
                <div class="image">
                    <img src=${image} alt="image" />
                </div>
                <div class="details">
                    <p>${titel}</p>
                    <p>${brand}</p>
                    <p id="cardPrice">Price:${price}</p>
                    <p>Size:${size}</p>
                    <p>
                        Quntity:
                        <select id="quantity">
                            <option value="option1">1</option>
                            <option value="option2">2</option>
                            <option value="option3">3</option>
                        </select>
                    </p>
                    <button id="delete">Delete</button>
                </div>
            </div>
        `;
        return card;
    }
    price.innerText = cost;
    tax.innerText = cost * 0.15;
    amount.innerText = cost + cost * 0.15;

    quntity.addEventListener("click", () => {
        if(quntity.value>1){
            let quntityPrice = actuvalPrice.innerText * quntity.value-1;
        cost+=quntityPrice
        price.innerText = cost;
        tax.innerText = cost * 0.15;
        amount.innerText = cost + cost * 0.15;
        }
        
    });
    let buy=document.getElementById("buy")
    buy.addEventListener("click",()=>{
        localStorage.setItem("amount",JSON.stringify(amount.innerText))
        window.location.assign("adress.html")
    })
