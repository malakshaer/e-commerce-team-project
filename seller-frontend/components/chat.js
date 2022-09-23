const users = [
  {
    message:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    date: "4:49 PM",
  },
  {
    message:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    date: "4:16 AM",
  },
  {
    message:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    date: "7:35 PM",
  },
  {
    message:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "9:56 PM",
  },
  {
    message:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    date: "6:14 PM",
  },
  {
    message:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    date: "9:08 PM",
  },
  {
    message:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    date: "4:28 AM",
  },
  {
    message:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "12:24 PM",
  },
  {
    message:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    date: "6:41 PM",
  },
  {
    message:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    date: "9:13 PM",
  },
];

const button = document.getElementById("send-input");
button.addEventListener("click", sendInput);
const userInput = document.querySelector("#chat-input");
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendInput();
    userInput.value = "";
  }
});
let chatMessages = "";
const chatMessage = () => {
  chatMessages = "";

  users.map(
    (user) =>
      (chatMessages += `
          <div class="chat-message left">
            <div class="chat-message-text left">
              ${user.message}
            </div>
            <div class="chat-message-date left">${user.date}</div>
          </div>
        `)
  );
  return chatMessages;
};
document.getElementById("chat-box").innerHTML = chatMessage();

function sendInput() {
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
