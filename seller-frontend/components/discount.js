function discountRender() {
  const discountHeader = `
        <div
          class="discount-header-container pages-header-container"
          id="discount-header-id"
        >
          <div class="discount-header pages-header">
            <div class="discount-icon pages-header-icon">
              <img src="Images/discount-icon.svg" alt="Discount Icon" />
            </div>
            <h2>Discounts</h2>
          </div>
          <div class="discount-add-icon pages-header-add-icon">
            <img src="./Images/add-icon.svg" alt="Add Icon" />
          </div>
        </div>

        <div
          class="discount-content-container pages-content-container"
          id="discount-content"
        ></div>
      `;

  function discountsContent() {
    let discounts = "";

    coupons.map((coupon) => {
      discounts += `
          <div class="discount-content pages-content">
            <div class="discount-code">
              <p>${coupon.code}</p>
            </div>
            <div class="discount-expiry">
              <p>${coupon.date}</p>
            </div>
          </div>
        `;
    });
    return discounts;
  }

  pageWrapper.innerHTML = discountHeader;
  document.getElementById("discount-content").innerHTML = discountsContent();
}
