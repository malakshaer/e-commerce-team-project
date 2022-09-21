window.addEventListener("DOMContentLoaded", () => {
  const navBar = () => {
    var topNavBars = "";

    sellers.map(
      (seller) =>
        (topNavBars += `
            <div class="hamburger-container">
              <div class="hamburger"></div>
            </div>
            <h2>Logo</h2>
            <div class="profile-pic">
              <img src="${seller.img_url}" alt="profile picture" />
            </div>
        `)
    );
    return topNavBars;
  };
  document.getElementById("top-nav-bar").innerHTML = navBar();
});

const sellers = [
  {
    id: 1,
    name: "Timotheus",
    img_url: "https://robohash.org/esseautrepellat.png?size=50x50&set=set1",
  },
  {
    id: 2,
    name: "Maurice",
    img_url: "https://robohash.org/eumexcepturiquidem.png?size=50x50&set=set1",
  },
  {
    id: 3,
    name: "Kath",
    img_url: "https://robohash.org/voluptatemquaenobis.png?size=50x50&set=set1",
  },
  {
    id: 4,
    name: "Clarita",
    img_url:
      "https://robohash.org/assumendaomnisoccaecati.png?size=50x50&set=set1",
  },
  {
    id: 5,
    name: "Lauren",
    img_url:
      "https://robohash.org/illumconsequaturadipisci.png?size=50x50&set=set1",
  },
];
