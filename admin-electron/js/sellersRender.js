const sellersRender = () => {
  document.getElementById("app-body").innerHTML = uList("Sellers", "+");

  axios.get(getSellersAPI).then((res) => {
    document.getElementById("users-list").innerHTML = userCard(res.data);
    loopingOverUserCards();
  });

  setpopUp();
};
