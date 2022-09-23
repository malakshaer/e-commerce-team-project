const userRender = (id) => {
  //   axios.fetch("");
  user = sellers.filter((seller) => seller.id == id)[0];
  return `<div class='edit-page'>
    <div class='edit-head'>    
    <div>Edit ${user.name}</div>
    <button class="ban-btn ${user.is_ban && "unban"}" id='ban-btn'>${
    user.is_ban ? "Unban" : "Ban"
  }</button>
</div>
    <div class="edit-user-profile-img">
    <label for="img-input" class="img-label cursor-pointer">
    <img class='label-img' id='label-img' alt='' src='${user.img_url}'>
    </label>
    <input class="file-input" id="img-input" type="file" />
    </div>
    <input alt="" placeholder="Full name" value='${user.name}' />
    <input placeholder="Email" id="email" value='${user.mail || ""}'/>
    <input placeholder="Phone number" id="number" value='${
      user.number || ""
    }' />
    <button class="sign-btn">Save</button>

  </div>`;
};
