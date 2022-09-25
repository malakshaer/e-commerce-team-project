// used for top-nav
const users = [
  {
    name: "James",
    img_url: "https://robohash.org/esseautrepellat.png?size=50x50&set=set1",
  },
];

// Used for categories list
// Used for categories select in products
const products = [
  {
    name: "Avalon",
    category: "Mazda",
    price: "$192.81",
    img: "https://robohash.org/quirerumpraesentium.png?size=50x50&set=set1",
  },
  {
    name: "Relay",
    category: "Chevrolet",
    price: "$52.88",
    img: "https://robohash.org/autveniamsoluta.png?size=50x50&set=set1",
  },
  {
    name: "Quest",
    category: "Toyota",
    price: "$79.54",
    img: "https://robohash.org/modiautnisi.png?size=50x50&set=set1",
  },
  {
    name: "Traverse",
    category: "Chevrolet",
    price: "$3.98",
    img: "https://robohash.org/etculpapraesentium.png?size=50x50&set=set1",
  },
  {
    name: "5 Series",
    category: "BMW",
    price: "$167.44",
    img: "https://robohash.org/rerumautsed.png?size=50x50&set=set1",
  },
  {
    name: "Passport",
    category: "Chevrolet",
    price: "$194.17",
    img: "https://robohash.org/providentquisuscipit.png?size=50x50&set=set1",
  },
  {
    name: "Altima",
    category: "Nissan",
    price: "$36.74",
    img: "https://robohash.org/exercitationemnostrumaccusantium.png?size=50x50&set=set1",
  },
  {
    name: "Sportage",
    category: "Kia",
    price: "$17.91",
    img: "https://robohash.org/eaquenumquamaut.png?size=50x50&set=set1",
  },
  {
    name: "RX",
    category: "Lexus",
    price: "$17.48",
    img: "https://robohash.org/sequiquonumquam.png?size=50x50&set=set1",
  },
  {
    name: "SL-Class",
    category: "Mercedes-Benz",
    price: "$117.11",
    img: "https://robohash.org/voluptatesminustempora.png?size=50x50&set=set1",
  },
  {
    name: "Cutlass Cruiser",
    category: "Toyota",
    price: "$164.79",
    img: "https://robohash.org/minuscumaccusamus.png?size=50x50&set=set1",
  },
  {
    name: "Cherokee",
    category: "Chevrolet",
    price: "$125.40",
    img: "https://robohash.org/rerumvoluptasamet.png?size=50x50&set=set1",
  },
  {
    name: "I",
    category: "Toyota",
    price: "$170.79",
    img: "https://robohash.org/etsedfugit.png?size=50x50&set=set1",
  },
  {
    name: "Yukon",
    category: "Chevrolet",
    price: "$166.68",
    img: "https://robohash.org/atmaximeassumenda.png?size=50x50&set=set1",
  },
  {
    name: "X5",
    category: "Toyota",
    price: "$5.09",
    img: "https://robohash.org/quaeratipsaquia.png?size=50x50&set=set1",
  },
  {
    name: "Milan",
    category: "Toyota",
    price: "$96.73",
    img: "https://robohash.org/uteosporro.png?size=50x50&set=set1",
  },
  {
    name: "LR4",
    category: "Land Rover",
    price: "$43.98",
    img: "https://robohash.org/occaecatidoloremin.png?size=50x50&set=set1",
  },
  {
    name: "G-Class",
    category: "Mercedes-Benz",
    price: "$21.40",
    img: "https://robohash.org/eligendidictainventore.png?size=50x50&set=set1",
  },
  {
    name: "LX",
    category: "Toyota",
    price: "$46.44",
    img: "https://robohash.org/addoloreveritatis.png?size=50x50&set=set1",
  },
  {
    name: "Vantage",
    category: "Aston Martin",
    price: "$155.61",
    img: "https://robohash.org/voluptassaepealiquam.png?size=50x50&set=set1",
  },
  {
    name: "Nitro",
    category: "Toyota",
    price: "$175.78",
    img: "https://robohash.org/hicquidistinctio.png?size=50x50&set=set1",
  },
  {
    name: "GTI",
    category: "Volkswagen",
    price: "$102.09",
    img: "https://robohash.org/nesciuntaccusamusea.png?size=50x50&set=set1",
  },
  {
    name: "XK",
    category: "Toyota",
    price: "$146.54",
    img: "https://robohash.org/autemconsequaturet.png?size=50x50&set=set1",
  },
  {
    name: "PT Cruiser",
    category: "Toyota",
    price: "$113.32",
    img: "https://robohash.org/ducimusestet.png?size=50x50&set=set1",
  },
  {
    name: "XJ",
    category: "Jaguar",
    price: "$100.40",
    img: "https://robohash.org/blanditiisearumcommodi.png?size=50x50&set=set1",
  },
  {
    name: "S10",
    category: "Chevrolet",
    price: "$32.77",
    img: "https://robohash.org/quoetnihil.png?size=50x50&set=set1",
  },
  {
    name: "Sierra 1500",
    category: "Toyota",
    price: "$181.22",
    img: "https://robohash.org/etquissoluta.png?size=50x50&set=set1",
  },
  {
    name: "M3",
    category: "BMW",
    price: "$177.74",
    img: "https://robohash.org/voluptasvoluptasrepudiandae.png?size=50x50&set=set1",
  },
  {
    name: "RX-7",
    category: "BMW",
    price: "$19.28",
    img: "https://robohash.org/praesentiumreprehenderiteos.png?size=50x50&set=set1",
  },
  {
    name: "9000",
    category: "Chevrolet",
    price: "$19.58",
    img: "https://robohash.org/noncorporissapiente.png?size=50x50&set=set1",
  },
];

