let data;

const clicked = () => {
  const cardClick = document.querySelectorAll(".clicked");
  cardClick.forEach((element) => {
    element.onclick = () => {
      data = products.filter((item) => item.id == element.id);
      renderProduct(element.id);
    };
  });
};

const renderProduct = (id) => {
  document.getElementById("app-body").innerHTML = `
  <div id="back" class="back-section">
  <img  src="./images/back.svg" />
  <h2>${data[0].product_name}</h2>
  </div>
  <section class="product-data">
 <section><img  src="${data[0].picture}" /></section>
 <section class="texts"><h2>${data[0].seller_name}</h2>
<h2>${data[0].category || ""}</h2><br>
  <h1>${data[0].price}</h1>
  <h2>${data[0].text}</h2> 
  <div class="product-card-icons">
 <div class="product-card-icon">
   <img alt="" class="like" src="./images/add-to-wishlist.svg" />
 </div>
 <div class="product-card-icon">
   <img alt="" class="like" src="./images/add-to-cart.svg" />
 </div>
 <div class="product-card-icon">
   <img alt="" id="${data[0].id}" src="./images/like.svg" />
 </div>
</div>
 </section>
`;

  document.getElementById("back").onclick = () => {
    if (position == "home") {
      homeRender();
    } else if (position == "seller") {
      sellerRender();
    } else if (position == "search") {
      searchRender();
    } else if (position == "cart") {
      cartRender();
    } else if (position == "more") {
      moreRender();
    } else if (position == "wishlist") {
      renderWishlist();
    } else if (position == "favorite") {
      renderFavorite();
    }
  };

  clicked();
};
