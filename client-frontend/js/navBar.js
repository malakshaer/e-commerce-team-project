const navbar = () => {
  const navbar_section = `    <div class="client-nav-bar flex-column flex-center">
      <div class="client-nav-icon flex-column flex-center">
        <img
          alt=""
          class="vector-nav-icon"
          src="./images/home-icon.svg"
        />
        <p class="vector-nav-text selected-icon">Home</p>
      </div>
      <div class="client-nav-icon flex-column flex-center">
        <img alt="" class="vector-nav-icon" src="./images/person-icon.svg" />
        <p class="vector-nav-text">Sellers</p>
      </div>
      <div class="client-nav-icon flex-column flex-center">
        <img alt="" class="vector-nav-icon" src="./images/search-icon.svg" />
        <p class="vector-nav-text">Search</p>
      </div>
      <div class="client-nav-icon flex-column flex-center">
        <img alt="" class="vector-nav-icon" src="./images/cart-icon.svg" />
        <p class="vector-nav-text">Cart</p>
      </div>
      <div class="client-nav-icon flex-column flex-center">
        <img alt="" class="vector-nav-icon" src="./images/more-icon.svg" />
        <p class="vector-nav-text">More</p>
      </div>
    </div>`;
  return navbar_section;
};
document.getElementById("navbar").innerHTML = navbar();
