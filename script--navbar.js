document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const dropdowns = document.querySelectorAll(".navbar--dropdown-new");

  let activeDropdown = null;

  const closeDropdown = (dropdown) => {
    const list = dropdown.querySelector(".navbar--dropdown-list-new");
    const icon = dropdown.querySelector(".navbar--dropdown-icon");
    gsap.to(list, {
      opacity: 0,
      y: "20rem",
      duration: 0.3,
      ease: "smooth",
      onComplete: () => {
        list.style.display = "none";
      },
    });
    // Rotate the icon back to its original state
    gsap.to(icon, { rotation: 0, duration: 0.3, ease: "smooth" });
  };

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", () => {
      navbar.classList.add("is--active");
      const icon = dropdown.querySelector(".navbar--dropdown-icon");

      // Close the previously active dropdown if there is one
      if (activeDropdown && activeDropdown !== dropdown) {
        closeDropdown(activeDropdown);
      }

      // Open the hovered dropdown
      activeDropdown = dropdown;
      const list = dropdown.querySelector(".navbar--dropdown-list-new");
      list.style.display = "flex";
      gsap.to(list, { opacity: 1, y: 0, duration: 0.3, ease: "smooth" });
      // Rotate the icon by 180 degrees
      gsap.to(icon, { rotation: 180, duration: 0.3, ease: "smooth" });
    });

    dropdown.addEventListener("mouseleave", (event) => {
      // Close the dropdown only if the mouse leaves for a non-navbar area
      if (!navbar.contains(event.relatedTarget)) {
        closeDropdown(dropdown);
        activeDropdown = null;
        navbar.classList.remove("is--active");
      }
    });
  });

  // Close the active dropdown if mouse leaves the navbar area
  navbar.addEventListener("mouseleave", () => {
    if (activeDropdown) {
      closeDropdown(activeDropdown);
      activeDropdown = null;
    }
    navbar.classList.remove("is--active");
  });
});

// language switcher ---------------->
function updateLanguageLinks() {
  var currentUrl = window.location.href;
  var basePath = currentUrl.split("/").slice(3).join("/"); // Adjust this based on your URL structure

  document.getElementById("linkEn").href = "https://www.skyhive.ai/" + basePath;
  document.getElementById("linkJp").href = "https://ja.skyhive.ai/" + basePath;
  document.getElementById("linkKr").href = "https://kr.skyhive.ai/" + basePath;
}

updateLanguageLinks();

function updateLanguageIndicator() {
  var hostname = window.location.hostname;
  var langDiv = document.getElementById("lang");

  if (hostname.startsWith("en.")) {
    langDiv.innerText = "En";
  } else if (hostname.startsWith("ja.")) {
    langDiv.innerText = "Jp";
  } else if (hostname.startsWith("kr.")) {
    langDiv.innerText = "Kr";
  } else {
    langDiv.innerText = "En"; // Default language, adjust as necessary
  }
}

updateLanguageIndicator();
