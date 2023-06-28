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
