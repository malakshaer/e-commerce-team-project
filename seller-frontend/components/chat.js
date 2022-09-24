// let chatMessages = "";
// const chatMessage = () => {
//   chatMessages = "";

//   users.map(
//     (user) =>
//       (chatMessages += `
//           <div class="chat-message left">
//             <div class="chat-message-text left">
//               ${user.message}
//             </div>
//             <div class="chat-message-date left">${user.date}</div>
//           </div>
//         `)
//   );
//   return chatMessages;
// };
// document.getElementById("chat-box").innerHTML = chatMessage();
var chatMessages;
function chatRender() {
  const chatHeader = `
        <div
          class="chat-header-container pages-header-container"
          id="chat-header-id"
        >
          <div class="chat-header pages-header">
            <div class="chat-icon pages-header-icon">
              <img src="Images/mail-icon.svg" alt="Email Icon" />
            </div>
            <h2>${users[0].name}</h2>
          </div>
          <div class="chat-add-icon pages-header-add-icon">
            <img src="./Images/add-icon.svg" alt="Add Icon" />
          </div>
        </div>

        <div
          class="chat-content-container pages-content-container"
          id="chat-content-id"
        >
          <div class="chat-content pages-content" id="chat-box">
          </div>
          <div class="chat-input pages-content">
            <textarea name="input" id="user-input"></textarea>
            <div class="chat-send-img" id="send-input">
              <img src="./Images/send-icon.svg" alt="Send Icon" />
            </div>
          </div>
        </div>
      `;

  function chatContent() {
    chatMessages = "";

    notifications.map((notification) => {
      chatMessages += `
          <div class="chat-message left">
            <div class="chat-message-text left">
              ${notification.message}
            </div>
            <div class="chat-message-date left">${notification.date}</div>
          </div>
        `;
    });
    return chatMessages;
  }

  pageWrapper.innerHTML = chatHeader;
  document.getElementById("chat-box").innerHTML = chatContent();

  const button = document.getElementById("send-input");
  button.addEventListener("click", send);
  const userInput = document.getElementById("user-input");
  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      send();
    }
  });
  function send() {
    sendInput(userInput);
    userInput.value = "";
  }
}

function sendInput(userInput) {
  chatMessages += `
        <div class="chat-message right">
          <div class="chat-message-text right">
            ${userInput.value}
          </div>
          <div class="chat-message-date right">${new Date().toLocaleTimeString()}</div>
        </div>
    `;
  document.getElementById("chat-box").innerHTML = chatMessages;
}
