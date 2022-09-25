window.addEventListener("DOMContentLoaded", () => {
  const categoriesSelect = () => {
    var categoriesSelects = "";

    options.map(
      (option) =>
        (categoriesSelects += `
          <option value="${option.name}">${option.name}</option>
        `)
    );
    return categoriesSelects;
  };
  document.getElementById("categories-select-id").innerHTML =
    categoriesSelect();
});

const options = [
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
