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
          <div class="ads-add-icon pages-header-add-icon" id="add-icon">
            <img src="./Images/add-icon.svg" alt="Add Icon" />
          </div>
        </div>

        <div class="popup popup-ads" id="popup-id">
          <div class="popup-close-btn" id="close-popup">
            <img src="./Images/x-icon.svg" alt="Close Icon" />
          </div>
          <input type="file" class="input-file" name="filename">
          <label for="url">url: </label>
          <input type="text" id="url" class="ads-url"/>
          <button id="add-category">Add</button>
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

  let addAds =
    "http://localhost/e-commerce-team-project/server/api/ads/add.php?seller_id=3";
  const pop = document.getElementById("popup-id");
  const addIcon = document.getElementById("add-icon");
  const addCategory = document.getElementById("add-category");
  const closePopup = document.getElementById("close-popup");
  addIcon.addEventListener("click", () => {
    pop.classList.add("show-flex");
  });
  closePopup.addEventListener("click", () => {
    pop.classList.remove("show-flex");
  });
  addCategory.addEventListener("click", () => {
    pop.classList.remove("show-flex");

    params = new URLSearchParams();
    params.append("seller_id", localStorage.getItem("id"));
    params.append("picture_url", "url");
    params.append("link", document.getElementById("url"));
    axios.post(addAds, params).then((res) => {
      // console.log(res);
    });
  });
}
