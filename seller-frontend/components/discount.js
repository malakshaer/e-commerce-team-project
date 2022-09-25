window.addEventListener("DOMContentLoaded", () => {
  const discounts = () => {
    var discount = "";

    coupons.map(
      (coupon) =>
        (discount += `
          <div class="discount-content pages-content">
            <div class="discount-code">
              <p>${coupon.code}</p>
            </div>
            <div class="discount-expiry">
              <p>${coupon.date}</p>
            </div>
          </div>
        `)
    );
    return discount;
  };
  document.getElementById("discount-content").innerHTML = discounts();
});

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
