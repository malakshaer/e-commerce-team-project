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

            //
            // let image = atob(basedImg).split("base64,")[1];
            // let formData = new FormData();
            // formData.append("profile_id", userId);
            // formData.append("image", image);

            // fetch(`${serverDir}/api/add_er_pic.php`, {
            //   method: "POST",
            //   body: formData,
            // })
            //   .then((response) => response.json())
            //   .then((data) => {
            //     if (data.success) {
            //       localStorage.setItem("er-url", `${serverDir}/user_${userId}.jpg`);
            //       labelImg.src = `${serverDir}/api/user_${userId}/er.jpg`;
            //     }
            //   });
          };
        }
      };

      let banBtn = document.getElementById("ban-btn");
      banBtn.onclick = () => {
        banBtn.classList.toggle("unban");
        if (banBtn.innerText == "Ban") banBtn.innerText = "Unban";
        else banBtn.innerText = "Ban";
      };
    };

    // instead of alert we are going to fetch
  });
};
