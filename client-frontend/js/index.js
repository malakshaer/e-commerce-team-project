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
var productss;

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
  let products;
  axios
    .get(
      "http://localhost/e-commerce-team-project/server/api/products/get_all_products.php"
    )
    .then((res) => {
      products = res.data;
      productss = products;
      document.getElementById("products-list").innerHTML =
        productCard(products);
    });
  clicked();
};

const sellerCard = (sellers) => {
  var sellersList = "";
  sellers.map(
    (seller, i) =>
      (sellersList += `<div class="user-card">
        <div class="user-card-img-name">
          <div class="user-card-img-container">
            <img width="100%" src="${seller.profile_img}" alt="" />
          </div>
          <p class="user-card-name">${seller.name}</p>
        </div>
        <p href=""  class="user-card-edit" id='seller-${seller.id}'>more</p>
      </div>
      <section class="products seller-section" id='${seller.id}'></section>
     `)
  );
  return sellersList;
};
let sellers;
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
  axios
    .post("http://localhost/e-commerce-team-project/server/api/sellers/all.php")
    .then((res) => {
      sellers = res.data;
      document.getElementById("sellers-list").innerHTML = sellerCard(sellers);
    });

  // console.log(document.querySelectorAll(".seller-section"));
  // sellers.map((seller) => {
  //   document.getElementById(seller.id).innerHTML = productCard(
  //     products.filter((item) => item.seller_id == seller.id).slice(0, 4)
  //   );
  // });
  // console.log(sellers);
  // sellers.map(
  //   (seller) =>
  //     (document.getElementById(`seller-${seller.id}`).onclick = () => {
  //       storeProduct(seller.id);
  //     })
  // );
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
const moreRender = () => {
  document.getElementById("app-body").innerHTML = `
<div class="top-section">
<h1>Favorite Items</h1>
<button class="button" id="favorite-page">More</button>
</div>
<div class="more-lists" id="favorite-products-list"><div>
`;

  document.getElementById("favorite-products-list").innerHTML = favoriteCard(
    products.slice(0, 3)
  );

  const wish = document.createElement("section");
  wish.innerHTML = `<div class="top-section">
<h1>Wishlist</h1>
<button class="button" id="wishlist-page">More</button>
</div>
<div class="more-lists" id="wishlist-products-list"><div>
`;
  document.getElementById("app-body").append(wish);

  document.getElementById("wishlist-products-list").innerHTML = wishlistCard(
    products.slice(0, 3)
  );

  document.getElementById("favorite-page").onclick = () => {
    position = "favorite";
    renderFavorite();
  };
  document.getElementById("wishlist-page").onclick = () => {
    position = "wishlist";
    renderWishlist();
  };
  clicked();
};

window.onload = (event) => {
  homeRender();
};
