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

document.addEventListener("DOMContentLoaded", function () {
  var animation = lottie.loadAnimation({
    container: document.querySelector(".lottie--platform"),
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "https://uploads-ssl.webflow.com/60a69b2a011f012edbe2cd9d/65698ce5d18bf3a35ff09967_Complete%20Animation.json",
  });

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        const classList = document.body.classList;
        let targetFrame;
        if (classList.contains("is--position1")) {
          targetFrame = animation.totalFrames * 0.09;
        } else if (classList.contains("is--position2")) {
          targetFrame = animation.totalFrames * 0.28;
        } else if (classList.contains("is--position3")) {
          targetFrame = animation.totalFrames * 0.44;
        } else if (classList.contains("is--position4")) {
          targetFrame = animation.totalFrames * 0.49;
        } else if (classList.contains("is--position5")) {
          targetFrame = animation.totalFrames * 0.58;
        } else if (classList.contains("is--position6")) {
          targetFrame = animation.totalFrames * 0.73;
        } else if (classList.contains("is--position7")) {
          targetFrame = animation.totalFrames * 0.81;
        } else if (classList.contains("is--position8")) {
          targetFrame = animation.totalFrames * 0.87;
        } else if (classList.contains("is--position9")) {
          targetFrame = animation.totalFrames * 0.94;
        } else if (classList.contains("is--position10")) {
          targetFrame = animation.totalFrames * 1;
        } else {
          targetFrame = animation.totalFrames * 0;
        }
        // Add more conditions for other positions

        // Animate to the calculated frame using GSAP
        if (targetFrame !== undefined) {
          gsap.to(animation, {
            frame: targetFrame,
            duration: 1, // specify the duration in seconds
            ease: "power1.inOut", // specify the easing function
            onUpdate: () => animation.goToAndStop(animation.frame, true),
          });
        }
      }
    });
  });

  observer.observe(document.body, { attributes: true });
});
