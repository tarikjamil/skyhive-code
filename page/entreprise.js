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

// Define an array of your images and their animations
let imagesAndAnimations = [
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img1",
    animation: { scale: 1 },
  },
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img2",
    animation: { rotation: 360 },
  },
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img3",
    animation: { x: 200 },
  },
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img4",
    animation: { y: 200 },
  },
];

// Animation for each image
imagesAndAnimations.forEach((item) => {
  gsap.fromTo(
    item.selector,
    { scale: 1.5 },
    {
      ...item.animation,
      scrollTrigger: {
        trigger: ".entreprise--hero-wrapper",
        start: "top bottom", // when the top of the trigger hits the bottom of the viewport
        end: "bottom top", // when the bottom of the trigger hits the top of the viewport
        scrub: true,
      },
    }
  );
});
