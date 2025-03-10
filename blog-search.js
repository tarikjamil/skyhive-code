document.addEventListener("DOMContentLoaded", async function () {
  const totalPages = 3; // Adjust to the actual number of pages
  const cmsContainer = document.getElementById("cms-container");
  const searchInput = document.querySelector(".search-input");
  const categoryFilters = document.querySelectorAll(".filter--radio");
  const resetFilterIcon = document.querySelector(".filter-icon");
  let cmsItems = [];
  let visibleItems = [];
  let activeCategoryFilter = null;
  let searchQuery = "";

  if (!cmsContainer) {
    console.error("CMS container not found in the DOM.");
    return;
  }

  async function fetchPageContent(pageNumber) {
    try {
      const response = await fetch(`/blog-items/page-${pageNumber}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch page: ${response.status}`);
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
    const months = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };
    const parts = dateString.split(" ");
    const month = months[parts[0]];
    const day = parseInt(parts[1].replace(",", ""));
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  }

  function sortItemsByDate() {
    cmsItems.sort((a, b) => {
      const dateA = parseDate(a.querySelector(".date-field").textContent.trim());
      const dateB = parseDate(b.querySelector(".date-field").textContent.trim());
      return dateB - dateA;
    });
  }

  async function loadAllPages() {
    try {
      for (let i = 1; i <= totalPages; i++) {
        const items = await fetchPageContent(i);
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
      const itemName = item.querySelector(".heading--20").textContent.trim().toLowerCase();
      const itemCategory = item.querySelector(".heading--14").textContent.trim();
      const matchesSearch = itemName.includes(searchQuery.toLowerCase());
      const matchesCategory = !activeCategoryFilter || itemCategory === activeCategoryFilter;
      return matchesSearch && matchesCategory;
    });

    cmsItems.forEach((item) => {
      item.style.display = "none";
    });
    visibleItems.forEach((item) => {
      item.style.display = "block";
    });
  }

  searchInput.addEventListener("input", (event) => {
    searchQuery = event.target.value;
    applyFilters();
  });

  categoryFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const filterValue = filter.textContent.trim();
      if (activeCategoryFilter === filterValue) {
        activeCategoryFilter = null;
      } else {
        activeCategoryFilter = filterValue;
      }
      applyFilters();
    });
  });

  resetFilterIcon.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    activeCategoryFilter = null;
    applyFilters();
  });

  loadAllPages();
});