const uniqueCategories = {};
let i = 0;
// getting unique categories from products
products.map((product) => {
  uniqueCategories[product.category] = ++i;
});

// Creating an array of categories
const categories = Object.keys(uniqueCategories);

// console.log(categories[0]);

// let filteredProducts = products.filter((x) => x.category === "Mazda");
// console.log(filteredProducts);
// creating a new array
// const filteredProducts = [];
// categories.forEach((cat) => {
//   filteredProducts.push(products.filter((product) => product.category == cat));
// });

// console.log(filteredProducts);
// revenues missing

// used for discounts list
const coupons = [
  {
    code: "55111-328",
    date: "5/21/2022",
  },
  {
    code: "54575-217",
    date: "11/6/2021",
  },
  {
    code: "52261-2501",
    date: "3/18/2022",
  },
  {
    code: "60429-556",
    date: "12/23/2021",
  },
  {
    code: "36987-3003",
    date: "6/6/2022",
  },
  {
    code: "0378-7001",
    date: "3/6/2022",
  },
  {
    code: "21695-450",
    date: "6/3/2022",
  },
  {
    code: "0781-2047",
    date: "12/22/2021",
  },
  {
    code: "11822-0321",
    date: "6/30/2022",
  },
  {
    code: "54575-397",
    date: "12/24/2021",
  },
  {
    code: "61786-021",
    date: "2/8/2022",
  },
  {
    code: "21695-594",
    date: "8/31/2022",
  },
  {
    code: "49781-053",
    date: "7/16/2022",
  },
  {
    code: "37000-379",
    date: "8/8/2022",
  },
  {
    code: "41268-165",
    date: "10/6/2021",
  },
  {
    code: "48433-320",
    date: "10/12/2021",
  },
  {
    code: "62756-446",
    date: "10/9/2021",
  },
  {
    code: "64942-0894",
    date: "7/11/2022",
  },
  {
    code: "43063-532",
    date: "1/14/2022",
  },
  {
    code: "55253-072",
    date: "4/7/2022",
  },
];

// used for ads list
const ads = [
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://robohash.org/quisliberodolores.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/temporerecusandaeex.png?size=50x50&set=set1",
  },
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://robohash.org/rerumculpadolorem.png?size=50x50&set=set1",
  },
  {
    img: "hhttps://source.unsplash.com/random",
  },
  {
    img: "https://source.unsplash.com/random",
  },
  {
    img: "https://robohash.org/esteiusdolores.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/exercitationemculpanatus.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/quasiperspiciatisconsequatur.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/rerumquiaquasi.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/voluptatevoluptatemfuga.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/possimusfacilisearum.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/voluptasetquasi.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/verosedat.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/undeetab.png?size=50x50&set=set1",
  },
  {
    img: "https://robohash.org/autquasisuscipit.png?size=50x50&set=set1",
  },
];

// used for inbox
const clients = [
  {
    img: "https://robohash.org/recusandaeharumvoluptatum.png?size=50x50&set=set1",
    username: "Cherri",
  },
  {
    img: "https://robohash.org/dolorumquibusdamquia.png?size=50x50&set=set1",
    username: "Leonie",
  },
  {
    img: "https://robohash.org/velfugaest.png?size=50x50&set=set1",
    username: "Tatiania",
  },
  {
    img: "https://robohash.org/veldistinctioaliquam.png?size=50x50&set=set1",
    username: "Aleksandr",
  },
  {
    img: "https://robohash.org/sedquibusdamvelit.png?size=50x50&set=set1",
    username: "Pru",
  },
  {
    img: "https://robohash.org/etquiin.png?size=50x50&set=set1",
    username: "Alyse",
  },
  {
    img: "https://robohash.org/quidemquisvoluptas.png?size=50x50&set=set1",
    username: "Fin",
  },
  {
    img: "https://robohash.org/idexplicabomaiores.png?size=50x50&set=set1",
    username: "Kaitlin",
  },
  {
    img: "https://robohash.org/accusantiumdictamolestiae.png?size=50x50&set=set1",
    username: "Ursala",
  },
  {
    img: "https://robohash.org/estautsit.png?size=50x50&set=set1",
    username: "Reginald",
  },
];

// used for chat
const notifications = [
  {
    message:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    date: "4:49 PM",
  },
  {
    message:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    date: "4:16 AM",
  },
  {
    message:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    date: "7:35 PM",
  },
  {
    message:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "9:56 PM",
  },
  {
    message:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    date: "6:14 PM",
  },
  {
    message:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    date: "9:08 PM",
  },
  {
    message:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    date: "4:28 AM",
  },
  {
    message:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "12:24 PM",
  },
  {
    message:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    date: "6:41 PM",
  },
  {
    message:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    date: "9:13 PM",
  },
];
