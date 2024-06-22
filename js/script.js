// ---------------------------------------------------------------------------------- //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

hamburger.addEventListener("click", function () {
  if (body.classList.contains("no-scroll")) {
    // Remove the class to enable scrolling
    body.classList.remove("no-scroll");
  } else {
    // Add the class to disable scrolling
    body.classList.add("no-scroll");
  }
});

// ---------------------------------------------------------------------------------- //

const ItemBagBtn = document.querySelector(".item-see");
const ItemWindow = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


// ---------------------------------------------------------------------------------- //
