let btn = document.querySelector(".go-to-shoplist");
const menu = document.querySelector(".shoplist-container");
const total = document.getElementById("total");
let quantity = document.getElementById("quantity");

btn.addEventListener("click", ()=>{
    menu.classList.toggle("active");
});

let objContainer = document.querySelector(".object-container");
let shoplistObjects = document.querySelector(".shoplist-objects");


let products = [{
    index: 1,
    image : "assets/Product1.jpg",
    name: "Product1",
    price: 200,
},{
    index: 2,
    image : "assets/Product2.jpg",
    name: "Product2",
    price: 150,
},{
    index: 3,
    image : "assets/Product3.jpg",
    name: "Product3",
    price: 320,
},{
    index: 4,
    image : "assets/Product4.jpg",
    name: "Product4",
    price: 75,
},{
    index: 5,
    image : "assets/Product5.jpg",
    name: "Product5",
    price: 280,
},{
    index: 6,
    image : "assets/Product6.jpg",
    name: "Product6",
    price: 170,
},{
    index: 7,
    image : "assets/Product7.jpg",
    name: "Product7",
    price: 95,
},{
    index: 8,
    image : "assets/Product8.jpg",
    name: "Product8",
    price: 210,
},{
    index: 9,
    image : "assets/Product9.jpg",
    name: "Product9",
    price: 300,
},{
    index: 10,
    image : "assets/Product10.jpg",
    name: "Product10",
    price: 115,
}];

let listItems = [];

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
                                <button onclick="addToItem(${value.index-1})">ADD TO CART</button>
                            </div>`;                     
        objContainer.appendChild(newDid);
    });
}
initApp();

function addToItem(key){
    if(listItems[key] == null){
        listItems[key] = products[key];
        listItems[key].quantity = 1;
    }
    reloadItem();
}

function reloadItem(){
    shoplistObjects.textContent = '';
    let count = 0;
    let totalPrice = 0;
    listItems.forEach((value, key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        
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
        const pret = products[key].price;
        console.log(products[key].price);
        console.log(listItems[key].price);
        listItems[key].quantity = quantity;
        listItems[key].price = quantity * pret;
    }
    reloadItem();
}
// array.forEach(display);

// function display(e){

//     let newDid = document.createElement("div");
//     newDid.innerHTML = `<div>
//                             <img src="${e.image}" alt="">
//                         </div>
//                         <div>
//                             <h5>${e.name}</h5>
//                             <h5 style="color:red">${e.price + " LEI"}</h5>
//                             <button onclick="rata(${e.index})">ADD TO CART</button>
//                         </div>`                     
//     newDid.classList.add("item-card");
//     objContainer.appendChild(newDid);
// }

// let priceItem = [];
// for(let i=0; i<array.length; i++){
//     priceItem[i]=array[i].price;
// }
// let totalPrice=0;
// let cantitateIcon = 1;

// function rata(e){

//     document.getElementById("cantitateIcon").textContent = cantitateIcon++;

//     if(array[e-1].cantitate === 0){ 
//         array[e-1].cantitate++;

//         let newDid = document.createElement("div");
//         newDid.innerHTML = `
//                     <img src="assets/Product1.jpg" alt=""> 
//                     <div style="display: block;">
//                         <h3 id="${e + "a"}">${array[e-1].name}</h3>
//                         <h3 id="${e + "c"}">${array[e-1].cantitate}</h3>
//                     </div>
//                     <h5 id="${e + "b"}">${array[e-1].price}</h5>
//                     <div class="add-and-remove">
//                         <button id="add">+</button>
//                         <h3>/</h3>
//                         <button id="remove">-</button>
//                     </div> 
//                 `;
//         newDid.classList.add("cart-object");
//         shoplistObjects.appendChild(newDid);

//         totalPrice +=array[e-1].price;
//         document.getElementById("total").textContent = "TOTAL: " + totalPrice + " LEI";
//     }else{
//         priceItem[e-1] += array[e-1].price;
//         document.getElementById(`${e + "b"}`).textContent = priceItem[e-1];
//         document.getElementById(`${e + "c"}`).textContent = ++array[e-1].cantitate;
//         totalPrice +=array[e-1].price;
//         document.getElementById("total").textContent = "TOTAL: " + totalPrice + " LEI";

//         document.getElementById("add").addEventListener("click", (e)=>{
//             console.log(e.target);
//         });
        
//     }
// }


