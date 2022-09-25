const imgArray = [
  {
    id: 1,
    seller_id: 1,
    image: "http://dummyimage.com/159x100.png/ff4444/ffffff",
  },
  {
    id: 2,
    seller_id: 2,
    image: "http://dummyimage.com/168x100.png/ff4444/ffffff",
  },
  {
    id: 3,
    seller_id: 3,
    image: "http://dummyimage.com/112x100.png/cc0000/ffffff",
  },
  {
    id: 4,
    seller_id: 4,
    image: "http://dummyimage.com/246x100.png/cc0000/ffffff",
  },
  {
    id: 5,
    seller_id: 5,
    image: "http://dummyimage.com/219x100.png/cc0000/ffffff",
  },
];

let curIndex = 0;
let imgDuration = 2000;

function slideShow() {
  document.getElementById("image1").src = imgArray[curIndex].image;
  curIndex++;
  if (curIndex == imgArray.length) {
    curIndex = 0;
  }
  setTimeout("slideShow()", imgDuration);
}

const homeRender = () => {
  document.getElementById("app-body").innerHTML = `
    <!-- Start slideshow section -->
    <section class="slideshow" >
      <img class="image" id="image1" />
    </section>
    <!-- End slideshow section -->
    <!-- start ads section -->
    <section class="products" id="products-list"></section>
    <!-- end ads section -->`;
  slideShow();
  document.getElementById("products-list").innerHTML = productCard(products);
  // products.map(
  //   (product, i) =>
  //     (document.getElementById(product.id).onclick = () => {
  //       alert(product.id);
  //     })
  // );
  clicked();
};

const sellerRender = () => {
  document.getElementById("app-body").innerHTML = ` <div class="search">
  <input
          class="input search-input"
          type="text"
          name=""
          id=""
          placeholder="Search Sellers"
        />
    <button class="button search-btn">Search</button></div>
  <section class="sellers" id="sellers-list"></section>`;

  document.getElementById("sellers-list").innerHTML = sellerCard();
  console.log(document.querySelectorAll(".seller-section"));
  sellers.map((seller) => {
    document.getElementById(seller.name).innerHTML = productCard(
      products.filter((item) => item.seller_name == seller.name).slice(0, 4)
    );
  });
  console.log(sellers);
  sellers.map(
    (seller) =>
      (document.getElementById(`seller-${seller.id}`).onclick = () => {
        storeProduct(seller.id);
      })
  );
  clicked();
};

const searchRender = () => {
  document.getElementById("app-body").innerHTML = `
    <div class="search">
    <input
            class="input search-input"
            type="text"
            name=""
            id=""
            placeholder="Search Sellers"
          />
      <button class="button search-btn">Search</button></div>
    <!-- start ads section -->
    <section class="products" id="products-list"></section>
    <!-- end ads section -->`;
  document.getElementById("products-list").innerHTML = productCard(products);

  clicked();
};
const cartRender = () => {
  document.getElementById("app-body").innerHTML = `
<h1>Your Cart<h1>
<div class= "cart-content">

    <section class="products" id="checkout-list"></section>
    <section class="checkout-section" id ="checkout"></section>
    <div>`;
  document.getElementById("checkout-list").innerHTML = checkoutCard(products);
  document.getElementById("checkout").innerHTML = checkout();
  clicked();
};
