const revenues = [1];

function revenueRender() {
  const revenueHeader = `
        <div
          class="revenue-header-container pages-header-container"
          id="revenue-header-id"
        >
          <div class="revenue-header pages-header">
            <div class="categories-icon pages-header-icon">
              <img src="Images/revenue-icon.svg" alt="revenue Icon" />
            </div>
            <h2>Revenue</h2>
          </div>
        </div>

        <div
          class="revenue-content-container pages-content-container"
          id="revenue-content"
        >
          <div class="revenue-content pages-content">
            <div class="revenue-btn">Week</div>
            <div class="revenue-btn">Month</div>
            <div class="revenue-btn">Year</div>
          </div>
        </div>

        <div class="revenue-result-container" id="revenue-result-id"></div>
      `;

  function revenueResult() {
    let revenueResults = "";

    revenues.map((revenue) => {
      revenueResults += `
          <div class="revenue-result"></div>
        `;
    });
    return revenueResults;
  }

  pageWrapper.innerHTML = revenueHeader;
  document.getElementById("revenue-result-id").innerHTML = revenueResult();
}
