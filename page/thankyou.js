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
