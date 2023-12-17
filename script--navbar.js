document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const dropdowns = document.querySelectorAll(".navbar--dropdown-new");
  let activeDropdown = null;

  const closeDropdown = (dropdown) => {
    if (!dropdown) return;
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
    gsap.to(icon, { rotation: 0, duration: 0.3, ease: "smooth" });
  };

  const enableDropdown = () => {
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", () => {
        navbar.classList.add("is--active");
        const icon = dropdown.querySelector(".navbar--dropdown-icon");

        if (activeDropdown && activeDropdown !== dropdown) {
          closeDropdown(activeDropdown);
        }

        activeDropdown = dropdown;
        const list = dropdown.querySelector(".navbar--dropdown-list-new");
        list.style.display = "flex";
        gsap.to(list, { opacity: 1, y: 0, duration: 0.3, ease: "smooth" });
        gsap.to(icon, { rotation: 180, duration: 0.3, ease: "smooth" });
      });

      dropdown.addEventListener("mouseleave", (event) => {
        if (!navbar.contains(event.relatedTarget)) {
          closeDropdown(dropdown);
          activeDropdown = null;
          navbar.classList.remove("is--active");
        }
      });
    });

    navbar.addEventListener("mouseleave", () => {
      if (activeDropdown) {
        closeDropdown(activeDropdown);
        activeDropdown = null;
      }
      navbar.classList.remove("is--active");
    });
  };

  // Function to disable dropdown interactions
  const disableDropdown = () => {
    dropdowns.forEach((dropdown) => {
      dropdown.removeEventListener("mouseenter", enableDropdown);
      dropdown.removeEventListener("mouseleave", enableDropdown);
    });
    navbar.removeEventListener("mouseleave", enableDropdown);
    if (activeDropdown) {
      closeDropdown(activeDropdown);
      activeDropdown = null;
    }
  };

  // Function to update dropdown based on screen size
  const updateDropdown = () => {
    if (window.innerWidth >= 992) {
      enableDropdown();
    } else {
      disableDropdown();
    }
  };

  // Attach resize listener to update dropdowns on window resize
  window.addEventListener("resize", updateDropdown);

  // Initialize the dropdown functionality based on the current screen size
  updateDropdown();
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
