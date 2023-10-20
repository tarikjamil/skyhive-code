// split type
let text;
// Split the text up
function runSplit() {
  text = new SplitType("[animation=loading-split]", {
    types: "lines, words",
    lineClass: "overflow-hidden",
    wordClass: "loading-animation-split",
  });
}

runSplit();

// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    text.revert();
    runSplit();
  }
});

gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();

  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5,
  });

  // Add a label to mark the starting point of simultaneous animations
  tl.add("loadingAnimationsStart");

  // Add the 'loading' animation and set its position to the label
  tl.from(
    "[animation=loading]",
    {
      y: "20rem",
      opacity: "0",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
    },
    "loadingAnimationsStart"
  ); // <-- position parameter set to the label

  // Add the 'loading-reverse' animation and set its position to the label
  tl.from(
    "[animation=loading-reverse]",
    {
      y: "-20rem",
      opacity: "0",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
    },
    "loadingAnimationsStart"
  ); // <-- position parameter set to the label
}

pageLoad();

// navbar color
$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 50) {
      $(".navbar").addClass("is--scrolled");
    } else if (scrollTop < 50) {
      $(".navbar").removeClass("is--scrolled");
    }
  });
});

// navbar menu background click
$(".navbar--menu--bg").on("click", function () {
  $(".navbar--menu-close").click();
});

// navbar use cases dropdown

$(".navbar--usecases-dropdown").on("click", function () {
  $(".navbar--usecases-dropdown").toggleClass("is--active");
  $(".navbar--dropwdown-text-wrapper").toggleClass("is--active");
});

// slider products
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--slider-products", {
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

// slider testimonials
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--testimonial-slider", {
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

document.addEventListener("DOMContentLoaded", function () {
  // Get all the elements with the class .is--related-ressources
  let splides = document.querySelectorAll(".is--resources-slider");

  // Loop through each element and create a Splide instance
  splides.forEach(function (el) {
    new Splide(el, {
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
    }).mount();
  });
});

// marquee code
document.addEventListener("DOMContentLoaded", function () {
  const baseSpeed = 100; // pixels per second

  const startMarqueeAnimations = () => {
    const marquees = document.querySelectorAll(".marquee-row-gsap");

    marquees.forEach((marquee) => {
      // If there's an existing GSAP instance on this element, kill it to prevent overlap.
      gsap.killTweensOf(marquee);

      const width = marquee.offsetWidth;
      const parentWidth = marquee.parentElement.offsetWidth;
      const moveDistance = width + parentWidth; // total distance the marquee content needs to travel

      const duration = moveDistance / baseSpeed;

      gsap.to(marquee, {
        x: -moveDistance + "px", // use the calculated move distance in pixels
        repeat: -1,
        duration: duration,
        ease: "linear",
      });
    });
  };

  // Start the marquee animations on page load
  startMarqueeAnimations();

  // Restart the marquee animations on window resize
  window.addEventListener("resize", startMarqueeAnimations);
});
