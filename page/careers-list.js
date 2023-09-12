// slider success stories
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--blog", {
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

// slider success stories
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--casestudies", {
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

// slider success stories
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--datasheets", {
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

// slider success stories
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--events", {
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

// slider success stories
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--media", {
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

// slider success stories
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--reports", {
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

// slider success stories
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--videos", {
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

document.addEventListener("DOMContentLoaded", function () {
  const checkEmptyElements = document.querySelectorAll("[data-check-empty]");

  checkEmptyElements.forEach((element) => {
    // Check if the CMS list inside the element is empty
    const cmsList = element.querySelector(".w-dyn-empty");
    if (cmsList) {
      // If empty, hide the element itself
      element.style.display = "none";

      // If you want to hide another specific element when this one is empty, you can do it here.
      // For instance, let's hide the `.ressources-filter`:
      const filterElement = document.querySelector(".ressources-filter");
      if (filterElement) filterElement.style.display = "none";
    }
  });
});
