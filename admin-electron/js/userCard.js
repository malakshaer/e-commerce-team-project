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
