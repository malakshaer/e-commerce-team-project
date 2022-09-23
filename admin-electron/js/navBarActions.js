const loopingOverUserCards = () => {
  // functioning each element
  let editUser = document.querySelectorAll(".user-card-edit");

  editUser.forEach((edit) => {
    edit.addEventListener("click", () => alert(edit.id));
    // instead of alert we are going to fetch
  });
};

const navSellersBtn = document.getElementById("nav-sellers-btn");
const navStatisticsBtn = document.getElementById("nav-statistics-btn");
const navClientsBtn = document.getElementById("nav-clients-btn");

// the first shown in the body
document.getElementById("app-body").innerHTML = uList("Sellers");
document.getElementById("users-list").innerHTML = userCard(sellers);

loopingOverUserCards();

// clicking on sellers in nav bar
navSellersBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-active-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-icon.svg";
  sellersRender();
});

//clicking on statistic nav bar
navStatisticsBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-active-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-icon.svg";
  statisticRender();
});

navClientsBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-active-icon.svg";

  clientsRender();
});
