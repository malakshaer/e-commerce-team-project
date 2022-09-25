const renderWishlist = () => {
  document.getElementById("app-body").innerHTML = `
      <div class="back-section">
      <img id="more" src="./images/back.svg" />
      <h2>Wishlist<h2>
      </div>
      <div class="more-lists" id="wishlist-products-list"><div>
      `;
  document.getElementById("wishlist-products-list").innerHTML =
    wishlistCard(products);

  document.getElementById("more").onclick = () => {
    position = "more";
    moreRender();
  };
  clicked();
};
