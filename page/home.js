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

// slider testimonial
function slider2() {
  let splides = $(".slider2");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 1,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: "24em", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 1,
        },
        767: {
          // Mobile Landscape
          perPage: 1,
        },
        479: {
          // Mobile Portrait
          perPage: 1,
        },
      },
    }).mount();
  }
}
slider2();

document.addEventListener("DOMContentLoaded", function () {
  // Select the text element
  let textElement = document.querySelector(".heading--20.is--successstory");

  // Get the text content
  let textContent = textElement.textContent;

  // Maximum number of characters allowed
  let maxCharacters = 50;

  // If the text content is longer than the maximum number of characters allowed
  if (textContent.length > maxCharacters) {
    // Truncate the text and add ellipsis
    textElement.textContent = textContent.substring(0, maxCharacters) + "...";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Select the text element
  let textElement = document.querySelector(
    ".home--successstories-item .paragraph--16"
  );

  // Get the text content
  let textContent = textElement.textContent;

  // Maximum number of characters allowed
  let maxCharacters = 60;

  // If the text content is longer than the maximum number of characters allowed
  if (textContent.length > maxCharacters) {
    // Truncate the text and add ellipsis
    textElement.textContent = textContent.substring(0, maxCharacters) + "...";
  }
});
