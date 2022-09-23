document.getElementById("logout").onclick = () => {
  document.getElementById("sign-container").classList.toggle("display-none");
  document.getElementById("main-container").classList.toggle("display-none");
};

document.getElementById("menu-back").onclick = () => {
  document.getElementById("profile-menu").classList.add("display-none");
  document.getElementById("menu-back").classList.add("display-none");
};

document.getElementById("user-log-menu").onclick = () => {
  document.getElementById("profile-menu").classList.remove("display-none");
  document.getElementById("menu-back").classList.remove("display-none");
};

document.getElementById("profile-btn").onclick = () => {
  document.getElementById("profile-menu").classList.add("display-none");
  document.getElementById("menu-back").classList.add("display-none");
};
