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
  const tags = document.querySelectorAll(".tag--parent");
  const delay = 3000; // 3 seconds delay by default
  let activeTag = 0;

  tags.forEach((tag, index) => {
    tag.style.opacity = 0;
    tag.style.left = "0";
  });

  tags[activeTag].style.opacity = 1; // Start with the first tag active

  function animateTags() {
    // Reset opacity of the currently active tag
    tags[activeTag].style.opacity = 0;

    // Move to the next tag
    activeTag++;

    if (activeTag >= tags.length) {
      activeTag = 0;
      tags.forEach((tag) => {
        tag.style.transition = "opacity 0s, left 0s"; // Make the transition instant
        tag.style.left = "0";
      });

      // Restore the transitions for the active tag
      tags[activeTag].style.transition =
        "opacity 0.2s ease-out, left 0.2s ease-out";

      setTimeout(animateTags, delay); // Schedule the next cycle after the default delay
    } else {
      tags.forEach((tag) => {
        tag.style.transition = "opacity 0.2s ease-out, left 0.2s ease-out"; // Restore the transition
        tag.style.left = `-${130 * activeTag}rem`; // Move each tag left by 130rem multiplied by the active tag index
      });

      const nextDelay = activeTag === tags.length - 1 ? 1000 : delay;
      setTimeout(animateTags, nextDelay);
    }

    tags[activeTag].style.opacity = 1; // Set the opacity of the new active tag to 1
  }

  setTimeout(animateTags, delay);
});
