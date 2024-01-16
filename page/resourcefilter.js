let xanoUrl = new URL("https://x8ki-letl-twmt.n7.xano.io/api:KVCX5lqj");

function getresources() {
  let request = new XMLHttpRequest();
  let url = `${xanoUrl}/resources`;
  request.open("GET", url, true);

  request.onload = function () {
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      let cardContainer = document.getElementById("Cards-Container");

      data.forEach((resources) => {
        let style = document.getElementById("samplestyle");
        let card = style.cloneNode(true);

        card.setAttribute("id", "");
        card.style.display = "block";

        card.addEventListener("click", function () {
          document.location.href = "/resource/" + resources.slug;
        });

        let img = card.getElementsByTagName("IMG")[0];
        img.src = resources.thumbnail + "?tpl=big:box";

        let h2 = card.getElementsByTagName("H3")[0];
        h2.textContent = resources.name;

        let date = card.getElementsByClassName("heading--14")[0];
        date.textContent = resources.date;

        let tags = card.getElementsByClassName("tags-resources")[0];
        tags.textContent = resources.date;

        let category = card.getElementsByClassName("resource-category")[0];
        category.textContent = resources.categories;

        let buttontext = card.getElementsByClassName("buttontext")[0];
        buttontext.textContent = resources.tags;

        cardContainer.appendChild(card);
      });

      // Populate the select options after the cards are added.
      populateSelectOptions();
    }
  };

  request.send();
}

(function () {
  getresources();
})();

function filterTemplates() {
  let filterName = document.getElementById("filter-name").value.toLowerCase();
  let filterCountry = document
    .getElementById("filter-country")
    .value.toLowerCase();
  let filterYear = document.getElementById("filter-year").value.toLowerCase();
  let filterProgram = document
    .getElementById("filter-program")
    .value.toLowerCase();

  let templates = document.querySelectorAll('[w-el="memberItem"]');

  templates.forEach((template) => {
    let name = template
      .querySelector('[w-el="name"]')
      .textContent.toLowerCase();
    let country = template
      .querySelector(".country-name")
      .textContent.toLowerCase();
    let year = template.querySelector(".year").textContent.toLowerCase();
    let program = template
      .querySelector('[w-el="program"]')
      .textContent.toLowerCase();

    if (
      name.includes(filterName) &&
      (country === filterCountry || filterCountry === "") &&
      (year === filterYear || filterYear === "") &&
      (program === filterProgram || filterProgram === "")
    ) {
      template.style.display = "block";
    } else {
      template.style.display = "none";
    }
  });
}

function populateSelectOptions() {
  const templates = document.querySelectorAll('[w-el="memberItem"]');
  const countries = new Set();
  const years = new Set();
  const programs = new Set();

  templates.forEach((template) => {
    let countryText = template
      .querySelector(".country-name")
      .textContent.trim();
    let yearText = template.querySelector(".year").textContent.trim();
    let programText = template
      .querySelector('[w-el="program"]')
      .textContent.trim();

    if (countryText && countryText !== "country name here") {
      countries.add(countryText);
    }
    if (yearText && yearText !== "year here") {
      years.add(yearText);
    }
    if (
      programText &&
      programText !== "This is some text inside of a div block."
    ) {
      programs.add(programText);
    }
  });

  // Convert the Sets to Arrays, sort them, and then pass them to addOptionsToSelect
  addOptionsToSelect("filter-country", Array.from(countries).sort());
  addOptionsToSelect("filter-year", Array.from(years).sort());
  addOptionsToSelect("filter-program", Array.from(programs).sort());
}

function addOptionsToSelect(selectId, items) {
  const select = document.getElementById(selectId);
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.toLowerCase();
    option.textContent = item;
    select.appendChild(option);
  });
}

function resetFilters() {
  // Reset input fields
  document.getElementById("filter-name").value = "";
  document.getElementById("filter-country").value = "";
  document.getElementById("filter-year").value = "";
  document.getElementById("filter-program").value = "";

  // Display all member items
  const templates = document.querySelectorAll('[w-el="memberItem"]');
  templates.forEach((template) => {
    template.style.display = "block";
  });
}

document.getElementById("resetFilters").addEventListener("click", resetFilters);
