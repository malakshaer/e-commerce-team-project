const topBar = () => {
  const topBar_section = `<div class="top-bar">
      <p class="spruce-trolley">
        <strong class="spruce-trolley-spruce">Spruce</strong>Trolley
      </p>
      <div class="user-profile-picture" id="profile"></div>
    </div>`;
  return topBar_section;
};
document.getElementById("topBar").innerHTML = topBar();

document.getElementById("profile").onclick = () => {
  navHomeBtn.children[0].src = "./images/home-icon.svg";
  navHomeBtn.children[1].style.color = "#54549f";
  navPersonBtn.children[0].src = "./images/person-icon.svg";
  navPersonBtn.children[1].style.color = "#54549f";
  navSearchBtn.children[0].src = "./images/search-icon.svg";
  navSearchBtn.children[1].style.color = "#54549f";
  navCartBtn.children[0].src = "./images/cart-icon.svg";
  navCartBtn.children[1].style.color = "#54549f";
  navMoreBtn.children[0].src = "./images/more-icon.svg";
  navMoreBtn.children[1].style.color = "#54549f";

  document.getElementById(
    "app-body"
  ).innerHTML = `<div class="sign-container"  id='sign-up-container'>
      <h1>Edit Profile</h1>
      <div class="inputs-container">
        <input placeholder="Full name" id='name' />
        <input placeholder="Email" id='email' />
        <input placeholder="Birthdate" id='birth'/>
        <input placeholder="Phone number" id='number'/>
        <input placeholder="Old Password" id='old-password'/>
        <input placeholder="New Password" id='password'/>
        <input placeholder="Confirm Password" id='con-password'/>
      </div>
      <button class="sign-btn" id='sign-up-btn'>Update</button>
    </div>
  </div>
  <div id="logout-container">
  <button class="sign-btn" id="logout">LogOut</button></div>`;

  // document.getElementById("sign-body").innerHTML = signUp();
  document.getElementById("logout").onclick = () => {
    localStorage.removeItem("user");
    location.href = "../sgin.html";
  };
};
