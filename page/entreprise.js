// slider
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider-resources", {
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

let imagesAndAnimations = [
  {
    selector: ".entreprise--hero-wrapper .img--100.is--entreprise",
    initial: { opacity: 1, scale: 1 },
    animation: { opacity: 0, scale: 0.6 },
  },
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img1",
    initial: { x: "150rem", y: "-20rem", opacity: 1, scale: 1.8 },
    animation: { x: "0rem", y: "0rem", opacity: 1, scale: 1 },
  },
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img2",
    initial: { y: "150rem", opacity: 1, scale: 1.15 },
    animation: { y: "0rem", opacity: 1, scale: 1 },
  },
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img3",
    initial: { x: "-200rem", opacity: 1, y: "-50rem", scale: 1.5 },
    animation: { x: "0rem", opacity: 1, y: "0rem", scale: 1 },
  },
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img4",
    initial: { y: "-50rem", opacity: 1, scale: 1.3 },
    animation: { y: "0rem", opacity: 1, scale: 1 },
  },
];

imagesAndAnimations.forEach((item) => {
  gsap.fromTo(item.selector, item.initial, {
    ...item.animation,
    scrollTrigger: {
      trigger: ".entreprise--hero-wrapper",
      start: "top bottom", // when the top of the trigger hits the bottom of the viewport
      end: "bottom top", // when the bottom of the trigger hits the top of the viewport
      scrub: true,
    },
  });
});
