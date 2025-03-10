document.addEventListener("DOMContentLoaded", async function () {
  const cmsContainer = document.getElementById("cms-container");
  const searchInput = document.querySelector(".search-input");
  const categoryFilters = document.querySelectorAll(".filter--radio");
  const resetFilterIcon = document.querySelector(".filter-icon");
  const searchIcon = document.querySelector(".search-icon");
  const filterDropdown = document.querySelector(".filter-dropdown");
  const resourceCategoriesSections = document.querySelectorAll(".section.is--resources-cat");
  const searchResultsSection = document.querySelector(".is--resources-search-result");
  let cmsItems = [];
  let visibleItems = [];
  let activeCategoryFilters = new Set();
  let searchQuery = "";
  let totalPages = 10;

  if (!cmsContainer) {
    console.error("CMS container not found in the DOM.");
    return;
  }

  // Toggle dropdown visibility
  searchIcon.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent immediate closing
    filterDropdown.style.display =
      filterDropdown.style.display === "none" || !filterDropdown.style.display
        ? "block"
        : "none";
  });

  // Hide dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!filterDropdown.contains(event.target) && !searchIcon.contains(event.target)) {
      filterDropdown.style.display = "none";
    }
  });

  async function fetchPageContent(pageNumber) {
    try {
      const response = await fetch(`/blog-items/page-${pageNumber}`);
      if (!response.ok) {
        console.warn(`Page ${pageNumber} not found, stopping at ${pageNumber - 1}`);
        totalPages = pageNumber - 1;
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
    if (!dateString) return new Date(0);
    const months = { January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7, September: 8, October: 9, November: 10, December: 11 };
    const parts = dateString.split(" ");
    if (parts.length < 3) return new Date(0);
    return new Date(parseInt(parts[2]), months[parts[0]], parseInt(parts[1].replace(",", "")));
  }

  function sortItemsByDate() {
    cmsItems = cmsItems.filter(item => item.querySelector(".date-field"));
    cmsItems.sort((a, b) => {
      return parseDate(b.querySelector(".date-field")?.textContent.trim()) - parseDate(a.querySelector(".date-field")?.textContent.trim());
    });
  }

  async function loadAllPages() {
    try {
      let pageNumber = 1;
      let emptyPageCount = 0;
      const maxEmptyPages = 3;

      while (emptyPageCount < maxEmptyPages) {
        const items = await fetchPageContent(pageNumber);
        if (items.length === 0) {
          emptyPageCount++;
        } else {
          cmsItems.push(...items);
          emptyPageCount = 0;
        }
        pageNumber++;
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
      const itemCategories = Array.from(item.querySelectorAll(".heading--14")).map(el => el.textContent.trim());
      const matchesSearch = itemName.includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategoryFilters.size === 0 || [...activeCategoryFilters].every(filter => itemCategories.includes(filter));
      return matchesSearch && matchesCategory;
    });

    cmsItems.forEach((item) => item.style.display = "none");
    visibleItems.forEach((item) => item.style.display = "block");

    if (searchQuery || activeCategoryFilters.size > 0) {
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
      if (activeCategoryFilters.has(filterValue)) {
        activeCategoryFilters.delete(filterValue);
        filter.classList.remove("is--active");
      } else {
        activeCategoryFilters.add(filterValue);
        filter.classList.add("is--active");
      }
      applyFilters();
    });
  });

  resetFilterIcon.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    activeCategoryFilters.clear();
    categoryFilters.forEach(filter => filter.classList.remove("is--active"));
    resourceCategoriesSections.forEach(section => section.style.display = "block");
    searchResultsSection.style.display = "none";
    applyFilters();
  });

  searchResultsSection.style.display = "none";
  filterDropdown.style.display = "none"; // Ensure dropdown is initially hidden
  loadAllPages();
});