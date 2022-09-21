window.addEventListener("DOMContentLoaded", () => {
  const categoriesHeader = () => {
    var categoriesHeaders = "";

    sellers.map(
      (seller) =>
        (categoriesHeaders += `
          <div class="categories-container">
            <div class="categories-icon">
              <img src="Images/categories-icon.svg" alt="Categories Icon" />
            </div>
            <h2>Categories</h2>
          </div>
          <div class="categories-add-icon">
            <img src="./Images/add-icon.svg" alt="Add Icon" />
          </div>
        `)
    );
    return categoriesHeaders;
  };
  document.getElementById("categories-header-id").innerHTML =
    categoriesHeader();
});

const sellers = [1];
