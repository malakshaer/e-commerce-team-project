window.addEventListener("DOMContentLoaded", () => {
  const navBar = () => {
    var topNavBars = "";

    sellers.map(
      (seller) =>
        (topNavBars += `
          <div class="hamburger-container">
            <img src="./Images/hamburger-icon.svg" alt="hamburger menu" />
          </div>
          <div class="top-nav-logo-container">
            <img src="Images/Logo-horizontal.svg" alt="Logo" />
          </div>
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
];
