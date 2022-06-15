"strict mode";
const btnMenuOpen = document.querySelector(".menu");
const btnMenuClose = document.querySelector(".menu_close");

btnMenuOpen.addEventListener("click", function () {
  document.querySelector(".nav-list").classList.remove("hidden");
});

btnMenuClose.addEventListener("click", function () {
  document.querySelector(".nav-list").classList.add("hidden");
});
