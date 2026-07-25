alert("Cart JS Loaded");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");

if(cart.length === 0){

cartItems.innerHTML = `
<h2 style="text-align:center;margin-top:40px;">🛒 आपका Cart खाली है</h2>
<p style="text-align:center;">पहले कुछ Products Add करें।</p>
`;

}else{

let total = 0;

cart.forEach((item,index)=>{

let price = parseInt(item.price.replace(/[^\d]/g,""));

let qty = item.qty || 1;

total += price * qty;

cartItems.innerHTML += `

<div class="cart-item">

<img src="${item.image}" alt="${item.name}">

<div class="cart-info">

<h3>${item.name}</h3>

<p class="cart-price">${item.price}</p>

<div class="qty-box">

<button onclick="changeQty(${index},-1)">−</button>

<span>${qty}</span>

<button onclick="changeQty(${index},1)">+</button>

</div>

<button class="remove-btn" onclick="removeItem(${index})">

🗑 Remove

</button>

</div>

</div>

`;

});

cartItems.innerHTML += `

<div class="total-box">

<h2>Total : ₹${total}</h2>

<a href="#" class="checkout-btn">

Proceed to Checkout

</a>

</div>

`;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}

function changeQty(index,value){

cart[index].qty = (cart[index].qty || 1) + value;

if(cart[index].qty < 1){

cart[index].qty = 1;

}

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}
