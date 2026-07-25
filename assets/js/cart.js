let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");

if(cart.length === 0){

cartItems.innerHTML = "<h2 style='text-align:center'>🛒 Cart Empty</h2>";

}else{

let total = 0;

cart.forEach((item,index)=>{

let price = parseInt(item.price.replace(/[^\d]/g,""));

let qty = item.qty || 1;

total += price * qty;

cartItems.innerHTML += `

<div class="product-card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>${item.price}</p>

<div style="margin:10px 0;">
Qty :
<button onclick="changeQty(${index},-1)">-</button>

<span id="qty-${index}">${qty}</span>

<button onclick="changeQty(${index},1)">+</button>
</div>

<button onclick="removeItem(${index})">❌ Remove</button>

</div>

`;

});

cartItems.innerHTML += `

<h2 style="text-align:center;margin-top:20px;">
Total : ₹${total}
</h2>

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
