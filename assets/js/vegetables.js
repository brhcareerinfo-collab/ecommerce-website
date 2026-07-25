buttonnn vegetables = [

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
name:"Onion",
price:"₹35 / Kg",
image:"assets/images/onion.jpg"
},

{
name:"Green Chilli",
price:"₹80 / Kg",
image:"assets/images/chilli.jpg"
},

{
name:"Cucumber",
price:"₹25 / Kg",
image:"assets/images/cucumber.jpg"
},

{
name:"Spinach",
price:"₹20 / Bunch",
image:"assets/images/spinach.jpg"
}

];

const productList = document.getElementById("product-list");

vegetables.forEach(product => {

productList.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.price}</p>

<button class="add-cart">Add to Cart</button>divdiv>

`;

});
