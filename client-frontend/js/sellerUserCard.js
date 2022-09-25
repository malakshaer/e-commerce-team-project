// let categories;
let productss;

// axios
//   .post("http://localhost/e-commerce-team-project/server/api/sellers/all.php")
//   .then((res) => {
//     sellers = res.data;
//   });
// axios
//   .post(
//     "http://localhost/e-commerce-team-project/server/api/categories/get_categories.php"
//   )
//   .then((res) => {
//     categories = res.data;
//   });
axios
  .post(
    "http://localhost/e-commerce-team-project/server/api/products/get_all_products.php"
  )
  .then((res) => {
    productss = res.data;
  });

// const sellerCard = () => {
//   var sellersList = "";
//   sellers.map(
//     (seller, i) =>
//       (sellersList += `<div class="user-card">
//         <div class="user-card-img-name">
//           <div class="user-card-img-container">
//             <img width="100%" src="${seller.profile_img}" alt="" />
//           </div>
//           <p class="user-card-name">${seller.name}</p>
//         </div>
//         <p href=""  class="user-card-edit" id='seller-${seller.id}'>more</p>
//       </div>
//       <section class="products seller-section" id='${seller.id}'></section>
//      `)
//   );
//   return sellersList;
// };
