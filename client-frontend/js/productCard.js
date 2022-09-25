const products = [
  {
    id: 1,
    product_name: "Bread - Pita",
    seller_name: "Gabtune",
    price: "$2.86",
    picture:
      "https://www.target.com.au/medias/static_content/product/images/large/43/19/A1384319.jpg",
  },
  {
    id: 2,
    product_name: "Beans - Black Bean, Canned",
    seller_name: "Gabtune",
    price: "$9.38",
    picture:
      "https://www.target.com.au/medias/static_content/product/images/large/43/19/A1384319.jpg",
  },
  {
    id: 3,
    product_name: "Yoplait - Strawbrasp Peac",
    seller_name: "Gabtune",
    price: "$6.12",
    picture:
      "https://www.target.com.au/medias/static_content/product/images/large/43/19/A1384319.jpg",
  },
  {
    id: 4,
    product_name: "Beef Flat Iron Steak",
    seller_name: "Gabtune",
    price: "$7.81",
    picture:
      "https://www.target.com.au/medias/static_content/product/images/large/43/19/A1384319.jpg",
  },
  {
    id: 5,
    product_name: "Beef - Diced",
    seller_name: "Kuhlman-Sawayn",
    price: "$3.93",
    picture:
      "https://www.target.com.au/medias/static_content/product/images/large/43/19/A1384319.jpg",
  },
  {
    id: 6,
    product_name: "Olives - Morracan Dired",
    seller_name: "Boyle, Stroman and Robel",
    price: "$1.57",
    picture:
      "https://www.target.com.au/medias/static_content/product/images/large/43/19/A1384319.jpg",
  },
  {
    id: 7,
    product_name: "Nut - Pine Nuts, Whole",
    seller_name: "Anderson LLC",
    price: "$3.84",
    picture:
      "https://www.target.com.au/medias/static_content/product/images/large/43/19/A1384319.jpg",
  },
  {
    id: 8,
    product_name: "Glaze - Clear",
    seller_name: "Jast and Sons",
    price: "$8.56",
    picture:
      "https://www.target.com.au/medias/static_content/product/images/large/43/19/A1384319.jpg",
  },
  {
    id: 9,
    product_name: "Liners - Baking Cups",
    seller_name: "Homenick LLC",
    price: "$5.08",
    picture:
      "https://www.target.com.au/medias/static_content/product/images/large/43/19/A1384319.jpg",
  },
  {
    id: 10,
    product_name: "Soup - Campbells, Chix Gumbo",
    seller_name: "Legros Inc",
    price: "$6.74",
    picture:
      "https://www.target.com.au/medias/static_content/product/images/large/43/19/A1384319.jpg",
  },
];

//this a function that will show all products of a specific query

const productCard = (products) => {
  var productList = "";
  products.map(
    (product, i) =>
      (productList += `<div class="product-card ">
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
                <img alt="" class="like" src="./images/add-to-wishlist.svg" />
              </div>
              <div class="product-card-icon">
                <img alt="" class="like" src="./images/add-to-cart.svg" />
              </div>
              <div class="product-card-icon">
                <img alt="" id="${product.id}" src="./images/like.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>`)
  );

  return productList;
};

document.getElementById("products-list").innerHTML = productCard(products);
