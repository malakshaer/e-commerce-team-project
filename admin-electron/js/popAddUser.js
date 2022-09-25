const addSellerAPI =
  "http://localhost/e-commerce-team-project/server/api/sellers/add.php";

const popAddUser = () => {
  return `
  <div class="pop-up">
  <div class='pop-container ' id='pop-container' >
    <div class="pop-up-head">
      <div class="close-pop-up" id="close-pop-up">x</div>
    </div>
  <div class='pop-body'>
    <input placeholder='Email' id='seller-email'/>
    <input placeholder='Name' id='seller-name'/>
    <input placeholder='Password' id='seller-pass'/>
    <button class="sign-btn" id='add-one'>Add</div>
  </div>
  </div>
  </div>`;
};

// user pop-up
document.getElementById("pop-up").innerHTML = popAddUser();
document.getElementById("pop-up").classList.add("display-none");

const setpopUp = () => {
  document.getElementById("plus").onclick = () => {
    document.getElementById("pop-up").classList.remove("display-none");
    document.getElementById("close-pop-up").onclick = () => {
      document.getElementById("pop-up").classList.add("display-none");
    };

    // on click add seller

    document.getElementById("add-one").onclick = () => {
      var params = new URLSearchParams();
      params.append("email", document.getElementById("seller-email").value);
      params.append("name", document.getElementById("seller-pass").value);
      params.append("password", document.getElementById("seller-name").value);
      params.append(
        "profile_img",
        "https://robohash.org/recusandaeinciduntet.png?size=250x250&set=set1"
      );

      axios
        .post(addSellerAPI, params)
        .then(
          (res) =>
            res.data.id &&
            document.getElementById("pop-up").classList.add("display-none")
        );
    };
  };
};
