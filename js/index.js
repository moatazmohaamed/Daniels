// scroll_Effect

function userScroll() {
    const navbar = document.querySelector(".navbar");
    const navbrand = document.querySelector(".navbar-brand");
    const navitems = Array.from(document.getElementsByClassName("nav-link"));
    const bar = document.querySelector(".navbar-toggler");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.remove("bg-transparent");
            navbar.classList.add("bg-white");

            navbrand.classList.remove("text-white");
            navbrand.classList.add("text-dark");

            bar.classList.add("text-dark");
            bar.classList.remove("text-white");

            navitems.map(item => {
                item.classList.add("text-dark");
                item.classList.remove("text-white");
            });
        } else {
            navbar.classList.add("bg-transparent");
            navbrand.classList.add("text-white");
            bar.classList.add("text-white");

            navitems.map(item => {
                item.classList.add("text-white");
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", userScroll);

// typing animation

var typed = new Typed(".auto-type", {
    strings: ["Developer", "Designer", "Larry Daniels"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true,
});

// Animate on scroll

AOS.init();

// owl

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});

// preloader

var loader = document.getElementById("preloader")

window.addEventListener("load", function () {
    loader.style.display = "none";
})

// Counter 

$(".number").counterUp({
    delay: 10,
    time: 2000,
});
