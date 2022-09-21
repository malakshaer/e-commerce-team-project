window.addEventListener("DOMContentLoaded", () => {
  const categoriesContent = () => {
    var categoriesContents = "";

    categories.map(
      (category) =>
        (categoriesContents += `
        <div class="categories-content">
          <h2>${category.name}</h2>
          <h3>remove</h3>
        </div>
        `)
    );
    return categoriesContents;
  };
  document.getElementById("categories-content").innerHTML = categoriesContent();
});

const categories = [
  {
    name: "Site Furnishings",
  },
  {
    name: "Soft Flooring and Base",
  },
  {
    name: "RF Shielding",
  },
  {
    name: "Drilled Shafts",
  },
  {
    name: "Roofing (Metal)",
  },
  {
    name: "Fire Sprinkler System",
  },
  {
    name: "Temp Fencing, Decorative Fencing and Gates",
  },
  {
    name: "Drywall & Acoustical (MOB)",
  },
  {
    name: "Landscaping & Irrigation",
  },
  {
    name: "Doors, Frames & Hardware",
  },
  {
    name: "Roofing (Asphalt)",
  },
  {
    name: "Casework",
  },
  {
    name: "Overhead Doors",
  },
  {
    name: "Exterior Signage",
  },
  {
    name: "Drywall & Acoustical (MOB)",
  },
  {
    name: "Elevator",
  },
  {
    name: "Sitework & Site Utilities",
  },
  {
    name: "Doors, Frames & Hardware",
  },
  {
    name: "Temp Fencing, Decorative Fencing and Gates",
  },
  {
    name: "Rebar & Wire Mesh Install",
  },
];
