const navBar = () => {
  let topNavBars = "";

  users.map(
    (user) =>
      (topNavBars += `
          <div class="hamburger-container" id="hamburger-menu">
            <img src="./Images/hamburger-icon.svg" alt="hamburger menu" />
          </div>
          <div class="top-nav-logo-container">
            <img src="Images/Logo-horizontal.svg" alt="Logo" />
          </div>
          <div class="profile-pic" id="profile-img" title="Sign Out">
            <img src="${user.img_url}" alt="profile picture" />
          </div>
        `)
  );
  return topNavBars;
};
document.getElementById("top-nav-bar").innerHTML = navBar();
