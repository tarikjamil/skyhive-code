$(document).ready(function () {
  // navbar dropdown --------------------- //
  $(".navbar--dropdown-toggle-new").on("click", function () {
    // Close other accordions when opening a new one
    if (!$(this).hasClass("open")) {
      $(".navbar--dropdown-toggle-new.open").click();
    }

    // Save the sibling of the toggle we clicked on
    let sibling = $(this).siblings(".navbar--dropdown-list-new");
    let animationDuration = 1;

    if ($(this).hasClass("open")) {
      // Close the content div if already open
      sibling.animate({ height: "0px" }, animationDuration);

      // Hide .navbar--menu--bg-new
      $(".navbar--menu--bg-new").hide();
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

      // Show .navbar--menu--bg-new
      $(".navbar--menu--bg-new").show();
    }

    // Open and close the toggle div
    $(this).toggleClass("open");
  });

  // Handle clicks on .navbar--menu--bg-new
  $(".navbar--menu--bg-new").on("click", function () {
    // Trigger click on open dropdown toggle
    $(".navbar--dropdown-toggle-new.open").click();
  });
});
