const cartIcon = document.querySelector(".fa-shopping-bag");
const cartPanel = document.querySelector(".cart-sidebar");
const userIcon = document.querySelector(".fa-user");

// Add a click event to the User icon
userIcon.addEventListener("click", function() {
    alert("👤 Please sign into your account.");
});

// Toggle the Cart Panel
cartIcon.addEventListener("click", function() {
    cartPanel.classList.toggle("show");
    cartPanel.classList.toggle("hidden");
});