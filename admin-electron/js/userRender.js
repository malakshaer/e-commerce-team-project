const userRender = (id) => {
  //   axios.fetch("");
  user = sellers.concat(clients).filter((seller) => seller.id == id)[0];

  return `<div class='edit-page'>
    <div class='edit-head'>    
    <div>Edit ${user.name}</div>
    <button class="ban-btn ${user.is_ban || "unban"}" id='ban-btn'>${
    user.is_ban ? "Unban" : "Ban"
  }</button>
</div>
    <div class="edit-user-profile-img">
    <label for="img-input" class="img-label cursor-pointer">
    <img class='label-img' id='label-img' alt='' src='${user.profile_img}'>
    </label>
    <input class="file-input" id="img-input" type="file" />
    </div>
    <input alt="" placeholder="Full name" value='${user.name}' id='username' />
    <input placeholder="Email" id="user-mail" value='${user.email}'/>
    <input placeholder="Password" id="user-pass" value='${
      user.password || ""
    }' />
    <button class="sign-btn" id='edit-btn'>Save</button>

  </div>`;
};
