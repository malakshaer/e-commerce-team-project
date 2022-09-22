const navBar = () => {
  return `<div class="nav-icon" id="nav-sellers-btn">
    <img id='img' src="./assets/sellers-active-icon.svg" alt="" />
  </div>
  <div class="nav-icon" id="nav-statistics-btn">
    <img src="./assets/statistics-icon.svg" alt="" />
  </div>
  <div class="nav-icon" id="nav-clients-btn">
    <img src="./assets/clients-icon.svg" alt="" />
  </div>`;
};

const navBarDom = document.getElementById("nav-bar");
navBarDom.innerHTML = navBar();
