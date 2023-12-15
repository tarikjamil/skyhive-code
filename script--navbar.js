gsap.registerPlugin(CustomEase);

CustomEase.create("smooth", "M0,0 C0.38,0.005 0.215,1 1,1");

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const dropdowns = document.querySelectorAll(".navbar--dropdown-new");

  let activeDropdown = null;

  const closeDropdown = (dropdown) => {
    const list = dropdown.querySelector(".navbar--dropdown-list-new");
    gsap.to(list, {
      opacity: 0,
      y: "20rem",
      duration: 0.3,
      ease: "smooth",
      onComplete: () => {
        list.style.display = "none";
      },
    });
  };

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", () => {
      // Animate navbar background and text color
      gsap.to(navbar, {
        backgroundColor: "var(--primary-blue)",
        color: "var(--white)",
        duration: 0.3,
        ease: "smooth",
      });

      // Close the previously active dropdown if there is one
      if (activeDropdown && activeDropdown !== dropdown) {
        closeDropdown(activeDropdown);
      }

      // Open the hovered dropdown
      activeDropdown = dropdown;
      const list = dropdown.querySelector(".navbar--dropdown-list-new");
      list.style.display = "flex";
      gsap.to(list, { opacity: 1, y: 0, duration: 0.3, ease: "smooth" });
    });

    dropdown.addEventListener("mouseleave", (event) => {
      // Close the dropdown only if the mouse leaves for a non-navbar area
      if (!navbar.contains(event.relatedTarget)) {
        closeDropdown(dropdown);
        activeDropdown = null;
        // Animate navbar background and text color to original
        gsap.to(navbar, {
          backgroundColor: "",
          color: "",
          duration: 0.3,
          ease: "smooth",
        });
      }
    });
  });

  // Close the active dropdown if mouse leaves the navbar area
  navbar.addEventListener("mouseleave", () => {
    if (activeDropdown) {
      closeDropdown(activeDropdown);
      activeDropdown = null;
    }
    // Animate navbar background and text color to original when leaving the navbar
    gsap.to(navbar, {
      backgroundColor: "",
      color: "",
      duration: 0.3,
      ease: "smooth",
    });
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
