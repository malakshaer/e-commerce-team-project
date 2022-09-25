window.addEventListener("DOMContentLoaded", () => {
  const x = () => {
    var y = "";

    sellers.map(
      (seller) =>
        (y += `

        `)
    );
    return y;
  };
  document.getElementById("top-nav-bar").innerHTML = x();
});

const sellers = [1];
