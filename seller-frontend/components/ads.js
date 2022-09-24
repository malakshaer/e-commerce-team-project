function adsRender() {
  const adsHeader = `
        <div
          class="ads-header-container pages-header-container"
          id="ads-header-id"
        >
          <div class="ads-header pages-header">
            <div class="ads-icon pages-header-icon">
              <img src="Images/Ads-icon.svg" alt="Ads Icon" />
            </div>
            <h2>Published Ads</h2>
          </div>
          <div class="ads-add-icon pages-header-add-icon">
            <img src="./Images/add-icon.svg" alt="Add Icon" />
          </div>
        </div>

        <div
          class="ads-content-container pages-content-container"
          id="ads-content"
        ></div>
      `;

  function adsContent() {
    let adsList = "";

    ads.map((ad) => {
      adsList += `
          <div class="ads-content pages-content">
            <div class="ads-content-img">
              <img src="${ad.img}" alt="Ads Image" />
            </div>
            <div class="ads-content-url">
              <p>
                Link:
                <a href="${ad.img}">${ad.img}</a>
              </p>
            </div>
            <h3>remove</h3>
          </div>
        `;
    });
    return adsList;
  }

  pageWrapper.innerHTML = adsHeader;
  document.getElementById("ads-content").innerHTML = adsContent();
}
