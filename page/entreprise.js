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

let imagesAndAnimations = [
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img1",
    initial: { x: "10%", scale: 1.2 },
    animation: { x: "0%", scale: 1 },
  },
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img2",
    initial: { y: "10%", scale: 1.1 },
    animation: { y: "0%", scale: 1 },
  },
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img3",
    initial: { x: "-10%", scale: 1.3 },
    animation: { x: "0%", scale: 1 },
  },
  {
    selector: ".entreprise--hero-wrapper .entreprise-hero-img4",
    initial: { y: "-10%", scale: 1.2 },
    animation: { y: "0%", scale: 1 },
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