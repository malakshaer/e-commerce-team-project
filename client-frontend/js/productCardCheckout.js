const checkoutCard = (products) => {
  var productList = "";
  products.map(
    (product, i) =>
      (productList += `<div class="product-card horizontal" >
        <div class="product-card-img-container clicked"  id="${product.id}">
          <img
            class="product-card-img "
            src="https://static.overlay-tech.com/assets/10a60b5a-9b0c-4ecd-afa8-f43f3ff9021d.png"
            alt=""
           
          />
        </div>
        <div class="card-info">
          <div class="product-card-info">
            <div class="product-name-seller">
              <p class="product-name">Product name</p>
              <p class="seller-brand">Seller brand</p>
            </div>
  
            <div class="product-price">
              <p class="price">Price</p>
              <p class="discount">Discount</p>
            </div>
            <div class="product-card-icons">
              <div class="product-card-icon">
                <img alt="" class="like" src="./images/add-to-wishlist.svg" />
              </div>
              <div class="product-card-icon">
                <img alt="" class="like" src="./images/like.svg" />
              </div>
            </div>
          </div>
  
          <div class="product-card-actions">
            <div>
            <div class="product-card-button">Remove</div>
            </div>
            <div>
              <input
                class="input"
                type="number"
                name=""
                id=""
                placeholder="Quantity"
                min="1"
              />
            </div>
            <div>
              <p class="card-total">Total Price = <span></span></p>
            </div>
          </div>
        </div>
      </div>`)
  );
  return productList;
};
