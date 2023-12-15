gsap.registerPlugin(CSSRulePlugin);

const dropDowns = document.querySelectorAll(".navbar--dropdown-new");

dropDowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", function () {
    const list = this.querySelector(".navbar--dropdown-list-new");
    list.style.display = "flex";

    gsap.to(list, {
      duration: 0.5, // Adjust duration according to your needs
      opacity: 1,
      bottom: "0rem",
      ease: "power1.out", // You can choose different easing functions
    });
  });

  dropdown.addEventListener("mouseleave", function () {
    const list = this.querySelector(".navbar--dropdown-list-new");

    gsap.to(list, {
      duration: 0.5, // Adjust duration according to your needs
      opacity: 0,
      bottom: "20rem",
      ease: "power1.in",
      onComplete: function () {
        list.style.display = "none";
      },
    });
  });
});

// language switcher ---------------->
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
  } else if (hostname.startsWith("ja.")) {
    langDiv.innerText = "Jp";
  } else if (hostname.startsWith("kr.")) {
    langDiv.innerText = "Kr";
  } else {
    langDiv.innerText = "En"; // Default language, adjust as necessary
  }
}

updateLanguageIndicator();
