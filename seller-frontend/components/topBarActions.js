const hamburger = document.getElementById("hamburger-menu");
const closeIcon = document.getElementById("close-icon");
const sideNav = document.getElementById("side-nav-bar");

hamburger.addEventListener("click", () => {
  sideNav.classList.add("slide");
  console.log("hello");
});

closeIcon.addEventListener("click", () => {
  sideNav.classList.remove("slide");
});
