const categoriesHeader = () => {
  var categoriesHeaders = "";

  categories.map(
    (category) =>
      (categoriesHeaders += `
          <div class="categories-header pages-header">
            <div class="categories-icon pages-header-icon">
              <img src="Images/categories-icon.svg" alt="Categories Icon" />
            </div>
            <h2>Categories</h2>
          </div>
          <div class="categories-add-icon pages-header-add-icon">
            <img src="./Images/add-icon.svg" alt="Add Icon" />
          </div>
        `)
  );
  return categoriesHeaders;
};
document.getElementById("categories-header-id").innerHTML = categoriesHeader();

const categories = [1];
