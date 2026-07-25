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
