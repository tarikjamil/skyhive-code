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
class InfiniteMarque {
  constructor(payload) {
    this.DOM = {
      marque: payload.element,
    };
    this.init();
  }
  init() {
    this.DOM.marque.forEach((marque) => {
      var marqueContent = marque.childNodes[1];
      var contentCloned = marqueContent.cloneNode(true);
      marque.append(contentCloned);
      this.playMarque({
        marque: marque,
        content: marqueContent,
      });
      window.addEventListener("resize", (e) => {
        this.playMarque({
          marque: marque,
          content: marqueContent,
        });
      });
    });
  }
  playMarque(payload) {
    console.log("test");
    // calculate gap + total distance
    // ! it's 0, but if it needs to be just in case.
    let gap = parseInt(
      getComputedStyle(payload.marque).getPropertyValue("column-gap"),
      10
    );
    let width = parseInt(
      getComputedStyle(payload.content).getPropertyValue("width"),
      10
    );

    let distanceToTranslate = -1 * (width + gap);

    gsap.fromTo(
      payload.marque.children,
      { x: 0 },
      { x: distanceToTranslate, duration: 15, ease: "linear", repeat: -1 }
    );
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  new InfiniteMarque({
    element: document.querySelectorAll(".marquee-content"),
  });
});
