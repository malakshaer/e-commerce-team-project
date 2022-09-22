window.addEventListener("DOMContentLoaded", () => {
  const productContent = () => {
    var productsContent = "";

    products.map(
      (product) =>
        (productsContent += `
          <div class="products-content pages-content">
            <div class="products-content-img">
              <img src="${product.img}" alt="Product Image" />
            </div>
            <div class="product-description">
              <p>${product.name}</p>
              <p>${product.price} <span>${product.discount}</span></p>
            </div>
            <div class="product-control">
              <div class="product-control-icon">
                <img src="./Images/edit-icon.svg" alt="Edit Icon" />
              </div>
              <div class="product-control-icon">
                <img src="./Images/remove-icon.svg" alt="Remove Icon" />
              </div>
            </div>
          </div>
        `)
    );
    return productsContent;
  };
  document.getElementById("products-content").innerHTML = productContent();
});

const products = [
  {
    name: "Vinegar - Raspberry",
    price: "$8.04",
    discount: 37,
    img: "http://dummyimage.com/145x100.png/5fa2dd/ffffff",
  },
  {
    name: "Apple - Royal Gala",
    price: "$8.29",
    discount: 39,
    img: "http://dummyimage.com/110x100.png/5fa2dd/ffffff",
  },
  {
    name: "Energy Drink - Franks Pineapple",
    price: "$8.86",
    discount: 10,
    img: "http://dummyimage.com/202x100.png/5fa2dd/ffffff",
  },
  {
    name: "Tofu - Firm",
    price: "$1.39",
    discount: 27,
    img: "http://dummyimage.com/248x100.png/dddddd/000000",
  },
  {
    name: "Beans - Green",
    price: "$7.07",
    discount: 65,
    img: "http://dummyimage.com/117x100.png/5fa2dd/ffffff",
  },
  {
    name: "Piping - Bags Quizna",
    price: "$2.13",
    discount: 28,
    img: "http://dummyimage.com/210x100.png/dddddd/000000",
  },
  {
    name: "Milk - Homo",
    price: "$2.84",
    discount: 45,
    img: "http://dummyimage.com/129x100.png/5fa2dd/ffffff",
  },
  {
    name: "Sachet",
    price: "$1.05",
    discount: 47,
    img: "http://dummyimage.com/158x100.png/dddddd/000000",
  },
  {
    name: "Shrimp - 16 - 20 Cooked, Peeled",
    price: "$5.71",
    discount: 57,
    img: "http://dummyimage.com/164x100.png/dddddd/000000",
  },
  {
    name: "Shrimp - 16/20, Iqf, Shell On",
    price: "$7.99",
    discount: 32,
    img: "http://dummyimage.com/106x100.png/ff4444/ffffff",
  },
  {
    name: "Cheese - Taleggio D.o.p.",
    price: "$3.26",
    discount: 63,
    img: "http://dummyimage.com/128x100.png/dddddd/000000",
  },
  {
    name: "Vinegar - Rice",
    price: "$3.80",
    discount: 31,
    img: "http://dummyimage.com/119x100.png/ff4444/ffffff",
  },
  {
    name: "Tomato - Green",
    price: "$2.42",
    discount: 5,
    img: "http://dummyimage.com/218x100.png/ff4444/ffffff",
  },
  {
    name: "Pastry - Apple Large",
    price: "$5.38",
    discount: 38,
    img: "http://dummyimage.com/137x100.png/dddddd/000000",
  },
  {
    name: "Pastry - Apple Muffins - Mini",
    price: "$0.77",
    discount: 1,
    img: "http://dummyimage.com/136x100.png/dddddd/000000",
  },
  {
    name: "Scallops - Live In Shell",
    price: "$8.23",
    discount: 66,
    img: "http://dummyimage.com/230x100.png/ff4444/ffffff",
  },
  {
    name: "Cheese - Goat",
    price: "$9.97",
    discount: 38,
    img: "http://dummyimage.com/168x100.png/ff4444/ffffff",
  },
  {
    name: "Beets - Candy Cane, Organic",
    price: "$3.87",
    discount: 23,
    img: "http://dummyimage.com/195x100.png/5fa2dd/ffffff",
  },
  {
    name: "Raisin - Dark",
    price: "$2.21",
    discount: 1,
    img: "http://dummyimage.com/198x100.png/ff4444/ffffff",
  },
  {
    name: "Cheese - Mozzarella, Shredded",
    price: "$4.68",
    discount: 9,
    img: "http://dummyimage.com/111x100.png/ff4444/ffffff",
  },
];
