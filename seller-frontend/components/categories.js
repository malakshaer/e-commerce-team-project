const pageWrapper = document.getElementById("page-content-wrapper");

function categoriesRender() {
  const categoriesHeader = `
      <div
          class="categories-header-container pages-header-container"
          id="categories-header-id"
        >
        <div class="categories-header pages-header">
          <div class="categories-icon pages-header-icon">
            <img src="Images/categories-icon.svg" alt="Categories Icon" />
          </div>
          <h2>Categories</h2>
        </div>
        <div class="categories-add-icon pages-header-add-icon">
          <img src="./Images/add-icon.svg" alt="Add Icon" />
        </div>
      </div>
      <div
        class="categories-content-container pages-content-container"
        id="categories-content"
      ></div>
      `;

  function categoriesAvailable() {
    let categoriesList = "";

    categories.map((category) => {
      categoriesList += `
        <div class="categories-content pages-content">
          <h2>${category.name}</h2>
          <h3>remove</h3>
        </div>
        `;
    });
    return categoriesList;
  }

  pageWrapper.innerHTML = categoriesHeader;
  document.getElementById("categories-content").innerHTML +=
    categoriesAvailable();
}
