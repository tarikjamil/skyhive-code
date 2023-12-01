$(".platform--graph-parent").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top center-=100",
    },
  });

  tl.from(".platform--img-animation1", {
    y: "-20rem",
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });

  tl.from(".platform--graph-img-6", {
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
  });

  tl.from(".platform--graph-img-4", {
    x: "-20rem",
    opacity: 0,
    duration: 0.3,
    ease: "power1.out",
  });

  tl.from(".platform--graph-img-5", {
    x: "20rem",
    opacity: 0,
    duration: 0.3,
    ease: "power1.out",
  });

  tl.from(".platform--graph-img-4-arrow", {
    x: "-20rem",
    opacity: 0,
    duration: 0.3,
    ease: "power1.out",
  });

  tl.from(".platform--graph-img-5-arrow", {
    x: "20rem",
    opacity: 0,
    duration: 0.3,

    ease: "power1.out",
  });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top top",
    },
  });

  tl2.from(".platform--graph-img-7", {
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
  });

  tl2.from(".platform--graph-img-8, .platform--graph-img-9", {
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });

  tl2.from(".platform--graph-img-10, .platform--graph-img-12", {
    opacity: 0,
    x: "-20rem",
    duration: 0.6,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });

  tl2.from(".platform--graph-img-11, .platform--graph-img-13", {
    opacity: 0,
    x: "20rem",
    duration: 0.6,
    delay: -0.6,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });
});

// slider
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--platform-features-slider", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    arrows: false,
    pagination: false,
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

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lottie animation
  var animation = lottie.loadAnimation({
    container: document.querySelector(".lottie--platform"),
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "https://uploads-ssl.webflow.com/60a69b2a011f012edbe2cd9d/65698ce5d18bf3a35ff09967_Complete%20Animation.json",
  });

  // Define animation segments
  const segments = [
    { trigger: "#position1", startFrame: 0, endFrame: 25 },
    { trigger: "#position2", startFrame: 26, endFrame: 50 },
    // Add more segments as needed
  ];

  // Function to control animation
  const controlAnimation = (segment, reverse = false) => {
    animation.playSegments([segment.startFrame, segment.endFrame], !reverse);
  };

  // Initialize ScrollTriggers
  segments.forEach((segment, index) => {
    ScrollTrigger.create({
      trigger: segment.trigger,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => controlAnimation(segment),
      onLeaveBack: () => {
        if (index > 0) {
          controlAnimation(segments[index - 1], true);
        }
      },
    });
  });
});
