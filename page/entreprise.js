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

// Get all image elements
let images = gsap.utils.toArray(
  ".entreprise--hero-wrapper .entreprise-hero-img1, .entreprise--hero-wrapper .entreprise-hero-img2, .entreprise--hero-wrapper .entreprise-hero-img3, .entreprise--hero-wrapper .entreprise-hero-img4"
);

// Animation for each image
images.forEach((image) => {
  gsap.fromTo(
    image,
    { scale: 1.2 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: ".entreprise--hero-wrapper",
        start: "top bottom", // when the top of the trigger hits the bottom of the viewport
        end: "bottom top", // when the bottom of the trigger hits the top of the viewport
        scrub: true,
      },
    }
  );
});
