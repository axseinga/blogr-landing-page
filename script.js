// Selectors //

const menuBtns = Array.from(document.querySelectorAll(".mobile-menu__btn"));
const menuSelections = document.querySelectorAll(".mobile-menu__dropcontent");
const menuSelects = document.querySelectorAll(".mobile-menu__btn--arrow");
const menuArrows = document.querySelectorAll(".mobile-menu__btn--arrow");

const openMenu = document.querySelector(".navbar__mobile--ham");
const menu = document.querySelector(".mobile-menu");

// Open - close mobile menu //

openMenu.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  toggleImage(
    ".ham-img",
    "./images/icon-hamburger.svg",
    "./images/icon-close.svg"
  );
});

const toggleImage = function (img, open, close) {
  let imgSrc = document.querySelector(img);
  if (imgSrc.src.match(open)) {
    document.querySelector(img).src = close;
  } else {
    document.querySelector(img).src = open;
  }
};

// Show menus inside menus //

menuBtns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    menuSelections[i].classList.toggle("hidden");
    menuSelects[i].classList.toggle("bold");
    menuArrows[i].classList.toggle("rotate");
  });
});
