window.addEventListener("DOMContentLoaded", () => {
  const revenueFilter = () => {
    var revenueFilters = "";

    revenue.map(
      (rev) =>
        (revenueFilters += `
          <div class="revenue-content pages-content">
            <div class="revenue-btn">Week</div>
            <div class="revenue-btn">Month</div>
            <div class="revenue-btn">Year</div>
          </div>
        `)
    );
    return revenueFilters;
  };
  document.getElementById("revenue-content").innerHTML = revenueFilter();
});

const revenue = [1];
