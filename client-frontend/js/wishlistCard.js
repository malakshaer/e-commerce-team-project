const wishlistCard = () => {
  var productList = "";
  products.map(
    (product, i) =>
      (productList += `<div class="product-card">
      <div class="product-card-img-container">
        <img
          class="product-card-img"
          src="${product.picture}"
          alt=""
        />
      </div>
      <div class="card-info">
        <div class="product-card-info">
          <div class="product-name-seller">
            <p class="product-name">${product.product_name}</p>
            <p class="seller-brand">${product.seller_name}</p>
          </div>

          <div class="product-price">
            <p class="price">Price</p>
            <p class="discount">Discount</p>
          </div>
          <div class="product-card-icons">
            <div class="product-card-icon">
              <img alt="" class="like" src="./images/like.svg" />
            </div>
          </div>
        </div>

        <div class="product-card-actions">
          <div class="product-card-button">Remove</div>
          <div class="product-card-button button">Checkout</div>
          <div></div>
        </div>
      </div>
    </div>`)
  );
  return productList;
};

document.getElementById("wishlist-products-list").innerHTML = wishlistCard();
