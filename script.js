// Add a click event to the Cart icon
const cartIcon = document.querySelector(".fa-shopping-bag");

cartIcon.addEventListener("click", function() {
    alert("🛒 Your cart is empty.");
});

// Add a click event to the User icon
const userIcon = document.querySelector(".fa-user");

userIcon.addEventListener("click", function() {
    alert("👤 Please sign into your account.");
});

// Toggle the Cart Panel

// Toggle the Cart Panel
const cartPanel = document.querySelector(".cart-panel");

cartPanel.addEventListener("click", function() {
    cartPanel.classList.toggle("show");
    cartPanel.classList.toggle("hidden");
})