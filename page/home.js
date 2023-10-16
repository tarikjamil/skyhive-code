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

document.addEventListener("DOMContentLoaded", function () {
  function initiateAnimationForContainer(container) {
    const tags = container.querySelectorAll(".tag--parent");
    let activeIndex = 0;
    let cumulativeMovement = 0;

    function animate() {
      if (activeIndex > 0) {
        tags[activeIndex - 1].classList.remove("active");
      }

      tags[activeIndex].classList.add("active");

      const movement = tags[activeIndex].getBoundingClientRect().width;
      cumulativeMovement += movement;
      container.style.transform = `translateX(-${cumulativeMovement}px)`;

      activeIndex++;

      if (activeIndex === tags.length) {
        setTimeout(() => {
          // Instantly reset animation
          container.style.transition = "none"; // Disable transition
          container.style.transform = "translateX(0)";
          tags[tags.length - 1].classList.remove("active");
          activeIndex = 0;
          cumulativeMovement = 0; // Reset the cumulative movement

          // Small delay before re-enabling transition to avoid the snap back being animated
          setTimeout(() => {
            container.style.transition = "transform 0.5s"; // Re-enable the transition
            animate(); // Continue the animation loop
          }, 20);
        }, 500); // Wait for the last animation to finish
      } else {
        setTimeout(animate, 3000);
      }
    }

    setTimeout(animate, 3000); // Start the first animation after 3 seconds
  }

  // Apply the animation for each `.looping-els` container
  const containers = document.querySelectorAll(".looping-els");
  containers.forEach((container) => initiateAnimationForContainer(container));
});
