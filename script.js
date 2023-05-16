let hamburger = document.querySelector(".hamburger-container");
let mobileMenu = document.querySelector(".mobile-menu");
let cancelMobile = document.querySelector(".cancel-mobile");
let bgMobile = document.querySelector(".bg-mobile");
const tags = document.querySelectorAll(".mobile-menu-link")

hamburger.addEventListener("click", toggleMenu);
cancelMobile.addEventListener("click", closeMenu);


tags.forEach(tag => {
    tag.addEventListener("click", () => {
        closeMenu()
    })
})

function toggleMenu() {
    // cancelMobile.classList.toggle("hide");
    mobileMenu.classList.toggle("hide");
    hamburger.classList.toggle("hide");
    bgMobile.classList.toggle("hide");
    // logo.classList.toggle("hide");
    bgMobile.classList.toggle("add-bg-on-mobile");
}


function closeMenu() {
    // cancelMobile.classList.toggle("hide");
    mobileMenu.classList.toggle("hide");
    hamburger.classList.toggle("hide");
    // logo.classList.toggle("hide");
    bgMobile.classList.toggle("hide");
    bgMobile.classList.toggle("add-bg-on-mobile");
}