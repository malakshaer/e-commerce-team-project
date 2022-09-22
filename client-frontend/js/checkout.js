const checkout = () => {
  const checkout_section = `<div class="checkout-container">
          <h1>Checkout</h1>
          <div class="checkout-details flex-column">
            <input
              class="checkout-input-quantity"
              type="number"
              name=""
              id=""
              min="1"
              placeholder="Quantity"
            />
            <h2>Total = <span id="total-price"></span></h2>
            <div class="checkout-voucher flex flex-center">
              <input
                class="checkout-input-voucher"
                type="text"
                name=""
                id=""
                placeholder="Apply voucher"
              />
              <button class="checkout-button apply">Apply</button>
            </div>
            <button class="checkout-button buy">Buy Now</button>
          </div>
        </div>`;
  return checkout_section;
};
document.getElementById("checkout").innerHTML = checkout();
