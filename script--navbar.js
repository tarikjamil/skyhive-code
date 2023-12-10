$(document).ready(function () {
  function toggleDropdown() {
    let screenWidth = $(window).width();
    let animationDuration = 1;

    $(".navbar--dropdown-toggle-new").each(function () {
      let sibling = $(this).siblings(".navbar--dropdown-list-new");

      if ($(this).hasClass("open")) {
        // Close the content div if already open
        if (screenWidth <= 991) {
          sibling.css("display", "none");
        } else {
          sibling.animate({ height: "0px" }, animationDuration);
        }

        $(".navbar--menu--bg-new").hide();
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
      }
    });
  }

  // Handle click event
  $(".navbar--dropdown-toggle-new").on("click", function () {
    $(this).toggleClass("open");
    toggleDropdown();
  });

  // Handle window resize event
  $(window).on("resize", toggleDropdown);

  // Handle clicks on .navbar--menu--bg-new
  $(".navbar--menu--bg-new").on("click", function () {
    $(".navbar--dropdown-toggle-new.open").click();
  });
});
