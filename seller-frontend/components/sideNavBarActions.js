const navCategoriesBtn = document.getElementById("nav-categories-btn");
const navProductsBtn = document.getElementById("nav-products-btn");
const navRevenueBtn = document.getElementById("nav-revenue-btn");
const navDiscountBtn = document.getElementById("nav-discount-btn");
const navViewsBtn = document.getElementById("nav-views-btn");
const navAdsBtn = document.getElementById("nav-ads-btn");
const navInboxBtn = document.getElementById("nav-inbox-btn");

// the first shown in the body
// document.getElementById("app-body").innerHTML = uList("Sellers", "+");
// document.getElementById("users-list").innerHTML = userCard(sellers);

// loopingOverUserCards();

// clicking on categories in nav bar
navCategoriesBtn.onclick = () => {
  navCategoriesBtn.children[0].src = "./Images/categories-icon.svg";
  navProductsBtn.children[0].src = "./Images/products-icon-active.svg";
  navRevenueBtn.children[0].src = "./Images/revenue-icon-active.svg";
  navDiscountBtn.children[0].src = "./Images/discount-icon-active.svg";
  navViewsBtn.children[0].src = "./Images/top-views-icon-active.svg";
  navAdsBtn.children[0].src = "./Images/Ads-icon-active.svg";
  navInboxBtn.children[0].src = "./Images/mail-icon-active.svg";

  navCategoriesBtn.classList.add("active");
  navProductsBtn.classList.remove("active");
  navRevenueBtn.classList.remove("active");
  navDiscountBtn.classList.remove("active");
  navViewsBtn.classList.remove("active");
  navAdsBtn.classList.remove("active");
  navInboxBtn.classList.remove("active");

  categoriesRender();
};

//clicking on products nav bar
navProductsBtn.onclick = () => {
  navProductsBtn.children[0].src = "./Images/products-icon.svg";
  navCategoriesBtn.children[0].src = "./Images/categories-icon-active.svg";
  navRevenueBtn.children[0].src = "./Images/revenue-icon-active.svg";
  navDiscountBtn.children[0].src = "./Images/discount-icon-active.svg";
  navViewsBtn.children[0].src = "./Images/top-views-icon-active.svg";
  navAdsBtn.children[0].src = "./Images/Ads-icon-active.svg";
  navInboxBtn.children[0].src = "./Images/mail-icon-active.svg";

  navCategoriesBtn.classList.remove("active");
  navProductsBtn.classList.add("active");
  navRevenueBtn.classList.remove("active");
  navDiscountBtn.classList.remove("active");
  navViewsBtn.classList.remove("active");
  navAdsBtn.classList.remove("active");
  navInboxBtn.classList.remove("active");

  productsRender();
};

navRevenueBtn.onclick = () => {
  navRevenueBtn.children[0].src = "./Images/revenue-icon.svg";
  navCategoriesBtn.children[0].src = "./Images/categories-icon-active.svg";
  navProductsBtn.children[0].src = "./Images/products-icon-active.svg";
  navDiscountBtn.children[0].src = "./Images/discount-icon-active.svg";
  navViewsBtn.children[0].src = "./Images/top-views-icon-active.svg";
  navAdsBtn.children[0].src = "./Images/Ads-icon-active.svg";
  navInboxBtn.children[0].src = "./Images/mail-icon-active.svg";

  navCategoriesBtn.classList.remove("active");
  navProductsBtn.classList.remove("active");
  navRevenueBtn.classList.add("active");
  navDiscountBtn.classList.remove("active");
  navViewsBtn.classList.remove("active");
  navAdsBtn.classList.remove("active");
  navInboxBtn.classList.remove("active");

  revenueRender();
};

navDiscountBtn.onclick = () => {
  navDiscountBtn.children[0].src = "./Images/discount-icon.svg";
  navCategoriesBtn.children[0].src = "./Images/categories-icon-active.svg";
  navProductsBtn.children[0].src = "./Images/products-icon-active.svg";
  navRevenueBtn.children[0].src = "./Images/revenue-icon-active.svg";
  navViewsBtn.children[0].src = "./Images/top-views-icon-active.svg";
  navAdsBtn.children[0].src = "./Images/Ads-icon-active.svg";
  navInboxBtn.children[0].src = "./Images/mail-icon-active.svg";

  navCategoriesBtn.classList.remove("active");
  navProductsBtn.classList.remove("active");
  navRevenueBtn.classList.remove("active");
  navDiscountBtn.classList.add("active");
  navViewsBtn.classList.remove("active");
  navAdsBtn.classList.remove("active");
  navInboxBtn.classList.remove("active");

  discountRender();
};

navViewsBtn.onclick = () => {
  navViewsBtn.children[0].src = "./Images/top-views-icon.svg";
  navCategoriesBtn.children[0].src = "./Images/categories-icon-active.svg";
  navProductsBtn.children[0].src = "./Images/products-icon-active.svg";
  navRevenueBtn.children[0].src = "./Images/revenue-icon-active.svg";
  navDiscountBtn.children[0].src = "./Images/discount-icon-active.svg";
  navAdsBtn.children[0].src = "./Images/Ads-icon-active.svg";
  navInboxBtn.children[0].src = "./Images/mail-icon-active.svg";

  navCategoriesBtn.classList.remove("active");
  navProductsBtn.classList.remove("active");
  navRevenueBtn.classList.remove("active");
  navDiscountBtn.classList.remove("active");
  navViewsBtn.classList.add("active");
  navAdsBtn.classList.remove("active");
  navInboxBtn.classList.remove("active");

  viewsRender();
};

navAdsBtn.onclick = () => {
  navAdsBtn.children[0].src = "./Images/Ads-icon.svg";
  navCategoriesBtn.children[0].src = "./Images/categories-icon-active.svg";
  navProductsBtn.children[0].src = "./Images/products-icon-active.svg";
  navRevenueBtn.children[0].src = "./Images/revenue-icon-active.svg";
  navDiscountBtn.children[0].src = "./Images/discount-icon-active.svg";
  navViewsBtn.children[0].src = "./Images/top-views-icon-active.svg";
  navInboxBtn.children[0].src = "./Images/mail-icon-active.svg";

  navCategoriesBtn.classList.remove("active");
  navProductsBtn.classList.remove("active");
  navRevenueBtn.classList.remove("active");
  navDiscountBtn.classList.remove("active");
  navViewsBtn.classList.remove("active");
  navAdsBtn.classList.add("active");
  navInboxBtn.classList.remove("active");

  adsRender();
};

navInboxBtn.onclick = () => {
  navInboxBtn.children[0].src = "./Images/mail-icon.svg";
  navCategoriesBtn.children[0].src = "./Images/categories-icon-active.svg";
  navProductsBtn.children[0].src = "./Images/products-icon-active.svg";
  navRevenueBtn.children[0].src = "./Images/revenue-icon-active.svg";
  navDiscountBtn.children[0].src = "./Images/discount-icon-active.svg";
  navViewsBtn.children[0].src = "./Images/top-views-icon-active.svg";
  navAdsBtn.children[0].src = "./Images/Ads-icon-active.svg";

  navCategoriesBtn.classList.remove("active");
  navProductsBtn.classList.remove("active");
  navRevenueBtn.classList.remove("active");
  navDiscountBtn.classList.remove("active");
  navViewsBtn.classList.remove("active");
  navAdsBtn.classList.remove("active");
  navInboxBtn.classList.add("active");

  inboxRender();
};
