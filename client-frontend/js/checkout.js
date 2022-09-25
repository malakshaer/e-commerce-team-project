const checkout = () => {
  const checkout_section = `<div class="checkout-container">
    <h1>Checkout</h1>
    <div class="checkout-details">
      <input
        class="input quantity-input"
        type="number"
        name=""
        id=""
        min="1"
        placeholder="Quantity"
      />
      <h2>Total = <span class="total-price" id="total-price"></span></h2>
      <div class="checkout-voucher">
        <input
          class="input voucher-input"
          type="text"
          name=""
          id=""
          placeholder="Apply voucher"
        />
        <button class="button apply-btn">Apply</button>
      </div>
      <button class="button buy-btn">Buy Now</button>
    </div>
  </div>`;
  return checkout_section;
};
document.getElementById("checkout").innerHTML = checkout();
