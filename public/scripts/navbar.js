let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener('click', ()=>{
    let sideNavbar = document.querySelector(".navbar-side");
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'flex'
    sideNavbar.style.display = 'flex';
})

closeBtn.addEventListener('click', ()=>{
    let sideNavbar = document.querySelector(".navbar-side");
    menuBtn.style.display = 'flex';
    closeBtn.style.display = 'none';
    sideNavbar.style.display = 'none';
})