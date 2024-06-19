let btn = document.querySelector(".go-to-shoplist");
const menu = document.querySelector(".shoplist-container");

btn.addEventListener("click", ()=>{
    menu.classList.toggle("active");
});

let objContainer = document.querySelector(".object-container");
let shoplistObjects = document.querySelector(".shoplist-objects");

console.log(1 + "b");

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
    price: 70,
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
}];

array.forEach(display);

function display(e){
    let newDid = document.createElement("div");
    // newDid.innerHTML = `<h1 class="red">${e.name}</h1>
    //                     <img src="${e.image}" alt="">
    //                     <h5>${e.email}</h5>
    //                     <button onclick="rata(${e.index})">Click me</button>`;
    newDid.innerHTML = `<div>
                            <img src="${e.image}" alt="">
                        </div>
                        <div>
                            <h5>${e.name}</h5>
                            <h5 style="color:red">${e.price + " LEI"}</h5>
                            <button onclick="rata(${e.index})">Add to cart</button>
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
        // newDid.innerHTML = `<h1 id="${e + "a"}">${array[e-1].name}</h1>
        //                     <h3 id="${e + "b"}">${array[e-1].price}</h3>
        //                     <h5 id="${e + "c"}">${array[e-1].email}</h5>`;
        newDid.innerHTML = `
                    <img src="assets/Product1.jpg" alt=""> 
                    <h3 id="${e + "a"}">${array[e-1].name}</h3>
                    <h5 id="${e + "b"}">${array[e-1].price}</h5>
                    <div class="add-and-remove">
                        <button id="add">+</button>
                        <h3>/</h3>
                        <button id="remove">-</button>
                    </div> 
                `;
        newDid.classList.add("cart-object");
        shoplistObjects.appendChild(newDid);
        totalPrice +=array[e-1].price;
        document.getElementById("total").textContent = totalPrice + " LEI";
    }else{
        priceItem[e-1] += array[e-1].price;
        totalPrice +=array[e-1].price;
        document.getElementById(`${e + "b"}`).textContent = priceItem[e-1];
        document.getElementById("total").textContent = totalPrice + " LEI";
    }
}