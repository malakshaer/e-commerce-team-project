const navBars = [1];
function sideNavBar() {
  return `
        <div class="side-nav-logo-container">
          <div class="side-nav-logo">
            <img src="./Images/logo.svg" alt="Logo" />
          </div>
          <div class="side-nav-close-btn" id="close-icon">
            <img src="./Images/x-icon.svg" alt="close icon" />
          </div>
        </div>

        <div class="side-nav-tab-container">
          <div class="side-nav-tab" id="nav-categories-btn">
            <img src="./Images/categories-icon-active.svg" alt="categories" />
            <p>Categories</p>
          </div>
          <div class="side-nav-tab" id="nav-products-btn">
            <img src="./Images/products-icon-active.svg" alt="products" />
            <p>Products</p>
          </div>
          <div class="side-nav-tab" id="nav-revenue-btn">
            <img src="./Images/revenue-icon-active.svg" alt="revenue" />
            <p>Revenue</p>
          </div>
          <div class="side-nav-tab" id="nav-discount-btn">
            <img src="./Images/discount-icon-active.svg" alt="discounts" />
            <p>Discounts</p>
          </div>
          <div class="side-nav-tab" id="nav-views-btn">
            <img src="./Images/top-views-icon-active.svg" alt="top views" />
            <p>Top Views</p>
          </div>
          <div class="side-nav-tab" id="nav-ads-btn">
            <img src="./Images/Ads-icon-active.svg" alt="Ads" />
            <p>Create Ads</p>
          </div>
          <div class="side-nav-tab" id="nav-inbox-btn">
            <img src="./Images/mail-icon-active.svg" alt="inbox" />
            <p>Inbox</p>
          </div>
        </div>
          `;
}
document.getElementById("side-nav-bar").innerHTML = sideNavBar();
