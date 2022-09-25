//fetch categories
const categories = [
  {
    id: 1,
    category_name: "Curb & Gutter",
    seller_id: 5,
  },
  {
    id: 2,
    category_name: "Ornamental Railings",
    seller_id: 5,
  },
  {
    id: 3,
    category_name: "Waterproofing & Caulking",
    seller_id: 4,
  },
  {
    id: 4,
    category_name: "Structural and Misc Steel (Fabrication)",
    seller_id: 3,
  },
  {
    id: 5,
    category_name: "Wall Protection",
    seller_id: 4,
  },
  {
    id: 6,
    category_name: "Soft Flooring and Base",
    seller_id: 5,
  },
  {
    id: 7,
    category_name: "Roofing (Asphalt)",
    seller_id: 1,
  },
  {
    id: 8,
    category_name: "Painting & Vinyl Wall Covering",
    seller_id: 4,
  },
  {
    id: 9,
    category_name: "Roofing (Metal)",
    seller_id: 1,
  },
  {
    id: 10,
    category_name: "HVAC",
    seller_id: 3,
  },
  {
    id: 11,
    category_name: "Plumbing & Medical Gas",
    seller_id: 2,
  },
  {
    id: 12,
    category_name: "Fire Protection",
    seller_id: 2,
  },
  {
    id: 13,
    category_name: "Temp Fencing, Decorative Fencing and Gates",
    seller_id: 3,
  },
  {
    id: 14,
    category_name: "Framing (Wood)",
    seller_id: 3,
  },
  {
    id: 15,
    category_name: "Masonry & Precast",
    seller_id: 2,
  },
];

const storeProduct = (id) => {
  const seller = sellers.filter((item) => item.id == id);
  const seller_name = seller[0].name;
  document.getElementById("app-body").innerHTML = `
    <div id="back" class="back-section">
    <img  src="./images/back.svg" />
    <h2>${seller_name}</h2>
    </div>
    <section class="category-product" id="seller-categories">
   </section>`;
  const cats = categories.filter((item) => item.seller_id == id);
  cats.map((cat) => {
    let prs = document.createElement("div");
    prs.innerHTML = `<h2>${cat.category_name}</h2>
    
    <div class="cat-product" id="${cat.id}">${productCard(
      products.filter((item) => item.category_id == cat.id)
    )}</div>
    `;
    document.getElementById("seller-categories").append(prs);
  });
};
