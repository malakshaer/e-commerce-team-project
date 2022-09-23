const topBar = () => {
  const topBar_section = `<div class="top-bar">
      <p class="spruce-trolley">
        <strong class="spruce-trolley-spruce">Spruce</strong>Trolley
      </p>
      <div class="user-profile-picture"></div>
    </div>`;
  return topBar_section;
};
document.getElementById("topBar").innerHTML = topBar();
