const nav = document.querySelector(".navbar");
const openNav = document.querySelector(".mobile-menu");

openNav.addEventListener("click", ()=>{
    nav.classList.toggle("open-nav");
    openNav.classList.toggle("close-nav");
})