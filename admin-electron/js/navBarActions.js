const uList = (usertype) => {
  return `<h2 id="title">${usertype}</h2>
    <div id="users-list" class="sellers-list"></div>`;
};

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
const appBody = document.getElementById("app-body");

// the first shown in the body
appBody.innerHTML = uList("Sellers");
document.getElementById("users-list").innerHTML = userCard(sellers);

loopingOverUserCards();

const clients = [
  {
    id: 4,
    name: "Gale Gillbard",
    img_url: "https://robohash.org/iustoundeest.png?size=50x50&set=set1",
    username: "ggillbard3",
  },
];

// clicking on sellers in nav bar
navSellersBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-active-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-icon.svg";
  appBody.innerHTML = uList("Sellers");
  document.getElementById("users-list").innerHTML = userCard(sellers);

  loopingOverUserCards();
});

//clicking on statistic nav bar
navStatisticsBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-active-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-icon.svg";
  let labels = labelContainer("products-icon", "Total # of products", 300);
  labels += labelContainer("trophy-icon", "Top sold products", "");
  labels += labelContainer("sellers-black-icon", "Total # of sellers", 230);
  labels += labelContainer("trophy-icon", "Top Sellers", "");
  labels += labelContainer("clients-black-icon", "Total # of clients", 530);
  labels += labelContainer("trophy-icon", "Top Clients", "");

  appBody.innerHTML = labels;
});

navClientsBtn.addEventListener("click", () => {
  navSellersBtn.children[0].src = "./assets/sellers-icon.svg";
  navStatisticsBtn.children[0].src = "./assets/statistics-icon.svg";
  navClientsBtn.children[0].src = "./assets/clients-active-icon.svg";
  appBody.innerHTML = uList("Clients");
  document.getElementById("users-list").innerHTML = userCard(clients);

  loopingOverUserCards();
});
