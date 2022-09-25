if (localStorage.getItem("password")) {
  window.location.href = "index.html";
}

const signIn = () => {
  return `
          <div class="sign-container " id='sign-in-container'>
            <h1>Sign in to your account</h1>
            <div class="inputs-container">
              <input placeholder="Email" id='mail' />
              <input placeholder="Password" id='pass'/>
            </div>
            <button class="sign-btn" id='sign-in-btn'>Sign In</button>
            </div>
          </div>
        `;
};

document.getElementById("sign-body").innerHTML = signIn();

let signAPI =
  "http://localhost/e-commerce-team-project/server/api/sign/signin.php";
document.getElementById("sign-in-btn").onclick = () => {
  let params = new URLSearchParams();
  params.append("email", document.getElementById("mail").value);
  params.append("password", document.getElementById("pass").value);
  axios.post(signAPI, params).then((res) => {
    if (res.data.id) {
      seller = res.data;
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("password", res.data.password);
      localStorage.setItem("img", res.data.profile_img);

      window.location.href = "index.html";
    }
  });
};
