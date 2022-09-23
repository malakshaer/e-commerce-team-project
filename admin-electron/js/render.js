document.getElementById("logout").onclick = () => {
  window.location.replace("/admin-electron/index.html");
};

document.getElementById("user-log-menu").onclick = () => {
  document.getElementById("profile-menu").classList.remove("display-none");
};

document.getElementById("profile-btn").onclick = () => {
  document.getElementById("profile-menu").classList.add("display-none");
};
