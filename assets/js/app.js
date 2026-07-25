// ===== GaonFresh App =====
let cart = 0;

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        cart++;

        document.getElementById("cart-count").innerText = cart;

        alert("✅ Product Added to Cart");
    });
});

console.log("GaonFresh Started Successfully");
// ===== Banner Slider =====

const banners = [
"assets/images/banner1.jpg",
"assets/images/banner2.jpg",
"assets/images/banner3.jpg"
];

let current = 0;

setInterval(()=>{

current++;

if(current>=banners.length){
current=0;
}

document.getElementById("sliderImage").src=banners[current];

},3000);
