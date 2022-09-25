function productsRender() {
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
          <div class="products-add-icon pages-header-add-icon">
            <img src="./Images/add-icon.svg" alt="Add Icon" />
          </div>
        </div>

        <div class="pages-select-container">
          <select name="categories" id="categories-select">
          </select>
        </div>

        <div
          class="products-content-container pages-content-container"
          id="products-content"
        ></div>
      `;

  function categoriesSelect() {
    let categoriesSelects = "";

    categories.map((category) => {
      categoriesSelects += `
          <option value="${category}">${category}</option>
        `;
    });
    return categoriesSelects;
  }

  function productsContent(selectedOption) {
    console.log(selectedOption);
    let productsList = "";
    selectedOption.map((product) => {
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
    });
    return productsList;
  }
  let initialCategory = categories[0];
  let filteredProducts = [];

  pageWrapper.innerHTML = productsHeader;
  let initialProducts = products.filter(
    (product) => product.category == initialCategory
  );

  document.getElementById("products-content").innerHTML =
    productsContent(initialProducts);
  const selectedOption = document.getElementById("categories-select");
  selectedOption.onchange = function () {
    filteredProducts = products.filter(
      (product) => product.category == selectedOption.value
    );
    // console.log(filteredProducts);
    document.getElementById("products-content").innerHTML =
      productsContent(filteredProducts);
  };

  document.getElementById("categories-select").innerHTML = categoriesSelect();
}
