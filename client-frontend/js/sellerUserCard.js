const sellers = [
  {
    id: 1,
    name: "Gabtune",
    img_url:
      "https://robohash.org/rationedolorumveritatis.png?size=50x50&set=set1",
  },
  {
    id: 2,
    name: "Nlounge",
    img_url: "https://robohash.org/ullamquasnemo.png?size=50x50&set=set1",
  },
  {
    id: 3,
    name: "Rhynyx",
    img_url:
      "https://robohash.org/architectoconsequunturmollitia.png?size=50x50&set=set1",
  },
  {
    id: 4,
    name: "Realfire",
    img_url:
      "https://robohash.org/voluptatemnecessitatibusmaxime.png?size=50x50&set=set1",
  },
  {
    id: 5,
    name: "Bluezoom",
    img_url:
      "https://robohash.org/odiototamconsequatur.png?size=50x50&set=set1",
  },
];

const sellerCard = () => {
  var sellersList = "";
  sellers.map(
    (seller, i) =>
      (sellersList += `<div class="user-card">
        <div class="user-card-img-name">
          <div class="user-card-img-container">
            <img width="100%" src="${seller.img_url}" alt="" />
          </div>
          <p class="user-card-name">${seller.name}</p>
        </div>
        <p href=""  class="user-card-edit" id='seller-${seller.id}'>more</p>
      </div>
      <section class="products seller-section" id='${seller.name}'></section>
     `)
  );
  return sellersList;
};

document.getElementById("sellers-list").innerHTML = sellerCard();
