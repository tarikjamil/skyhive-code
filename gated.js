document.addEventListener("DOMContentLoaded", function () {
  var sectionType = document.querySelector(".gated--section-component-type");
  if (sectionType && sectionType.textContent.trim() === "speakers") {
    var richtextSection = document.querySelector(".richtext--gated-section");
    if (richtextSection) {
      // Add the gated--speakers-grid class
      richtextSection.classList.add("gated--speakers-grid");

      var elements = Array.from(richtextSection.children);
      var wrapper = null;

      elements.forEach(function (el, index) {
        // Start a new wrapper if we're at a figure element
        if (el.tagName === "FIGURE") {
          // Finish the previous wrapper if it exists
          if (wrapper) {
            richtextSection.insertBefore(wrapper, el);
          }

          // Start a new wrapper
          wrapper = document.createElement("div");
          wrapper.className = "gated--speaker-item";
        }

        // Add the current element to the wrapper if it exists
        if (wrapper) {
          wrapper.appendChild(el);
        }

        // If we're at the end of a grouping or at the last element, append the wrapper to richtextSection
        if ((el.tagName === "P" || index === elements.length - 1) && wrapper) {
          richtextSection.appendChild(wrapper);
          wrapper = null; // Reset wrapper for the next group
        }
      });

      // Calculate the number of .gated--speaker-item instances and adjust the class accordingly
      var speakerItemsCount = richtextSection.querySelectorAll(
        ".gated--speaker-item"
      ).length;
      if (speakerItemsCount === 1) {
        richtextSection.classList.add("is--1");
      } else if (speakerItemsCount === 3) {
        richtextSection.classList.add("is--3");
      } else if (speakerItemsCount >= 5) {
        richtextSection.classList.add("is--5");
      }
    }
  }
});
