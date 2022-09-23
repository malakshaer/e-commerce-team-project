const sellersRender = () => {
  document.getElementById("app-body").innerHTML = uList("Sellers");
  document.getElementById("users-list").innerHTML = userCard(sellers);

  loopingOverUserCards();
};
