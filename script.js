// split type
let text;
// Split the text up
function runSplit() {
  text = new SplitType("[animation=loading-split]", {
    types: "lines, words",
    lineClass: "overflow-hidden",
    wordClass: "loading-animation-split",
  });
}

runSplit();

// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    text.revert();
    runSplit();
  }
});

gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();

  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5,
  });

  // Add a label to mark the starting point of simultaneous animations
  tl.add("loadingAnimationsStart");

  // Add the 'loading' animation and set its position to the label
  tl.from(
    "[animation=loading]",
    {
      y: "20rem",
      opacity: "0",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
    },
    "loadingAnimationsStart"
  ); // <-- position parameter set to the label

  // Add the 'loading-reverse' animation and set its position to the label
  tl.from(
    "[animation=loading-reverse]",
    {
      y: "-20rem",
      opacity: "0",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
    },
    "loadingAnimationsStart"
  ); // <-- position parameter set to the label
}

pageLoad();

// ----------------- navbar ----------------- //

// navbar color
$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 50) {
      $(".navbar").addClass("is--scrolled");
    } else if (scrollTop < 50) {
      $(".navbar").removeClass("is--scrolled");
    }
  });
});

// navbar menu background click
$(".navbar--menu--bg").on("click", function () {
  $(".navbar--menu-close").click();
});

// navbar use cases dropdown

$(".navbar--usecases-dropdown").on("click", function () {
  $(".navbar--usecases-dropdown").toggleClass("is--active");
  $(".navbar--dropwdown-text-wrapper").toggleClass("is--active");
});

// slider products
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--slider-products", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: "24rem",
    drag: false,
    arrows: false,
    pagination: false,
    breakpoints: {
      991: {
        // Tablet
        gap: "24rem",
        drag: true,
      },
    },
  });
  splide.mount();
});

// slider testimonials
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--testimonial-slider", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: "24rem",
    drag: false,
    arrows: false,
    pagination: false,
    breakpoints: {
      991: {
        // Tablet
        gap: "24rem",
        drag: true,
      },
    },
  });
  splide.mount();
});

// slider resources
document.addEventListener("DOMContentLoaded", function () {
  // Select all .is--resources-slider elements
  let sliders = document.querySelectorAll(".is--resources-slider");

  // For each slider, initialize Splide
  sliders.forEach(function (slider) {
    let splide = new Splide(slider, {
      type: "slide",
      perPage: 1,
      perMove: 1,
      gap: "24rem",
      drag: false,
      arrows: false,
      pagination: false,
      breakpoints: {
        991: {
          // Tablet
          gap: "24rem",
          drag: true,
        },
      },
    });
    splide.mount();
  });
});

// marquee is--scrolling
const scrollSpeed = 50; // pixels per second, adjust as needed

function updateScrollingSpeed() {
  document.querySelectorAll(".is--scrolling").forEach((element) => {
    const scrollWidth = element.offsetWidth;
    const duration = scrollWidth / scrollSpeed; // seconds

    element.style.setProperty("--scroll-width", `${scrollWidth}px`);
    element.style.animationDuration = `${duration}s`;
  });
}

// Call initially
updateScrollingSpeed();

// Update on window resize
window.addEventListener("resize", updateScrollingSpeed);

//----------------- navbar animation ----------------//

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

$(".navbar--menu-close-new").on("click", function () {
  $(".navbar--goback").click();
});

//-------------------- language switcher ----------------//
(function () {
  var myDiv = document.getElementById("myDiv");
  if (!window.Weglot) {
    console.log("Weglot not initialized.");
    return;
  }

  // Create array of options to be added
  var availableLanguages = Weglot.options.languages
    .map(function (language) {
      return language.language_to;
    })
    .concat(Weglot.options.language_from);

  // Create and append select list
  var selectList = document.createElement("select");
  myDiv.appendChild(selectList);

  var currentLang = Weglot.getCurrentLang();

  // Create and append the options
  for (var i = 0; i < availableLanguages.length; i++) {
    var lang = availableLanguages[i];
    var option = document.createElement("option");
    option.value = lang;
    option.text = Weglot.getLanguageName(lang);
    if (lang === currentLang) {
      option.selected = "selected";
    }
    selectList.appendChild(option);
  }

  selectList.onchange = function () {
    Weglot.switchTo(this.value);
  };

  Weglot.on("languageChanged", function (lang) {
    selectList.value = lang;
  });
})();

function updateLanguageIndicator() {
  var hostname = window.location.hostname;
  var langDiv = document.getElementById("lang");

  if (hostname.startsWith("www.")) {
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
