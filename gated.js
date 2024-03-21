document.addEventListener("DOMContentLoaded", function () {
  var sectionType = document.querySelector(".gated--section-component-type");
  if (sectionType && sectionType.textContent.trim() === "speakers") {
    var richtextSection = document.querySelector(".richtext--gated-section");
    if (richtextSection) {
      // Add the is--gated-speakers class
      richtextSection.classList.add("is--gated-speakers");

      var elements = Array.from(richtextSection.children);
      var wrapper = null;
      var speakerItems = []; // To hold all gated--speaker-item wrappers

      elements.forEach(function (el, index) {
        // Start a new wrapper if we're at a figure element
        if (el.tagName === "FIGURE") {
          // Finish the previous wrapper if it exists and push it to speakerItems
          if (wrapper) {
            speakerItems.push(wrapper);
          }

          // Start a new wrapper
          wrapper = document.createElement("div");
          wrapper.className = "gated--speaker-item";
        }

        // Add the current element to the wrapper if it exists
        if (wrapper) {
          wrapper.appendChild(el);
        }

        // If we're at the end of a grouping or at the last element, finish the current wrapper
        if ((el.tagName === "P" || index === elements.length - 1) && wrapper) {
          speakerItems.push(wrapper);
          wrapper = null; // Reset wrapper for the next group
        }
      });

      // Wrap all gated--speaker-item elements in a gated--speakers-grid
      var speakersGrid = document.createElement("div");
      speakersGrid.className = "gated--speakers-grid";
      speakerItems.forEach(function (item) {
        speakersGrid.appendChild(item);
      });
      richtextSection.appendChild(speakersGrid);

      // Calculate the number of .gated--speaker-item instances and adjust the class accordingly
      var speakerItemsCount = speakerItems.length;
      if (speakerItemsCount === 1) {
        speakersGrid.classList.add("is--1");
      } else if (speakerItemsCount === 3) {
        speakersGrid.classList.add("is--3");
      } else if (speakerItemsCount >= 5) {
        speakersGrid.classList.add("is--3");
      }
    }
  }

  // Additional functionality to check for .is--gated-content with .w-condition-invisible
  var gatedContent = document.querySelector(
    ".is--gated-content.w-condition-invisible"
  );
  if (gatedContent) {
    var paddedSection = document.querySelector(".is--144padding-top");
    if (paddedSection) {
      paddedSection.classList.remove("is--gated-gray");
    }
  }
});
