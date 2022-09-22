// data
const users = [
  {
    id: 1,
    name: "Meryl Roberson",
    img_url: "https://robohash.org/undeeteaque.png?size=50x50&set=set1",
    username: "mroberson0",
  },
  {
    id: 2,
    name: "Bennett Kollas",
    img_url: "https://robohash.org/fugaiureat.png?size=50x50&set=set1",
    username: "bkollas1",
  },
  {
    id: 3,
    name: "Yves Pitherick",
    img_url:
      "https://robohash.org/architectoreiciendiset.png?size=50x50&set=set1",
    username: "ypitherick2",
  },
  {
    id: 4,
    name: "Gale Gillbard",
    img_url: "https://robohash.org/iustoundeest.png?size=50x50&set=set1",
    username: "ggillbard3",
  },
  {
    id: 5,
    name: "Rosalinde Truelock",
    img_url: "https://robohash.org/quimagniaut.png?size=50x50&set=set1",
    username: "rtruelock4",
  },
  {
    id: 3,
    name: "Yves Pitherick",
    img_url:
      "https://robohash.org/architectoreiciendiset.png?size=50x50&set=set1",
    username: "ypitherick2",
  },
  {
    id: 4,
    name: "Gale Gillbard",
    img_url: "https://robohash.org/iustoundeest.png?size=50x50&set=set1",
    username: "ggillbard3",
  },
  {
    id: 5,
    name: "Rosalinde Truelock",
    img_url: "https://robohash.org/quimagniaut.png?size=50x50&set=set1",
    username: "rtruelock4",
  },
];

const userCard = () => {
  var usersList = "";
  users.map(
    (user, i) =>
      (usersList += `<div class="user-card">
                <div class="user-card-img-name">
                  <div class="user-card-img-container">
                    <img width="100%" src="${user.img_url}" alt="" />
                  </div>
                  <p class="user-card-name">${user.name}</p>
                </div>
                <p href=""  class="user-card-edit" id='${user.id}'>Edit</p>
              </div>`)
  );
  return usersList;
};
console.log(userCard());
// inserting the document in the dom
document.getElementById("users-list").innerHTML = userCard();

// functioning each element
const editSeller = document.querySelectorAll(".user-card-edit");

editSeller.forEach((edit) => {
  edit.addEventListener("click", () => alert(edit.id));
  // instead of alert we are going to fetch
});
