const labelContainer = (icon, title, number) => {
  return `<div class="label-container">
            <div class="label-with-icon">
              <div>
                <img alt="" src="./assets/${icon}.svg" />
              </div>
              <h2>${title}</h2>
            </div>
            <h2>${number}</h2>
          </div>`;
};
