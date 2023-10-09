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

// accordion --------------------- //
$(".home--accordion-trigger").on("click", function () {
  // Close other accordions when opening new one
  if (!$(this).hasClass("open")) {
    $(".home--accordion-trigger.open").click();
  }
  // Save the sibling of the toggle we clicked on
  let sibling = $(this).siblings(".home--accordion--response");
  let animationDuration = 500;

  if ($(this).hasClass("open")) {
    // Close the content div if already open
    sibling.animate({ height: "0px" }, animationDuration);
  } else {
    // Open the content div if already closed
    sibling.css("height", "auto");
    let autoHeight = sibling.height();
    sibling.css("height", "0px");
    sibling.animate({ height: autoHeight }, animationDuration, () => {
      sibling.css("height", "auto");

      // Scroll the page to the accordion, leaving 200 pixels from the top
      $("html, body").animate(
        {
          scrollTop: $(this).offset().top - 200,
        },
        animationDuration
      );
    });
  }
  // Open and close the toggle div
  $(this).toggleClass("open");
});

// slider
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--home-hero-slider", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    speed: 500,
    arrows: false,
    pagination: false,
    gap: "0rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
        arrows: false,
      },
      767: {
        // Mobile Landscape
        perPage: 1,
        arrows: false,
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        arrows: false,
      },
    },
  });
  splide.mount();
});

// slider
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--home-hero-slider-2", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 3500,
    speed: 500,
    arrows: false,
    pagination: false,
    gap: "0rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
        arrows: false,
      },
      767: {
        // Mobile Landscape
        perPage: 1,
        arrows: false,
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        arrows: false,
      },
    },
  });
  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--home-hero-slider-3", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 4000,
    speed: 500,
    arrows: false,
    pagination: false,
    gap: "0rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
        arrows: false,
      },
    },
  });

  splide.on("move", function (newIndex) {
    const slides = document.querySelectorAll(".splide__slide.is--home-tag");
    slides.forEach((slide, index) => {
      if (index === newIndex) {
        slide.style.opacity = 1;
      } else {
        slide.style.opacity = 0;
      }
    });
  });

  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--home-hero-slider-4", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 4500,
    drag: false,
    speed: 500,
    arrows: false,
    pagination: false,
    gap: "0rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
        arrows: false,
      },
    },
  });

  splide.on("move", function (newIndex) {
    const slides = document.querySelectorAll(".splide__slide.is--home-tag");
    slides.forEach((slide, index) => {
      if (index === newIndex) {
        slide.style.opacity = 1;
      } else {
        slide.style.opacity = 0;
      }
    });
  });

  splide.mount();
});
