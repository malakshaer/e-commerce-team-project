const clients = [
  {
    id: 4,
    name: "Gale Gillbard",
    img_url: "https://robohash.org/iustoundeest.png?size=50x50&set=set1",
    username: "ggillbard3",
  },
];

const clientsRender = () => {
  document.getElementById("app-body").innerHTML = uList("Clients");
  document.getElementById("users-list").innerHTML = userCard(clients);

  loopingOverUserCards();
};
