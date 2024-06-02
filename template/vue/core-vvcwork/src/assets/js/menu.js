const activeBtn = document.getElementById("scroll-btn");
const bgHeader = document.querySelector("header");
bgHeader.classList.toggle("sticky", window.scrollY > 0);

window.addEventListener("scroll", function () {
  bgHeader.classList.toggle("sticky", window.scrollY > 0);
  if (window.scrollY > window.outerHeight / 2) {
    activeBtn.style.display = "block";
  } else {
    activeBtn.style.display = "none";
  }
});

function onTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

// ------ menu  ------

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menu.style.transition = "transform 0.5s ease";
  });
});

menu.addEventListener("transitionend", function () {
  this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
  arrow.addEventListener("click", function () {
    this.closest(".dropdown").classList.toggle("active");
  });
});
