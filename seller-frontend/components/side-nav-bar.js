window.addEventListener("DOMContentLoaded", () => {
  const sideNavBar = () => {
    var sideNavBars = "";

    sellers.map(
      (seller) =>
        (sideNavBars += `
          <div class="side-nav-logo-container">
            <div class="side-nav-logo">
              <img src="./Images/Logo-icon.svg" alt="Logo" />
            </div>
          </div>

          <div class="side-nav-tab-container">
            <div class="side-nav-tab">
              <img src="./Images/categories-icon.svg" alt="categories" />
              <p>Categories</p>
            </div>
            <div class="side-nav-tab">
              <img src="./Images/products-icon.svg" alt="products" />
              <p>Products</p>
            </div>
            <div class="side-nav-tab">
              <img src="./Images/revenue-icon.svg" alt="revenue" />
              <p>Revenue</p>
            </div>
            <div class="side-nav-tab">
              <img src="./Images/discount-icon.svg" alt="discounts" />
              <p>Discounts</p>
            </div>
            <div class="side-nav-tab">
              <img src="./Images/top-views-icon.svg" alt="top views" />
              <p>Top Views</p>
            </div>
            <div class="side-nav-tab">
              <img src="./Images/Ads-icon.svg" alt="Ads" />
              <p>Create Ads</p>
            </div>
            <div class="side-nav-tab">
              <img src="./Images/mail-icon.svg" alt="inbox" />
              <p>Inbox</p>
            </div>
          </div>
        `)
    );
    return sideNavBars;
  };
  document.getElementById("side-nav-bar").innerHTML = sideNavBar();
});

const sellers = [1];
