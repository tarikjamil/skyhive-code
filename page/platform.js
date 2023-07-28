$(".platform--graph-parent img").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top center-=100",
    },
  });
  tl.from(targetElement, {
    y: "20rem",
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
  });
});
