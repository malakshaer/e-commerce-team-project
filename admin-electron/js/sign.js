const signUp = () => {
  return `<div class="sign-container"  id='sign-up-container'>
    <h1>Create new account</h1>
    <div class="inputs-container">
      <input placeholder="Full name" id='name' />
      <input placeholder="Email" id='email' />
      <input placeholder="Birthdate" id='birth'/>
      <input placeholder="Phone number" id='number'/>
      <input placeholder="Password" id='password'/>
    </div>
    <button class="sign-btn" id='sign-up-btn'>Sign Up</button>
    <div class="have-account" id='have-account'>already have an account</div>
  </div>
</div>`;
};

const validateCode = () => {
  return `  <div class="sign-container display-none"  id='validation-container'>
      <h1>Enter the verification code</h1>
      <div class="inputs-container">
        <input placeholder="code" id='name' />
      </div>
      <button class="sign-btn" >Verify</button>
    </div>
  </div>`;
};

const signIn = () => {
  return `<div class="sign-container display-none" id='sign-in-container'>
      <h1>Sign in to your account</h1>
      <div class="inputs-container">
        <input placeholder="Email" id='mail' />
        <input placeholder="Password" id='pass'/>
      </div>
      <button class="sign-btn" id='sign-in-btn'>Sign In</button>
      <div class="have-account" id='dont-have'>I dont have an account</div>
    </div>
  </div>`;
};

document.getElementById("sign-body").innerHTML =
  signUp() + signIn() + validateCode();

document.getElementById("have-account").onclick = () => {
  document.getElementById("sign-up-container").classList.add("display-none");
  document.getElementById("sign-in-container").classList.remove("display-none");
  document.getElementById("validation-container").classList.add("display-none");
};

document.getElementById("dont-have").onclick = () => {
  document.getElementById("sign-up-container").classList.remove("display-none");
  document.getElementById("sign-in-container").classList.add("display-none");
  document.getElementById("validation-container").classList.add("display-none");
};

document.getElementById("sign-up-btn").onclick = () => {
  document.getElementById("sign-up-container").classList.add("display-none");
  document.getElementById("sign-in-container").classList.add("display-none");
  document
    .getElementById("validation-container")
    .classList.remove("display-none");
};

document.getElementById("sign-in-btn").onclick = () => {
  window.location.replace("/admin-electron/admin.html");
};
