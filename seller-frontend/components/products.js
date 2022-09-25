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
          <div class="products-add-icon pages-header-add-icon" id="add-icon">
            <img src="./Images/add-icon.svg" alt="Add Icon" />
          </div>
        </div>

        <div class="popup popup-products" id="popup-id">
          <div class="popup-close-btn" id="close-popup">
            <img src="./Images/x-icon.svg" alt="Close Icon" />
          </div>
          <input type="file" class="input-file" name="filename">
          <label for="name">Name: </label>
          <input type="text" id="name"/>
          <label for="price">Price: </label>
          <input type="text" id="price"/>
          <button id="add-category">Add</button>
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
    document.getElementById("products-content").innerHTML =
      productsContent(filteredProducts);
  };

  document.getElementById("categories-select").innerHTML = categoriesSelect();

  const pop = document.getElementById("popup-id");
  const addIcon = document.getElementById("add-icon");
  const addCategory = document.getElementById("add-category");
  const closePopup = document.getElementById("close-popup");
  addIcon.addEventListener("click", () => {
    pop.classList.add("show-flex");
  });
  closePopup.addEventListener("click", () => {
    pop.classList.remove("show-flex");
  });
  addCategory.addEventListener("click", () => {
    pop.classList.remove("show-flex");
    // to add to it
  });
}
