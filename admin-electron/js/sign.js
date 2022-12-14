let signAPI =
  "http://localhost/e-commerce-team-project/server/api/sign/signin.php";

//  sign up form
// const signUp = () => {
//   return `<div class="sign-container display-none"  id='sign-up-container'>
//     <h1>Create new account</h1>
//     <div class="inputs-container">
//       <input placeholder="Full name" id='name' />
//       <input placeholder="Email" id='email' />
//       <input placeholder="Birthdate" id='birth'/>
//       <input placeholder="Phone number" id='number'/>
//       <input placeholder="Password" id='password'/>
//     </div>
//     <button class="sign-btn" id='sign-up-btn'>Sign Up</button>
//     <div class="have-account" id='have-account'>already have an account</div>
//   </div>
// </div>`;
// };

// const validateCode = () => {
//   return `<div class="sign-container display-none"  id='validation-container'>
//       <h1>Enter the verification code</h1>
//       <div class="inputs-container">
//         <input placeholder="code" id='name' />
//       </div>
//       <button class="sign-btn" >Verify</button>
//     </div>
//   </div>`;
// };

const signIn = () => {
  return `<div class="sign-container " id='sign-in-container'>
      <h1>Sign in to your account</h1>
      <div class="inputs-container">
        <input placeholder="Email" id='mail' />
        <input placeholder="Password" id='pass'/>
      </div>
      <button class="sign-btn" id='sign-in-btn'>Sign In</button>
      </div>
      </div>`;
};
// <div class="have-account" id='dont-have'>I dont have an account</div>

// sign up switch
if (JSON.parse(localStorage.getItem("user"))) {
  document.getElementById("main-container").classList.remove("display-none");
  document.getElementById("sign-container").classList.add("display-none");
} else {
  document.getElementById("main-container").classList.add("display-none");
  document.getElementById("sign-container").classList.remove("display-none");
  document.getElementById("sign-body").innerHTML = signIn();
}
// signUp() + signIn() + validateCode();

// document.getElementById("have-account").onclick = () => {
//   document.getElementById("sign-up-container").classList.add("display-none");
//   document.getElementById("sign-in-container").classList.remove("display-none");
//   document.getElementById("validation-container").classList.add("display-none");
// };

// document.getElementById("dont-have").onclick = () => {
//   document.getElementById("sign-up-container").classList.remove("display-none");
//   document.getElementById("sign-in-container").classList.add("display-none");
//   document.getElementById("validation-container").classList.add("display-none");
// };

// sign up button
// document.getElementById("sign-up-btn").onclick = () => {
//   document.getElementById("sign-up-container").classList.add("display-none");
//   document.getElementById("sign-in-container").classList.add("display-none");
//   document
//     .getElementById("validation-container")
//     .classList.remove("display-none");
// };

// on clicking the sign in button
document.getElementById("sign-in-btn").onclick = () => {
  var params = new URLSearchParams();
  params.append("email", document.getElementById("mail").value);
  params.append("password", document.getElementById("pass").value);

  axios.post(signAPI, params).then((res) => {
    if (res.data.user_type_id == 0) {
      document
        .getElementById("main-container")
        .classList.remove("display-none");
      document.getElementById("sign-container").classList.add("display-none");
      localStorage.setItem("user", JSON.stringify(res.data));
    }
  });
};
