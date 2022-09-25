function viewsRender() {
  const productsHeader = `
        <div
          class="products-header-container pages-header-container"
          id="products-header-id"
        >
          <div class="products-header pages-header">
            <div class="products-icon pages-header-icon">
              <img src="Images/products-icon.svg" alt="Products Icon" />
            </div>
            <h2>Products</h2>
          </div>
        </div>
        <div class="views-subtitle"> Top Viewed Products</div>
        <div
          class="products-content-container pages-content-container"
          id="products-content"
        ></div>
      `;

  function productsContent() {
    let productsList = "";
    products.map((product, i) => {
      if (i < 5) {
        productsList += `
          <div class="products-content pages-content">
            <div class="products-content-img">
              <img src="${product.img}" alt="Product Image" />
            </div>
            <div class="product-description">
              <p>${product.name}</p>
              <p>${product.price} 
              </p>
            </div>
            <div class="product-control">
              <div class="product-control-icon">
                <img src="./Images/edit-icon.svg" alt="Edit Icon" />
              </div>
              <div class="product-control-icon">
                <img src="./Images/remove-icon.svg" alt="Remove Icon" />
              </div>
            </div>
          </div>
        `;
      }
    });
    return productsList;
  }
  pageWrapper.innerHTML = productsHeader;
  document.getElementById("products-content").innerHTML = productsContent();
}
