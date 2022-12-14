const navSellersBtn = document.getElementById("nav-sellers-btn");
const navStatisticsBtn = document.getElementById("nav-statistics-btn");
const navClientsBtn = document.getElementById("nav-clients-btn");

// the first shown in the body

sellersRender();

// clicking on sellers in nav bar
navSellersBtn.onclick = () => {
  navSellersBtn.children[0].src = "./assets/sellers-active-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-icon.svg";
  sellersRender();
};

//clicking on statistic nav bar
navStatisticsBtn.onclick = () => {
  navSellersBtn.children[0].src = "./assets/sellers-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-active-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-icon.svg";
  statisticRender();
};

navClientsBtn.onclick = () => {
  navSellersBtn.children[0].src = "./assets/sellers-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-active-icon.svg";

  clientsRender();
};
