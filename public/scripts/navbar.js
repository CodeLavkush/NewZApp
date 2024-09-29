let menuBtn = document.querySelector(".menu-btn");
let isClose = false;

menuBtn.addEventListener('click', ()=>{
    if(isClose == false){
        let sideNavbar = document.querySelector(".navbar-side");
        sideNavbar.style.display = 'flex';
        isClose = true;
    }
    else{
        let sideNavbar = document.querySelector(".navbar-side");
        sideNavbar.style.display = 'none';
        isClose = false;
    }
})