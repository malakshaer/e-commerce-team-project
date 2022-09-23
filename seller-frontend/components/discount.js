window.addEventListener("DOMContentLoaded", () => {
  const discounts = () => {
    var discount = "";

    coupons.map(
      (coupon) =>
        (discount += `
          <div class="discount-content pages-content">
            <div class="discount-code">
              <p>${coupon.code}</p>
            </div>
            <div class="discount-expiry">
              <p>${coupon.date}</p>
            </div>
          </div>
        `)
    );
    return discount;
  };
  document.getElementById("top-nav-bar").innerHTML = discounts();
});

const coupons = [1];
