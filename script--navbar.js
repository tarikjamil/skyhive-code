// navbar animation ---------------->

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

  const toggleDropdownAnimation = (list) => {
    if (gsap.getProperty(list, "x") === "0vw") {
      gsap.to(list, { x: "100vw", duration: 0.5, ease: "smooth" });
    } else {
      gsap.to(list, { x: "0vw", duration: 0.5, ease: "smooth" });
    }
  };

  const enableMobileDropdown = () => {
    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".navbar--dropdown-toggle-new");
      const list = dropdown.querySelector(".navbar--dropdown-list-new");
      list.style.x = "100vw"; // Initialize off-screen

      toggle.addEventListener("click", () => {
        toggleDropdownAnimation(list);
      });
    });
  };

  const disableMobileDropdown = () => {
    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".navbar--dropdown-toggle-new");
      toggle.removeEventListener("click", enableMobileDropdown);
    });
  };

  const updateDropdown = () => {
    if (window.innerWidth >= 992) {
      enableDropdown();
      disableMobileDropdown();
    } else {
      disableDropdown();
      enableMobileDropdown();
    }
  };

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

  window.addEventListener("resize", updateDropdown);
  updateDropdown();
});

$(".navbar--goback").on("click", function () {
  $(this).closest(".navbar--dropdown-new").find(".navbar--dropdown-toggle-new");
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
