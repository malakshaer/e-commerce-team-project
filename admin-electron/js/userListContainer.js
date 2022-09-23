const uList = (usertype, option = "") => {
  return `<div class='uList'>
  <div class='uList-title'>
    <h2 id="title">${usertype}</h2> 
    <div class='plus' id='plus'>${option}</div></div>
  <div id="users-list" class="sellers-list"></div></div>`;
};
