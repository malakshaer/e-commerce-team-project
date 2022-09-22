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
