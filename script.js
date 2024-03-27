let text;
function runSplit() {
  text = new SplitType("[animation=loading-split]", {
    types: "lines, words",
    lineClass: "overflow-hidden",
    wordClass: "loading-animation-split",
  });
}
runSplit();
let windowWidth = $(window).innerWidth();
function pageLoad() {
  let e = gsap.timeline();
  e.to(".main-wrapper", { opacity: 1, ease: "Quint.easeOut", duration: 0.5 }),
    e.add("loadingAnimationsStart"),
    e.from(
      "[animation=loading]",
      {
        y: "20rem",
        opacity: "0",
        stagger: { each: 0.1, from: "start" },
        ease: "Quint.easeOut",
        duration: 1,
      },
      "loadingAnimationsStart"
    ),
    e.from(
      "[animation=loading-reverse]",
      {
        y: "-20rem",
        opacity: "0",
        stagger: { each: 0.1, from: "start" },
        ease: "Quint.easeOut",
        duration: 1,
      },
      "loadingAnimationsStart"
    );
}
window.addEventListener("resize", function () {
  windowWidth !== $(window).innerWidth() &&
    ((windowWidth = $(window).innerWidth()), text.revert(), runSplit());
}),
  gsap.registerPlugin(ScrollTrigger),
  pageLoad(),
  $(document).ready(function () {
    var e = 0;
    $(window).scroll(function () {
      (e = $(window).scrollTop()) >= 50
        ? $(".navbar").addClass("is--scrolled")
        : e < 50 && $(".navbar").removeClass("is--scrolled");
    });
  }),
  $(".navbar--menu--bg").on("click", function () {
    $(".navbar--menu-close").click();
  }),
  $(".navbar--usecases-dropdown").on("click", function () {
    $(".navbar--usecases-dropdown").toggleClass("is--active"),
      $(".navbar--dropwdown-text-wrapper").toggleClass("is--active");
  }),
  document.addEventListener("DOMContentLoaded", function () {
    new Splide(".is--slider-products", {
      type: "slide",
      perPage: 1,
      perMove: 1,
      gap: "24rem",
      drag: !1,
      arrows: !1,
      pagination: !1,
      breakpoints: { 991: { gap: "24rem", drag: !0 } },
    }).mount();
  }),
  document.addEventListener("DOMContentLoaded", function () {
    new Splide(".is--testimonial-slider", {
      type: "slide",
      perPage: 1,
      perMove: 1,
      gap: "24rem",
      drag: !1,
      arrows: !1,
      pagination: !1,
      breakpoints: { 991: { gap: "24rem", drag: !0 } },
    }).mount();
  }),
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".is--resources-slider").forEach(function (e) {
      new Splide(e, {
        type: "slide",
        perPage: 1,
        perMove: 1,
        gap: "24rem",
        drag: !1,
        arrows: !1,
        pagination: !1,
        breakpoints: { 991: { gap: "24rem", drag: !0 } },
      }).mount();
    });
  });
const scrollSpeed = 50;
function updateScrollingSpeed() {
  document.querySelectorAll(".is--scrolling").forEach((e) => {
    let t = e.offsetWidth;
    e.style.setProperty("--scroll-width", `${t}px`),
      (e.style.animationDuration = `${t / 50}s`);
  });
}
function updateLanguageIndicator() {
  var e = window.location.hostname,
    t = document.getElementById("lang");
  e.startsWith("www.")
    ? (t.innerText = "En")
    : e.startsWith("ja.")
    ? (t.innerText = "Jp")
    : e.startsWith("kr.")
    ? (t.innerText = "Kr")
    : (t.innerText = "En");
}
function getSourceValue() {
  let e = new URLSearchParams(window.location.search);
  return e.get("source");
}
function setSourceFieldValue() {
  let e = getSourceValue();
  e && (document.getElementById("source").value = e);
}
updateScrollingSpeed(),
  window.addEventListener("resize", updateScrollingSpeed),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".navbar"),
      t = document.querySelectorAll(".navbar--dropdown-new"),
      n = null,
      a = (e) => {
        if (!e) return;
        let t = e.querySelector(".navbar--dropdown-list-new"),
          n = e.querySelector(".navbar--dropdown-icon");
        gsap.to(t, {
          opacity: 0,
          y: "20rem",
          duration: 0.3,
          ease: "smooth",
          onComplete() {
            t.style.display = "none";
          },
        }),
          gsap.to(n, { rotation: 0, duration: 0.3, ease: "smooth" });
      },
      o = () => {
        t.forEach((t) => {
          t.addEventListener("mouseenter", () => {
            e.classList.add("is--active");
            let o = t.querySelector(".navbar--dropdown-icon");
            n && n !== t && a(n), (n = t);
            let r = t.querySelector(".navbar--dropdown-list-new");
            (r.style.display = "flex"),
              gsap.to(r, { opacity: 1, y: 0, duration: 0.3, ease: "smooth" }),
              gsap.to(o, { rotation: 180, duration: 0.3, ease: "smooth" });
          }),
            t.addEventListener("mouseleave", (o) => {
              e.contains(o.relatedTarget) ||
                (a(t), (n = null), e.classList.remove("is--active"));
            });
        }),
          e.addEventListener("mouseleave", () => {
            n && (a(n), (n = null)), e.classList.remove("is--active");
          });
      },
      r = () => {
        t.forEach((e) => {
          e.removeEventListener("mouseenter", o),
            e.removeEventListener("mouseleave", o);
        }),
          e.removeEventListener("mouseleave", o),
          n && (a(n), (n = null));
      },
      i = () => {
        window.innerWidth >= 992 ? o() : r();
      };
    window.addEventListener("resize", i), i();
  }),
  $(".navbar--menu-close-new").on("click", function () {
    $(".navbar--goback").click();
  }),
  updateLanguageIndicator(),
  (window.onload = setSourceFieldValue);

// Function to get the 'source' parameter value from the URL
function getSourceValue() {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get("source");
}

// Function to append 'source' parameter to all internal links
function appendSourceToLinks() {
  const sourceValue = getSourceValue();
  // Only proceed if 'source' parameter is present
  if (sourceValue) {
    // Get all anchor tags on the page
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      // Assuming you want to modify only internal links
      // Check if the href attribute exists and is relative (not starting with http:// or https://)
      if (
        link.href &&
        !link.href.startsWith("http://") &&
        !link.href.startsWith("https://")
      ) {
        // Construct a new URL object based on the link's href
        const newUrl = new URL(link.href, window.location.origin);
        // Append or update the 'source' parameter
        newUrl.searchParams.set("source", sourceValue);
        // Set the modified href back to the link
        link.href = newUrl.href;
      }
    });
  }
}

// Run the function to modify the links when the document is fully loaded
document.addEventListener("DOMContentLoaded", appendSourceToLinks);
