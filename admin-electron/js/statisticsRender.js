const labelContainer = (icon, title, number) => {
  return `<div class="label-container">
            <div class="label-with-icon">
              <div>
                <img alt="" src="./assets/${icon}.svg" />
              </div>
              <h2>${title}</h2>
            </div>
            <h2>${number}</h2>
          </div>`;
};

const soldProductCard = (img, name, pices) => {
  return `<div class='stat-product-card'>
  <div class='stat-card-img'>
      <img alt='' src='${img}'>
  </div>
  <div>
    <h3>${name}</h3>
    <div>${pices}</div>
  </div>
  </div>`;
};

const soldProducts = [
  { img: "./assets/temp/bag.png", name: "Bestway bag", pices: "220 pice" },
  { img: "./assets/temp/airpods.png", name: "Air pods", pices: "180 pice" },
  { img: "./assets/temp/perfume.png", name: "Perfume", pices: "120 pice" },
];

const soldProductsContainer = (soldProducts) => {
  let soldProductsList = "";
  soldProducts.map((product) => {
    soldProductsList += soldProductCard(
      product.img,
      product.name,
      product.pices
    );
  });
  return `<div class='sold-products-container'>${soldProductsList}</div>`;
};

const tabComponent = (users, type) => {
  return `<div class='tab-component'>
    <div class='tabs-container'>
      <div class='tab active-tab' id='${type}-week-stat'>Weekly</div>
      <div class='tab' id='${type}-month-stat'>Monthly</div>
      <div class='tab' id='${type}-year-stat'>Yearly</div>
    </div>
    <div class='tab-body'>${userCard(users)}</div>
  </div>`;
};

// switch betweeen statistics period
const switcher = (type) => {
  // week stats
  document.getElementById(`${type}-week-stat`).onclick = () => {
    document.getElementById(`${type}-week-stat`).classList.add("active-tab");
    document
      .getElementById(`${type}-month-stat`)
      .classList.remove("active-tab");
    document.getElementById(`${type}-year-stat`).classList.remove("active-tab");
  };

  // month stats

  document.getElementById(`${type}-month-stat`).onclick = () => {
    document.getElementById(`${type}-week-stat`).classList.remove("active-tab");
    document.getElementById(`${type}-month-stat`).classList.add("active-tab");
    document.getElementById(`${type}-year-stat`).classList.remove("active-tab");
  };
  // year stats

  document.getElementById(`${type}-year-stat`).onclick = () => {
    document.getElementById(`${type}-week-stat`).classList.remove("active-tab");
    document
      .getElementById(`${type}-month-stat`)
      .classList.remove("active-tab");
    document.getElementById(`${type}-year-stat`).classList.add("active-tab");
  };
};

// main function

const statisticRender = () => {
  let page =
    "<div class='statistics-cards-container'><div class='statistics-card'>";
  page += labelContainer("products-icon", "Total # of products", 300);
  page += labelContainer("trophy-icon", "Top sold products", "");
  page += soldProductsContainer(soldProducts);
  page += "</div><div class='statistics-card'>";
  page += labelContainer("sellers-black-icon", "Total # of sellers", 230);
  page += labelContainer("trophy-icon", "Top Sellers", "");
  page += tabComponent(sellers, "sellers");
  page += "</div><div class='statistics-card'>";
  page += labelContainer("clients-black-icon", "Total # of clients", 530);
  page += labelContainer("trophy-icon", "Top Clients", "");
  page += tabComponent(clients, "clients");
  page += "</div></div>";
  page += '<canvas id="myChart"  height="400"></canvas>';
  document.getElementById("app-body").innerHTML = page;

  switcher("sellers");
  switcher("clients");
  loopingOverUserCards();

  // canvas data
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
