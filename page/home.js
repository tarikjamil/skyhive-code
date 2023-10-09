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

function loopingTagsAnimation(
  container,
  movementValue = "130rem",
  delayValue = 3000,
  speed = "0.2s"
) {
  const tags = container.querySelectorAll(".tag--parent");
  let activeTag = 0;

  tags.forEach((tag) => {
    tag.style.opacity = 0;
    tag.style.left = "0";
  });

  tags[activeTag].style.opacity = 1;

  function animateTags() {
    tags[activeTag].style.opacity = 0;

    activeTag++;

    if (activeTag >= tags.length) {
      activeTag = 0;
      tags.forEach((tag) => {
        tag.style.transition = `opacity 0s, left 0s`;
        tag.style.left = "0";
      });

      tags[activeTag].style.opacity = 1;
      // Directly call animateTags to instantly switch to the first tag without delay
      animateTags();
      return;
    } else {
      tags.forEach((tag) => {
        tag.style.transition = `opacity ${speed} ease-out, left ${speed} ease-out`;
        tag.style.left = `calc(-${movementValue} * ${activeTag})`;
      });
    }

    tags[activeTag].style.opacity = 1;

    const nextDelay = activeTag === tags.length - 1 ? 0 : delayValue; // Set delay to 0 for the last tag
    setTimeout(animateTags, nextDelay);
  }

  setTimeout(animateTags, delayValue);
}

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll('[animation="loopingtags"]');

  containers.forEach((container) => {
    // Fetch the CSS variable for movement from the container, or set a default
    const movement =
      getComputedStyle(container).getPropertyValue("--movement") || "130rem";
    const delay = container.getAttribute("data-delay") || 3000;
    const animationSpeed = container.getAttribute("data-speed") || "0.2s";

    loopingTagsAnimation(
      container,
      movement.trim(),
      parseInt(delay, 10),
      animationSpeed
    );
  });
});
