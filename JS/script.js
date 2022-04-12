const headerNavbar = document.getElementById("header__navbar");
const navbarSupportedContent = document.getElementById(
  "navbarSupportedContent"
);
const faBars = document.querySelector(".fa-bars");
const faX = document.querySelector(".fa-xmark");

function myFunction() {
  headerNavbar.classList.toggle("sm-navbar-dark");
  navbarSupportedContent.classList.toggle("show");
  faBars.classList.toggle("active");
  faX.classList.toggle("active");
}
