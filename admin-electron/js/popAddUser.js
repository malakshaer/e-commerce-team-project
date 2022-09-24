const popAddUser = () => {
  return `
  <div class="pop-up">
  <div class='pop-container ' id='pop-container' >
    <div class="pop-up-head">
      <div class="close-pop-up" id="close-pop-up">x</div>
    </div>
  <div class='pop-body'>
    <input placeholder='Email'/>
    <input placeholder='password'/>
    <button class="sign-btn">Add</div>
  </div>
  </div>
  </div>`;
};
document.getElementById("pop-up").innerHTML = popAddUser();
document.getElementById("pop-up").classList.add("display-none");

document.getElementById("plus").onclick = () => {
  document.getElementById("pop-up").classList.remove("display-none");
  document.getElementById("close-pop-up").onclick = () => {
    document.getElementById("pop-up").classList.add("display-none");
  };
};
