function inboxRender() {
  const inboxHeader = `
        <div
          class="inbox-header-container pages-header-container"
          id="inbox-header-id"
        >
          <div class="inbox-header pages-header">
            <div class="inbox-icon pages-header-icon">
              <img src="Images/mail-icon.svg" alt="Inbox Icon" />
            </div>
            <h2>Inbox</h2>
          </div>
          <div class="inbox-add-icon pages-header-add-icon">
            <img src="./Images/add-icon.svg" alt="Add Icon" />
          </div>
        </div>

        <div
          class="inbox-content-container pages-content-container"
          id="inbox-content"
        ></div>
      `;

  function inboxContent() {
    let inboxNotifications = "";

    clients.map((client) => {
      inboxNotifications += `
          <div class="inbox-content pages-content">
            <div class="inbox-content-img">
              <img src="${client.img}" alt="User Image" />
            </div>
            <div class="inbox-content-username">${client.username}</div>
          </div>
        `;
    });
    return inboxNotifications;
  }

  pageWrapper.innerHTML = inboxHeader;
  document.getElementById("inbox-content").innerHTML = inboxContent();
}
