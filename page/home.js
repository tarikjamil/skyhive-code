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
  const container = document.querySelector(".looping-els");
  const tags = document.querySelectorAll(".tag--parent");
  let activeIndex = 0;

  function animate() {
    if (activeIndex > 0) {
      tags[activeIndex - 1].classList.remove("active");
    }

    tags[activeIndex].classList.add("active");

    const movement = container.getAttribute("data-movement");
    container.style.setProperty("--movement", `${movement * activeIndex}rem`);

    activeIndex++;

    if (activeIndex === tags.length) {
      setTimeout(() => {
        // Reset animation
        container.style.setProperty("--movement", `0rem`);
        tags[tags.length - 1].classList.remove("active");
        activeIndex = 0;

        // Recursively call the function to loop the animation
        animate();
      }, 500); // Waiting for the last animation to finish
    } else {
      setTimeout(animate, 3000);
    }
  }

  setTimeout(animate, 3000); // Start the first animation after 3 seconds
});
