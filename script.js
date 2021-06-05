const navToggleShowBtn = document.getElementById('navbar-toggler-show');
const navToggleCloseBtn = document.getElementById('navbar-toggler-close');
const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarDiv = document.querySelector('.navbar');

navToggleShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.style.display = "flex";
});

navToggleCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.style.display = "none";
});

// hide navbar
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        navbarDiv.style.display = "none";
    } else {
        navbarDiv.style.display = "";
    }
});