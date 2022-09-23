// data
const sellers = [
  {
    id: 1,
    name: "Meryl Roberson",
    img_url: "https://robohash.org/undeeteaque.png?size=50x50&set=set1",
    username: "mroberson0",
  },
  {
    id: 2,
    name: "Bennett Kollas",
    img_url: "https://robohash.org/fugaiureat.png?size=50x50&set=set1",
    username: "bkollas1",
  },
  {
    id: 3,
    name: "Yves Pitherick",
    img_url:
      "https://robohash.org/architectoreiciendiset.png?size=50x50&set=set1",
    username: "ypitherick2",
  },
  {
    id: 4,
    name: "Gale Gillbard",
    img_url: "https://robohash.org/iustoundeest.png?size=50x50&set=set1",
    username: "ggillbard3",
  },
  {
    id: 5,
    name: "Rosalinde Truelock",
    img_url: "https://robohash.org/quimagniaut.png?size=50x50&set=set1",
    username: "rtruelock4",
  },
  {
    id: 3,
    name: "Yves Pitherick",
    img_url:
      "https://robohash.org/architectoreiciendiset.png?size=50x50&set=set1",
    username: "ypitherick2",
  },
  {
    id: 4,
    name: "Gale Gillbard",
    img_url: "https://robohash.org/iustoundeest.png?size=50x50&set=set1",
    username: "ggillbard3",
  },
  {
    id: 5,
    name: "Rosalinde Truelock",
    img_url: "https://robohash.org/quimagniaut.png?size=50x50&set=set1",
    username: "rtruelock4",
  },
];

const sellersRender = () => {
  document.getElementById("app-body").innerHTML = uList("Sellers");
  document.getElementById("users-list").innerHTML = userCard(sellers);

  loopingOverUserCards();
};
