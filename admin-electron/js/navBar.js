const navBar = () => {
  return `<div class="nav-icon" id="nav-sellers-btn">
    <img id='img' src="./assets/sellers-active-icon.svg" alt="" />
  </div>
  <div class="nav-icon" id="nav-statistics-btn">
    <img src="./assets/statistics-icon.svg" alt="" />
  </div>
  <div class="nav-icon" id="nav-clients-btn">
    <img src="./assets/clients-icon.svg" alt="" />
  </div>`;
};

const navBarDom = document.getElementById("nav-bar");
navBarDom.innerHTML = navBar();

const navSellersBtn = document.getElementById("nav-sellers-btn");
const navStatisticsBtn = document.getElementById("nav-statistics-btn");
const navClientsBtn = document.getElementById("nav-clients-btn");

navSellersBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-active-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-icon.svg";
});

navStatisticsBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-active-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-icon.svg";
});

navClientsBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-active-icon.svg";
});
