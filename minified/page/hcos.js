$(".is--hcos--graph-parent").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top center-=100",
    },
  });
  tl.from($(this).find(".img--320"), {
    scale: 0.2,
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });
  tl.from($(this).find(".img--100.is--rotating"), {
    scale: 0.2,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });
  tl.from($(this).find(".hcos--rotating-text.is--big"), {
    scale: 0.2,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });
  tl.from($(this).find(".hcos--rotating-text.is--small"), {
    scale: 0.2,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });
  tl.from($(this).find(".is--rotating-reverse"), {
    scale: 0.2,
    opacity: 0,
    duration: 0.6,
    delay: -0.6,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });
});

// HCOS grid
$(".hcos--grid-os").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top center-=100",
    },
  });
  tl.from($(this).find(".hcos--os-element.is--middle"), {
    y: "50rem",
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });
  tl.from($(this).find(".flex--24gap.is--first").find(".hcos--os-element"), {
    x: "-50rem",
    opacity: 0,
    duration: 0.6,
    delay: -0.3,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });
  tl.from($(this).find(".flex--24gap.is--second").find(".hcos--os-element"), {
    x: "50rem",
    opacity: 0,
    duration: 0.6,
    delay: -0.3,
    ease: "power1.out",
    stagger: { each: 0.1, from: "start" },
  });
});

// PAGE COLOR POWER-UP
window.addEventListener("DOMContentLoaded", (event) => {
  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  }
  // pagecolor trigger
  $("[tr-pagecolor-element='trigger']").each(function (index) {
    // elements
    let triggerEl = $(this),
      targetEl = $(".body--new");
    // settings
    let classSetting = attr(
      "after-hero-body",
      triggerEl.attr("tr-pagecolor-class")
    );
    // result
    ScrollTrigger.create({
      trigger: triggerEl,
      start: "top center",
      end: "bottom center",
      onToggle: ({ self, isActive }) => {
        if (isActive) {
          targetEl.addClass(classSetting);
        } else {
          targetEl.removeClass(classSetting);
        }
      },
    });
  });
});
