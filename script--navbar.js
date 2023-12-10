$(document).ready(function () {
  // navbar dropdown --------------------- //
  $(".navbar--dropdown-toggle-new").on("click", function () {
    // Close other accordions and remove class from navbar when opening a new one
    if (!$(this).hasClass("open")) {
      $(".navbar--dropdown-toggle-new.open").click();
      $(".navbar").removeClass("dropdown-active"); // Remove class when other dropdown is closed
    }

    let sibling = $(this).siblings(".navbar--dropdown-list-new");
    let screenWidth = $(window).width();
    let animationDuration = 1;

    if ($(this).hasClass("open")) {
      // Close the content div if already open
      if (screenWidth <= 991) {
        sibling.css("display", "none");
      } else {
        sibling.animate({ height: "0px" }, animationDuration);
      }

      $(".navbar--menu--bg-new").hide();
      $(".navbar").removeClass("dropdown-active"); // Remove class when this dropdown is closed
    } else {
      // Open the content div if already closed
      if (screenWidth <= 991) {
        sibling.css("display", "flex");
      } else {
        sibling.css("height", "auto");
        let autoHeight = sibling.height();
        sibling.css("height", "0px");
        sibling.animate({ height: autoHeight }, animationDuration, () => {
          sibling.css("height", "auto");
        });
      }

      $(".navbar--menu--bg-new").show();
      $(".navbar").addClass("dropdown-active"); // Add class when this dropdown is opened
    }

    $(this).toggleClass("open");
  });

  // Handle clicks on .navbar--menu--bg-new
  $(".navbar--menu--bg-new").on("click", function () {
    $(".navbar--dropdown-toggle-new.open").click();
    $(".navbar").removeClass("dropdown-active"); // Remove class when background is clicked
  });
});
