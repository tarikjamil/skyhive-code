ScrollTrigger.matchMedia({
  "(min-width: 992px)": function () {
    gsap.from(".flex--24gap.is--first", {
      y: "-100rem",
      scrollTrigger: {
        trigger: ".section.is--hcos-parallax",
        start: "top bottom", // When the top of the trigger hits the bottom of the viewport
        end: "bottom top", // When the bottom of the trigger hits the top of the viewport
        scrub: true,
      },
      y: "100rem",
    });

    gsap.from(".flex--24gap.is--second", {
      y: "100rem",
      scrollTrigger: {
        trigger: ".section.is--hcos-parallax",
        start: "top bottom", // When the top of the trigger hits the bottom of the viewport
        end: "bottom top", // When the bottom of the trigger hits the top of the viewport
        scrub: true,
      },
      y: "-100rem",
    });
  },
});

$(".is--hcos--graph-parent").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top center",
    },
  });
  tl.from($(this).find(".img--320"), {
    scale: 0.5,
    opacity: 0,
    stagger: { each: 0.1, from: "start" },
  });
  tl.from($(this).find(".img--100.is--rotating"), {
    scale: 0.5,
    opacity: 0,
    stagger: { each: 0.1, from: "start" },
  });
  tl.from($(this).find(".hcos--rotating-text.is--big"), {
    scale: 0.5,
    opacity: 0,
    stagger: { each: 0.1, from: "start" },
  });
  tl.from($(this).find(".hcos--rotating-text.is--small"), {
    scale: 0.5,
    opacity: 0,
    stagger: { each: 0.1, from: "start" },
  });
  tl.from($(this).find(".is--rotating-reverse"), {
    scale: 0.5,
    opacity: 0,
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
