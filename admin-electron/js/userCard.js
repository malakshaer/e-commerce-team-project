const userCard = (users, option = "Edit") => {
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
                <p href=""  class="user-card-edit" id='${user.id}'>${option}</p>
              </div>`)
  );
  return usersList;
};

const loopingOverUserCards = () => {
  // functioning each element
  let editUser = document.querySelectorAll(".user-card-edit");

  editUser.forEach((edit) => {
    edit.onclick = () => alert(edit.id);
    // instead of alert we are going to fetch
  });
};
