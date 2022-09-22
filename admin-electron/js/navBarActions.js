const navSellersBtn = document.getElementById("nav-sellers-btn");
const navStatisticsBtn = document.getElementById("nav-statistics-btn");
const navClientsBtn = document.getElementById("nav-clients-btn");
const title = document.getElementById("title");

const clients = [
  {
    id: 4,
    name: "Gale Gillbard",
    img_url: "https://robohash.org/iustoundeest.png?size=50x50&set=set1",
    username: "ggillbard3",
  },
];

// nav sellers
navSellersBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-active-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-icon.svg";
  title.innerText = "Sellers";
  document.getElementById("users-list").innerHTML = userCard(sellers);
});

//
navStatisticsBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-active-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-icon.svg";
});

navClientsBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-active-icon.svg";
  title.innerText = "Clients";
  document.getElementById("users-list").innerHTML = userCard(clients);
});

// functioning each element
const editUser = document.querySelectorAll(".user-card-edit");

editUser.forEach((edit) => {
  edit.addEventListener("click", () => alert(edit.id));
  // instead of alert we are going to fetch
});
