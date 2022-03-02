const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

    newFunction();
function newFunction() {
    let bio = document.getElementsByName('title');
    if (bio.textContent.includes('Biography')) {
        console.log('Hi mom');
    } else {
        console.log('sad panda');
    }
}

function runMyFunction() {
    window.location.href ="thanks.html"
}

let goldText = document.querySelectorAll("1st Place");
