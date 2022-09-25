const navBar = () => {
  return `<div class="nav-icon" id="nav-home-btn">
    <img id='img' src="../images/home-active-icon.svg" alt="" />
    <p style="color: #e21a58;" >Home</p>
  </div>
  <div class="nav-icon" id="nav-person-btn">
    <img src="./images/person-icon.svg" alt="" />
    <p>Sellers</p>
  </div>
  <div class="nav-icon" id="nav-search-btn">
    <img src="./images/search-icon.svg" alt="" />
    <p>Search</p>
  </div>
  <div class="nav-icon" id="nav-cart-btn">
    <img src="./images/cart-icon.svg" alt="" />
    <p>Cart</p>
  </div>
  <div class="nav-icon" id="nav-more-btn">
    <img src="./images/more-icon.svg" alt="" />
    <p>More</p>
  </div>`;
};
let position = "home";
const navBarDom = document.getElementById("navbar");
navBarDom.innerHTML = navBar();
const navHomeBtn = document.getElementById("nav-home-btn");
const navPersonBtn = document.getElementById("nav-person-btn");
const navSearchBtn = document.getElementById("nav-search-btn");
const navCartBtn = document.getElementById("nav-cart-btn");
const navMoreBtn = document.getElementById("nav-more-btn");
const appBody = document.getElementById("app-body");
navHomeBtn.addEventListener("click", () => {
  position = "home";
  homeRender();
  navHomeBtn.children[0].src = "./images/home-active-icon.svg";
  navHomeBtn.children[1].style.color = "#e21a58";
  navPersonBtn.children[0].src = "./images/person-icon.svg";
  navPersonBtn.children[1].style.color = "#54549f";
  navSearchBtn.children[0].src = "./images/search-icon.svg";
  navSearchBtn.children[1].style.color = "#54549f";
  navCartBtn.children[0].src = "./images/cart-icon.svg";
  navCartBtn.children[1].style.color = "#54549f";
  navMoreBtn.children[0].src = "./images/more-icon.svg";
  navMoreBtn.children[1].style.color = "#54549f";
});

navPersonBtn.addEventListener("click", () => {
  position = "seller";
  sellerRender();

  navHomeBtn.children[0].src = "./images/home-icon.svg";
  navHomeBtn.children[1].style.color = "#54549f";
  navPersonBtn.children[0].src = "./images/person-active-icon.svg";
  navPersonBtn.children[1].style.color = "#e21a58";
  navSearchBtn.children[0].src = "./images/search-icon.svg";
  navSearchBtn.children[1].style.color = "#54549f";
  navCartBtn.children[0].src = "./images/cart-icon.svg";
  navCartBtn.children[1].style.color = "#54549f";
  navMoreBtn.children[0].src = "./images/more-icon.svg";
  navMoreBtn.children[1].style.color = "#54549f";
});
navSearchBtn.addEventListener("click", () => {
  position = "search";
  searchRender();
  navHomeBtn.children[0].src = "./images/home-icon.svg";
  navHomeBtn.children[1].style.color = "#54549f";
  navPersonBtn.children[0].src = "./images/person-icon.svg";
  navPersonBtn.children[1].style.color = "#54549f";
  navSearchBtn.children[0].src = "./images/search-active-icon.svg";
  navSearchBtn.children[1].style.color = "#e21a58";
  navCartBtn.children[0].src = "./images/cart-icon.svg";
  navCartBtn.children[1].style.color = "#54549f";
  navMoreBtn.children[0].src = "./images/more-icon.svg";
  navMoreBtn.children[1].style.color = "#54549f";
});
navCartBtn.addEventListener("click", () => {
  position = "cart";
  cartRender();
  navHomeBtn.children[0].src = "./images/home-icon.svg";
  navHomeBtn.children[1].style.color = "#54549f";
  navPersonBtn.children[0].src = "./images/person-icon.svg";
  navPersonBtn.children[1].style.color = "#54549f";
  navSearchBtn.children[0].src = "./images/search-icon.svg";
  navSearchBtn.children[1].style.color = "#54549f";
  navCartBtn.children[0].src = "./images/cart-active-icon.svg";
  navCartBtn.children[1].style.color = "#e21a58";
  navMoreBtn.children[0].src = "./images/more-icon.svg";
  navMoreBtn.children[1].style.color = "#54549f";
});
navMoreBtn.addEventListener("click", () => {
  position = "more";
  moreRender();
  navHomeBtn.children[0].src = "./images/home-icon.svg";
  navHomeBtn.children[1].style.color = "#54549f";
  navPersonBtn.children[0].src = "./images/person-icon.svg";
  navPersonBtn.children[1].style.color = "#54549f";
  navSearchBtn.children[0].src = "./images/search-icon.svg";
  navSearchBtn.children[1].style.color = "#54549f";
  navCartBtn.children[0].src = "./images/cart-icon.svg";
  navCartBtn.children[1].style.color = "#54549f";
  navMoreBtn.children[0].src = "./images/more-active-icon.svg";
  navMoreBtn.children[1].style.color = "#e21a58";
});
