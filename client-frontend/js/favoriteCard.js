const products = [
  {
    id: 1,
    product_name: "Bread - Pita",
    seller_name: "Larkin and Sons",
    price: "$2.86",
    picture: "http://dummyimage.com/169x100.png/5fa2dd/ffffff",
  },
  {
    id: 2,
    product_name: "Beans - Black Bean, Canned",
    seller_name: "Wiegand and Sons",
    price: "$9.38",
    picture: "http://dummyimage.com/108x100.png/dddddd/000000",
  },
  {
    id: 3,
    product_name: "Yoplait - Strawbrasp Peac",
    seller_name: "Padberg Inc",
    price: "$6.12",
    picture: "http://dummyimage.com/109x100.png/cc0000/ffffff",
  },
  {
    id: 4,
    product_name: "Beef Flat Iron Steak",
    seller_name: "Macejkovic-Brakus",
    price: "$7.81",
    picture: "http://dummyimage.com/208x100.png/cc0000/ffffff",
  },
  {
    id: 5,
    product_name: "Beef - Diced",
    seller_name: "Kuhlman-Sawayn",
    price: "$3.93",
    picture: "http://dummyimage.com/206x100.png/dddddd/000000",
  },
  {
    id: 6,
    product_name: "Olives - Morracan Dired",
    seller_name: "Boyle, Stroman and Robel",
    price: "$1.57",
    picture: "http://dummyimage.com/104x100.png/ff4444/ffffff",
  },
  {
    id: 7,
    product_name: "Nut - Pine Nuts, Whole",
    seller_name: "Anderson LLC",
    price: "$3.84",
    picture: "http://dummyimage.com/142x100.png/ff4444/ffffff",
  },
  {
    id: 8,
    product_name: "Glaze - Clear",
    seller_name: "Jast and Sons",
    price: "$8.56",
    picture: "http://dummyimage.com/170x100.png/ff4444/ffffff",
  },
  {
    id: 9,
    product_name: "Liners - Baking Cups",
    seller_name: "Homenick LLC",
    price: "$5.08",
    picture: "http://dummyimage.com/194x100.png/ff4444/ffffff",
  },
  {
    id: 10,
    product_name: "Soup - Campbells, Chix Gumbo",
    seller_name: "Legros Inc",
    price: "$6.74",
    picture: "http://dummyimage.com/183x100.png/ff4444/ffffff",
  },
];

const favoriteCard = () => {
  var productList = "";
  products.map(
    (product, i) =>
      (productList += `<div class="product-card">
        <div class="product-card-img-container">
          <img
            class="product-card-img"
            src="${product.picture}"
            alt=""
          />
        </div>
        <div class="card-info">
          <div class="product-card-info">
            <div class="product-name-seller">
              <p class="product-name">${product.product_name}</p>
              <p class="seller-brand">${product.seller_name}</p>
            </div>
  
            <div class="product-price">
              <p class="price">${product.price}</p>
              <p class="discount">Discount</p>
            </div>
            <div class="product-card-icons">
              <div class="product-card-icon">
                <img alt="" class="like" src="./images/add-to-cart.svg" />
              </div>
              <div class="product-card-icon">
                <img alt="" class="like" src="./images/like.svg" />
              </div>
            </div>
          </div>
  
          <div class="product-card-actions">
            <div></div>
            <img alt="" class="like" src="./images/remove.svg" />
            <div></div>
          </div>
        </div>
      </div>`)
  );
  return productList;
};

document.getElementById("favorite-products-list").innerHTML = favoriteCard();
