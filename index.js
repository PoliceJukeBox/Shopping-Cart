let btn = document.querySelector(".go-to-shoplist");
const menu = document.querySelector(".shoplist-container");
const total = document.getElementById("total");
let quantity = document.getElementById("quantity");

btn.addEventListener("click", ()=>{
    menu.classList.toggle("active");
});

let objContainer = document.querySelector(".object-container");
let shoplistObjects = document.querySelector(".shoplist-objects");

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
const supabaseUrl = 'https://lkjygftrrtlmtvrtxxbo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxranlnZnRycnRsbXR2cnR4eGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4OTQxMzIsImV4cCI6MjAzOTQ3MDEzMn0.YD4WaCTJyiz02H2HDpSDhdRvqK1xWq0z7hvmDcYZBOg'
const supabase = createClient(supabaseUrl, supabaseKey)

let data = await supabase.from('Products').select('*');
let products = []

console.log(data);

for(let i=0; i< data.data.length; i++){
    products[i] = data.data[i];
    console.log(products[i]);
}
console.log(products[5].quantity);

// let products = [{
//     index: 1,
//     image : "assets/Product1.jpg",
//     name: "Product1",
//     price: 200,
// },{
//     index: 2,
//     image : "assets/Product2.jpg",
//     name: "Product2",
//     price: 150,
// },{
//     index: 3,
//     image : "assets/Product3.jpg",
//     name: "Product3",
//     price: 320,
// },{
//     index: 4,
//     image : "assets/Product4.jpg",
//     name: "Product4",
//     price: 75,
// },{
//     index: 5,
//     image : "assets/Product5.jpg",
//     name: "Product5",
//     price: 280,
// },{
//     index: 6,
//     image : "assets/Product6.jpg",
//     name: "Product6",
//     price: 170,
// },{
//     index: 7,
//     image : "assets/Product7.jpg",
//     name: "Product7",
//     price: 95,
// },{
//     index: 8,
//     image : "assets/Product8.jpg",
//     name: "Product8",
//     price: 210,
// },{
//     index: 9,
//     image : "assets/Product9.jpg",
//     name: "Product9",
//     price: 300,
// },{
//     index: 10,
//     image : "assets/Product10.jpg",
//     name: "Product10",
//     price: 115,
// }];

let listItems = [];
let priceList = [];

for(let i = 0; i<products.length; i++){
    priceList[i] = products[i].price;
}

function initApp(){
    products.forEach((value)=>{
        let newDid = document.createElement("div");
        newDid.classList.add("item-card");
        newDid.innerHTML = `<div>
                                <img src="${value.image}" alt="">
                            </div>
                            <div>
                                <h5>${value.name}</h5>
                                <h5 style="color:red">${value.price.toLocaleString() + " LEI"}</h5>
                                <button class="cardBtn" onclick="addToItem(${value.index-1})">ADD TO CART</button>
                            </div>`;
        // let button = document.createElement("button");
        // button.innerHTML = "ajaa";
        // button.classList.add('cardBtn');
        // newDid.appendChild(button); 
        // button.addEventListener("click", addToItem(value.index-1))                   
        objContainer.appendChild(newDid);

    });
}
initApp();

function addToItem(key){
    console.log('aaaa');
    if(listItems[key] == null){
        listItems[key] = products[key];
        listItems[key].quantity = 1;
    }else{
        listItems[key].quantity++;
        listItems[key].price+= priceList[key];
    }
    reloadItem();
}

function reloadItem(){
    shoplistObjects.textContent = '';
    let count = 0;
    let totalPrice = 0;
    
    listItems.forEach((value, key) =>{
        totalPrice += value.price;
        count += value.quantity;
        
        if(value != null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                    <img src="${value.image}" alt=""> 
                    <div style="display: block;">
                        <h3>${value.name}</h3>
                        <h3>${value.quantity}</h3>
                    </div>
                    <h5>${value.price.toLocaleString()}</h5>
                    <div class="add-and-remove">
                        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                        <h3>/</h3>
                        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div> 
                `;
            newDiv.classList.add("cart-object");
            shoplistObjects.appendChild(newDiv);
        }
    });
    total.innerHTML = `${totalPrice.toLocaleString()} LEI`;
    quantity.innerHTML = count;
}

function changeQuantity(key, quantity){
    console.log("aaaaa");
    if(quantity == 0){
        delete listItems[key];
    }else{
        listItems[key].quantity = quantity;
        listItems[key].price = quantity * priceList[key];
    }
    reloadItem();
}