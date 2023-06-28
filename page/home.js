// slider
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider1", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: "24rem",
    breakpoints: {
      991: {
        // Tablet
        arrows: false,
      },
    },
  });
  splide.mount();
});

// slider success stories
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider2", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: "56rem",
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
  let splide = new Splide(".slider3", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: "56rem",
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
