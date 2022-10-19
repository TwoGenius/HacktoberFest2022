/*------------ toggle navbar --------------*/

const navToggle = document.querySelector(".nav-toggler");
navToggle.addEventListener("click", toggleNav);

function toggleNav() {
  navToggle.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
}

// close nav when clicking on a nav item
document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-item")) {
    toggleNav();
  }
});
