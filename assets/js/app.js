// ===============================
// GaonFresh App
// ===============================

// Product Data
const products = [
{
name:"Premium Wheat",
price:"₹45 / Kg",
image:"assets/images/wheat.jpg"
},
{
name:"Basmati Rice",
price:"₹85 / Kg",
image:"assets/images/rice.jpg"
},
{
name:"Mustard Oil",
price:"₹180 / Litre",
image:"assets/images/oil.jpg"
},
{
name:"Potato",
price:"₹30 / Kg",
image:"assets/images/potato.jpg"
},
{
name:"Tomato",
price:"₹40 / Kg",
image:"assets/images/tomato.jpg"
},
{
name:"Chana Dal",
price:"₹95 / Kg",
image:"assets/images/chana.jpg"
}
];

// Show Products
const productList = document.getElementById("product-list");

if (productList) {

products.forEach(product => {

productList.innerHTML += `
<div class="product-card">
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>${product.price}</p>
<button>Add to Cart</button>
</div>
`;

});

}

// Banner Slider
const banners = [
"assets/images/banner1.jpg",
"assets/images/banner2.jpg",
"assets/images/banner3.jpg"
];

let currentBanner = 0;

setInterval(()=>{

currentBanner++;

if(currentBanner>=banners.length){
currentBanner=0;
}

document.getElementById("sliderImage").src=banners[currentBanner];

},3000);

// Add to Cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("click", function(e){

if(e.target.innerText==="Add to Cart"){

const card = e.target.closest(".product-card");

const product = {

name: card.querySelector("h3").innerText,

price: card.querySelector("p").innerText,

image: card.querySelector("img").src,

qty:1

};

const existing = cart.find(item => item.name === product.name);

if(existing){

existing.qty = (existing.qty || 1) + 1;

}else{

cart.push(product);

}

localStorage.setItem("cart", JSON.stringify(cart));

document.getElementById("cart-count").innerText = cart.length;

alert(product.name + " Cart में जोड़ दिया गया।");

}

});

// Cart Count
document.getElementById("cart-count").innerText = cart.length;

// Search
const searchInput=document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(product=>{

const name=product.querySelector("h3").innerText.toLowerCase();

if(name.includes(value)){
product.style.display="block";
}else{
product.style.display="none";
}

});

});

console.log("GaonFresh Loaded Successfully");
// ===============================
// Product Popup
// ===============================

const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const closeModal = document.getElementById("closeModal");

document.addEventListener("click", function(e){

const card = e.target.closest(".product-card");

if(card){

modalImage.src = card.querySelector("img").src;
modalTitle.innerText = card.querySelector("h3").innerText;
modalPrice.innerText = card.querySelector("p").innerText;

modal.style.display = "block";

}

});

closeModal.onclick = function(){

modal.style.display = "none";

}

window.onclick = function(e){

if(e.target == modal){

modal.style.display = "none";

}

}
