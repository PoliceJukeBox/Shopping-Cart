let btn = document.querySelector(".go-to-shoplist");
const menu = document.querySelector(".shoplist-container");

btn.addEventListener("click", ()=>{
    menu.classList.toggle("active");
});

let objContainer = document.querySelector(".object-container");
let shoplistObjects = document.querySelector(".shoplist-objects");


let array = [{
    index: 1,
    image : "assets/Product1.jpg",
    name: "Product1",
    price: 200,
    cantitate: 0,
},{
    index: 2,
    image : "assets/Product2.jpg",
    name: "Product2",
    price: 150,
    cantitate: 0,
},{
    index: 3,
    image : "assets/Product3.jpg",
    name: "Product3",
    price: 320,
    cantitate: 0,
},{
    index: 4,
    image : "assets/Product4.jpg",
    name: "Product4",
    price: 75,
    cantitate: 0,
},{
    index: 5,
    image : "assets/Product5.jpg",
    name: "Product5",
    price: 280,
    cantitate: 0,
},{
    index: 6,
    image : "assets/Product6.jpg",
    name: "Product6",
    price: 170,
    cantitate: 0,
},{
    index: 7,
    image : "assets/Product7.jpg",
    name: "Product7",
    price: 95,
    cantitate: 0,
},{
    index: 8,
    image : "assets/Product8.jpg",
    name: "Product8",
    price: 210,
    cantitate: 0,
},{
    index: 9,
    image : "assets/Product9.jpg",
    name: "Product9",
    price: 300,
    cantitate: 0,
},{
    index: 10,
    image : "assets/Product10.jpg",
    name: "Product10",
    price: 115,
    cantitate: 0,
}];

array.forEach(display);

function display(e){
    let newDid = document.createElement("div");
    newDid.innerHTML = `<div>
                            <img src="${e.image}" alt="">
                        </div>
                        <div>
                            <h5>${e.name}</h5>
                            <h5 style="color:red">${e.price + " LEI"}</h5>
                            <button onclick="rata(${e.index})">ADD TO CART</button>
                        </div>`                     
    newDid.classList.add("item-card");
    objContainer.appendChild(newDid);
}

let priceItem = [];
for(let i=0; i<array.length; i++){
    priceItem[i]=array[i].price;
}
let totalPrice=0;

function rata(e){
    console.log(array[e-1].index);
    if(array[e-1].cantitate === 0){ 
        array[e-1].cantitate++;

        let newDid = document.createElement("div");
        newDid.innerHTML = `
                    <img src="assets/Product1.jpg" alt=""> 
                    <h3 id="${e + "a"}">${array[e-1].name}</h3>
                    <h5 id="${e + "b"}">${array[e-1].price}</h5>
                    <div class="add-and-remove">
                        <button class="add">+</button>
                        <h3>/</h3>
                        <button id="remove">-</button>
                    </div> 
                `;
        newDid.classList.add("cart-object");
        shoplistObjects.appendChild(newDid);

        totalPrice +=array[e-1].price;
        document.getElementById("total").textContent = "TOTAL: " + totalPrice + " LEI";
    }else{
        priceItem[e-1] += array[e-1].price;
        document.getElementById(`${e + "b"}`).textContent = priceItem[e-1];
        totalPrice +=array[e-1].price;
        document.getElementById("total").textContent = "TOTAL: " + totalPrice + " LEI";
    }
}



