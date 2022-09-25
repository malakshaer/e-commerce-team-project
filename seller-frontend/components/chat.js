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

  let sendMessage =
    "http://localhost/e-commerce-team-project/server/api/messages/send.php";
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

    params = new URLSearchParams();
    params.append("sender_id", localStorage.getItem("id"));
    params.append("receiver_id", 39);
    params.append("message", userInput.value);
    axios.post(sendMessage, params).then((res) => {
      console.log(res);
    });

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
