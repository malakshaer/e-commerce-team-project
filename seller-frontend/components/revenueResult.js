window.addEventListener("DOMContentLoaded", () => {
  const revenueResult = () => {
    var revenueResults = "";

    revenues.map(
      (rev) =>
        (revenueResults += `
            <div class="revenue-result"></div>
        `)
    );
    return revenueResults;
  };
  document.getElementById("revenue-result-id").innerHTML = revenueResult();
});

const revenues = [1];
