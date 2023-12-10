$(document).ready(function () {
  // Navbar dropdown logic
  $(".navbar--dropdown-toggle-new").on("click", function () {
    let screenWidth = $(window).width();

    // Close other accordions when opening a new one
    if (!$(this).hasClass("open")) {
      $(".navbar--dropdown-toggle-new.open").click();
      if (screenWidth > 991) {
        $(".navbar").removeClass("dropdown-active"); // Remove class when another dropdown is closed, for larger screens
      }
    }

    let sibling = $(this).siblings(".navbar--dropdown-list-new");
    let animationDuration = 1;

    if ($(this).hasClass("open")) {
      // Close the content div if already open
      if (screenWidth <= 991) {
        sibling.css("display", "none");
      } else {
        sibling.animate({ height: "0px" }, animationDuration);
      }

      $(".navbar--menu--bg-new").hide();
      if (screenWidth > 991) {
        $(".navbar").removeClass("dropdown-active"); // Remove class when this dropdown is closed, for larger screens
      }
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
      if (screenWidth > 991) {
        $(".navbar").addClass("dropdown-active"); // Add class when this dropdown is opened, for larger screens
      }
    }

    $(this).toggleClass("open");
  });

  // Handle clicks on .navbar--menu--bg-new
  $(".navbar--menu--bg-new").on("click", function () {
    $(".navbar--dropdown-toggle-new.open").click();
    if ($(window).width() > 991) {
      $(".navbar").removeClass("dropdown-active"); // Remove class when background is clicked, for larger screens
    }
  });

  // Handle clicks on .navbar--menu-toggle-new for screens below 991px
  $(".navbar--menu-toggle-new").on("click", function () {
    let screenWidth = $(window).width();

    if (screenWidth <= 991) {
      // Toggle 'dropdown-active' class on .navbar
      $(".navbar").toggleClass("dropdown-active");
    }
  });
});

$(".navbar--menu-close-new").on("click", function () {
  $(".navbar--menu-toggle-new").click();
  $(".navbar--goback-link-back-new").click();
});

$(".navbar--goback-link-back-new").on("click", function () {
  $(".navbar--dropdown-toggle-new.open").click();
});

function updateLanguageLinks() {
  var currentUrl = window.location.href;
  var basePath = currentUrl.split("/").slice(3).join("/"); // Adjust this based on your URL structure

  document.getElementById("linkEn").href = "https://www.skyhive.ai/" + basePath;
  document.getElementById("linkJp").href = "https://ja.skyhive.ai/" + basePath;
  document.getElementById("linkKr").href = "https://kr.skyhive.ai/" + basePath;
}

updateLanguageLinks();

function updateLanguageIndicator() {
  var hostname = window.location.hostname;
  var langDiv = document.getElementById("lang");

  if (hostname.startsWith("en.")) {
    langDiv.innerText = "En";
  } else if (hostname.startsWith("jp.")) {
    langDiv.innerText = "Jp";
  } else if (hostname.startsWith("kr.")) {
    langDiv.innerText = "Kr";
  } else {
    langDiv.innerText = "En"; // Default language, adjust as necessary
  }
}

updateLanguageIndicator();
