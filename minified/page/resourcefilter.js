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
        tags.textContent = resources.tags;

        let category = card.getElementsByClassName("resource-category")[0];
        category.textContent = resources.categories;

        let buttontext = card.getElementsByClassName("buttontext")[0];
        buttontext.textContent = resources.Button_text;

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
  let filterCategory = document
    .getElementById("filter-category")
    .value.toLowerCase();
  let filterTags = document.getElementById("filter-tags").value.toLowerCase();

  let templates = document.querySelectorAll('[w-el="memberItem"]');

  templates.forEach((template) => {
    let name = template
      .querySelector('[w-el="name"]')
      .textContent.toLowerCase();
    let category = template
      .querySelector(".resource-category")
      .textContent.toLowerCase();
    let tags = template
      .querySelector(".tags-resources")
      .textContent.toLowerCase();

    if (
      name.includes(filterName) &&
      (category === filterCategory || filterCategory === "") &&
      (tags === filterTags || filterTags === "")
    ) {
      template.style.display = "block";
    } else {
      template.style.display = "none";
    }
  });
}

function populateSelectOptions() {
  const templates = document.querySelectorAll('[w-el="memberItem"]');
  const categories = new Set();
  const tags = new Set();

  templates.forEach((template) => {
    let categoryText = template
      .querySelector(".resource-category")
      .textContent.trim();
    let tagsText = template.querySelector(".tags-resources").textContent.trim();

    if (categoryText && categoryText !== "category name here") {
      categories.add(categoryText);
    }
    if (tagsText && tagsText !== "tags here") {
      tags.add(tagsText);
    }
  });

  addOptionsToSelect("filter-category", Array.from(categories).sort());
  addOptionsToSelect("filter-tags", Array.from(tags).sort());
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
  document.getElementById("filter-category").value = "";
  document.getElementById("filter-tags").value = "";

  // Display all member items
  const templates = document.querySelectorAll('[w-el="memberItem"]');
  templates.forEach((template) => {
    template.style.display = "block";
  });
}

document.getElementById("resetFilters").addEventListener("click", resetFilters);
