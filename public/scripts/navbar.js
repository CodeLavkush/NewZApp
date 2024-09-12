let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener('click', ()=>{
    let sideNavbar = document.querySelector(".navbar-side");

    sideNavbar.style.display = 'flex';
})

closeBtn.addEventListener('click', ()=>{
    let sideNavbar = document.querySelector(".navbar-side");

    sideNavbar.style.display = 'none';
})