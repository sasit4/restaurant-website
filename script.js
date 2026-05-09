// header section starts
const mobileNav = document.getElementById("mobileNav");
const searchForm = document.getElementById("searchForm");
const loginForm = document.getElementById("loginForm");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

let count = 0, cart = [], total = 0;

// close all panels
function closeAllPanels() {

    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    cartPanel.classList.remove("active");

    mobileNav.style.display = "none";
}


// mobile menu
document.getElementById("menu-btn").onclick = () => {

    let isOpen = mobileNav.style.display === "flex";

    closeAllPanels();

    mobileNav.style.display = isOpen ? "none" : "flex";
};


// search
document.getElementById("search-btn").onclick = () => {

    let isOpen = searchForm.classList.contains("active");

    closeAllPanels();

    if (!isOpen) {
        searchForm.classList.add("active");
    }
};


// login
document.getElementById("user-btn").onclick = () => {

    let isOpen = loginForm.classList.contains("active");

    closeAllPanels();

    if (!isOpen) {
        loginForm.classList.add("active");
    }
};


// cart
document.getElementById("cart-btn").onclick = () => {

    let isOpen = cartPanel.classList.contains("active");

    closeAllPanels();

    if (!isOpen) {
        cartPanel.classList.add("active");
    }
};


// longin close 


function closePage() {
    document.getElementById("loginForm").style.display = "none";
}

function openForgot() {
    document.getElementById("forgotForm").style.display = "block";
}

function closeForgot() {
    alert("Password updated successfully ✅");
    document.getElementById("forgotForm").style.display = "none";
}

function createAccount() {
    alert("Account creation page coming soon 🚀");
}


function loginNow() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {

        alert("Please fill Email and Password ❗");

    } else {

        alert("Login successful 🎉");

    }
}


// header section end


// menu section starts 
function increaseQty(index) {
    cart[index].qty++;
    updateCart();
}

function decreaseQty(index) {
    cart[index].qty--;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
}

function addToCart(name) {
    count++;
    document.getElementById("cartCount").innerText = count;
    let item = cart.find(i => i.name === name);
    item ? item.qty++ : cart.push({ name, qty: 1, price: 100 });
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    total = 0;
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Cart is empty 🛒</p>";
        totalEl.innerText = 0;
        return;
    }
    cart.forEach((i, idx) => {
        total += i.qty * i.price;
        cartItems.innerHTML += `
<div class="cart-item">
    <span>${i.name}</span>
    <div class="qty-box">
        <button onclick="decreaseQty(${idx})">-</button>
        <span>${i.qty}</span>
        <button onclick="increaseQty(${idx})">+</button>
        <button id="delete" onclick="cart.splice(${idx},1);updateCart()">🗑️</button>
    </div>
</div>`;
    });
    totalEl.innerText = total;
}

function buyNow() {
    if (cart.length === 0) alert("Cart is empty ❗");
    else {
        alert("Order placed successfully 🎉");
        cart = []; count = 0;
        document.getElementById("cartCount").innerText = 0;
        updateCart();
        cartPanel.classList.remove("active");
    }
}

/* menu filter */
function filterMenu(category, btn) {
    const cards = document.querySelectorAll(".card");
    const buttons = document.querySelectorAll(".filter-btns button");

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach(card => {
        card.style.display =
            category === "all" || card.dataset.category === category
                ? "block" : "none";
    });
}
// menu section ends




//home section starts
function showMessage() {
    alert("Welcome to DIVSREE Hotel. We serve authentic hometown recipes prepared with fresh ingredients and modern cooking standrds.Our goal is to give traditional taste with world-clss quality and hygiene.Enjoy delicious meals with your family and friends in a comfortable atmosphere.THANK YOU !....")
}
// home section ends 


// view section starts 
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function () {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})

prev.addEventListener('click', function () {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
})
// view section ends 



// feature  section starts
function openPopup(message) {
    document.getElementById("popupMessage").innerText = message;
    document.getElementById("popupBox").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupBox").style.display = "none";
}
// feature  section ends



// review section starts
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slideIndex = (index + slides.length) % slides.length;

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

function currentSlide(n) {
    showSlide(n);
}

//  glow effect  
slides.forEach(slide => {
    slide.addEventListener("mouseenter", () => {
        const glow = slide.querySelector(".glow");
        glow.style.background =
            "linear-gradient(135deg, rgba(255,255,255,0.8), transparent 40%)";
        glow.style.animation = "flash 1s ease";
    });
});
// review section ends

