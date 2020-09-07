let footerBtn = document.querySelectorAll(".footer__btn");
footerBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.classList.toggle("rotate");
    let list =
      e.target.parentElement.parentElement.parentElement.lastElementChild;
    list.classList.toggle("show-footer-nav");
  });
});
let btnOpenNav = document.querySelector(".open");
let btnClose = document.querySelector(".close");

let mainNav = document.querySelector(".main-nav");
let navWrapper = document.querySelector(".nav-mobile-wrapper");
// open nav
btnOpenNav.addEventListener("click", (e) => {
  mainNav.classList.add("open--nav");
  navWrapper.classList.add("scale1");
});
//close nav
btnClose.addEventListener("click", (e) => {
  mainNav.classList.remove("open--nav");
  navWrapper.classList.remove("scale1");
});
// scroll to top
let goToTop = document.querySelector(".btn-up");
goToTop.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});
