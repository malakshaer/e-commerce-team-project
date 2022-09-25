const banAPI =
  "http://localhost/e-commerce-team-project/server/api/users/ban.php";
const editAPI =
  "http://localhost/e-commerce-team-project/server/api/users/edit.php";

const userCard = (users, option = "Edit") => {
  var usersList = "";
  users.map(
    (user, i) =>
      (usersList += `<div class="user-card">
                <div class="user-card-img-name">
                  <div class="user-card-img-container">
                    <img width="100%" src="${user.profile_img}" alt="" />
                  </div>
                  <p class="user-card-name">${user.name}</p>
                </div>
                <p  class="user-card-edit" id='${user.id}'>${option}</p>
              </div>`)
  );
  return usersList;
};

const loopingOverUserCards = () => {
  // functioning each element
  let editUser = document.querySelectorAll(".user-card-edit");

  editUser.forEach((edit) => {
    edit.onclick = () => {
      document.getElementById("app-body").innerHTML = userRender(edit.id);

      document.getElementById("img-input").onchange = (event) => {
        var file = event.target.files[0];
        var reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
          reader.onload = (event) => {
            document.getElementById("label-img").src = event.target.result;
            basedImg = btoa(event.target.result);
          };
        }
      };

      let banBtn = document.getElementById("ban-btn");
      banBtn.onclick = () => {
        banBtn.classList.toggle("unban");
        if (banBtn.innerText == "Ban") banBtn.innerText = "Unban";
        else banBtn.innerText = "Ban";
        var params = new URLSearchParams();
        params.append("user_id", edit.id);
        axios.post(banAPI, params).then((res) => console.log(res.data));
      };

      let editBtn = document.getElementById("edit-btn");
      editBtn.onclick = () => {
        var params = new URLSearchParams();
        params.append("id", edit.id);
        params.append("name", document.getElementById("username").value);
        params.append("email", document.getElementById("user-mail").value);
        params.append("password", document.getElementById("user-pass").value);

        axios.post(editAPI, params).then((res) => console.log(res.data));
      };
    };

    // instead of alert we are going to fetch
  });
};
