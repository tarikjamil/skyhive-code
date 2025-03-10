document.addEventListener("DOMContentLoaded", async function () {
  const cmsContainer = document.getElementById("cms-container");
  const searchInput = document.querySelector(".search-input");
  const categoryFilters = document.querySelectorAll(".filter--radio");
  const resetFilterIcon = document.querySelector(".filter-icon");
  const resourceCategoriesSections = document.querySelectorAll(".section.is--resources-cat");
  const searchResultsSection = document.querySelector(".is--resources-search-result");
  let cmsItems = [];
  let visibleItems = [];
  let activeCategoryFilter = null;
  let searchQuery = "";
  let totalPages = 10; // Default pages, but we will adjust dynamically

  if (!cmsContainer) {
    console.error("CMS container not found in the DOM.");
    return;
  }

  async function fetchPageContent(pageNumber) {
    try {
      const response = await fetch(`/blog-items/page-${pageNumber}`);
      if (!response.ok) {
        console.warn(`Page ${pageNumber} not found, stopping at ${pageNumber - 1}`);
        totalPages = pageNumber - 1; // Adjust total pages dynamically
        return [];
      }
      const pageContent = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(pageContent, "text/html");
      return Array.from(doc.querySelectorAll(".cms-item"));
    } catch (error) {
      console.error(`Error fetching page ${pageNumber}:`, error);
      return [];
    }
  }

  function parseDate(dateString) {
    if (!dateString) return new Date(0); // Default to old date if missing

    const months = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };
    const parts = dateString.split(" ");
    if (parts.length < 3) return new Date(0); // Handle invalid dates

    const month = months[parts[0]];
    const day = parseInt(parts[1].replace(",", ""));
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  }

  function sortItemsByDate() {
    cmsItems = cmsItems.filter(item => item.querySelector(".date-field")); // Remove items without date
    cmsItems.sort((a, b) => {
      const dateA = parseDate(a.querySelector(".date-field")?.textContent.trim());
      const dateB = parseDate(b.querySelector(".date-field")?.textContent.trim());
      return dateB - dateA; // Sort newest to oldest
    });
  }

  async function loadAllPages() {
    try {
      for (let i = 1; i <= totalPages; i++) {
        const items = await fetchPageContent(i);
        if (items.length === 0) break; // Stop fetching if no items returned
        cmsItems.push(...items);
      }
      sortItemsByDate();
      cmsItems.forEach((item) => cmsContainer.appendChild(item));
      applyFilters();
    } catch (error) {
      console.error("Error loading all pages:", error);
    }
  }

  function applyFilters() {
    visibleItems = cmsItems.filter((item) => {
      const itemName = item.querySelector(".heading--20")?.textContent.trim().toLowerCase() || "";
      const itemCategory = item.querySelector(".heading--14")?.textContent.trim() || "";
      const matchesSearch = itemName.includes(searchQuery.toLowerCase());
      const matchesCategory = !activeCategoryFilter || itemCategory === activeCategoryFilter;
      return matchesSearch && matchesCategory;
    });

    cmsItems.forEach((item) => item.style.display = "none");
    visibleItems.forEach((item) => item.style.display = "block");

    if (searchQuery || activeCategoryFilter) {
      resourceCategoriesSections.forEach(section => section.style.display = "none");
      searchResultsSection.style.display = "block";
    } else {
      resourceCategoriesSections.forEach(section => section.style.display = "block");
      searchResultsSection.style.display = "none";
    }
  }

  searchInput.addEventListener("input", (event) => {
    searchQuery = event.target.value.trim();
    applyFilters();
  });

  categoryFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const filterValue = filter.textContent.trim();
      activeCategoryFilter = activeCategoryFilter === filterValue ? null : filterValue;
      applyFilters();
    });
  });

  resetFilterIcon.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    activeCategoryFilter = null;
    resourceCategoriesSections.forEach(section => section.style.display = "block");
    searchResultsSection.style.display = "none";
    applyFilters();
  });

  // Ensure the search result section is hidden initially
  searchResultsSection.style.display = "none";
  loadAllPages();
});
