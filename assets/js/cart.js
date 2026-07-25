let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");

if(cart.length==0){

cartItems.innerHTML="<h2 style='text-align:center'>🛒 Cart Empty</h2>";

}else{

cart.forEach(item=>{

cartItems.innerHTML +=`

<div class="product-card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>${item.price}</p>

</div>

`;

});

}
