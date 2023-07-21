// slider success stories
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider2", {
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

gsap.from(".flex--24gap", {
  y: "-100rem",
  scrollTrigger: {
    trigger: ".is--hcos-parallax",
    start: "top bottom", // When the top of the trigger hits the bottom of the viewport
    end: "bottom top", // When the bottom of the trigger hits the top of the viewport
    scrub: true,
    markers: true,
  },
  y: "100rem",
});
