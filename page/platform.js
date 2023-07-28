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
    duration: 0.6,
    ease: "power1.out",
  });

  tl.from(".platform--graph-img-5", {
    x: "20rem",
    opacity: 0,
    duration: 0.6,
    delay: -0.6,
    ease: "power1.out",
  });

  tl.from(".platform--graph-img-4-arrow", {
    x: "-20rem",
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
  });

  tl.from(".platform--graph-img-5-arrow", {
    x: "20rem",
    opacity: 0,
    duration: 0.6,
    delay: -0.6,
    ease: "power1.out",
  });
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top top",
    },
  });
});
