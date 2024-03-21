document.addEventListener("DOMContentLoaded", function () {
  var sectionType = document.querySelector(".gated--section-component-type");
  if (sectionType && sectionType.textContent.trim() === "speakers") {
    var richtextSection = document.querySelector(".richtext--gated-section");
    if (richtextSection) {
      // Add the gated--speakers-grid class
      richtextSection.classList.add("gated--speakers-grid");

      var items = [];
      var childElements = richtextSection.children;

      // Collect items to be wrapped
      for (var i = 0; i < childElements.length; i++) {
        var el = childElements[i];
        if (
          el.tagName === "FIGURE" ||
          el.tagName === "H3" ||
          el.tagName === "P"
        ) {
          items.push(el);
        }

        // When a set of elements to wrap is complete or at the end of children
        if (el.tagName === "P" || i === childElements.length - 1) {
          if (items.length > 0) {
            var wrapper = document.createElement("div");
            wrapper.className = "gated--speaker-item";

            // Move items to the wrapper
            items.forEach(function (item) {
              wrapper.appendChild(item.cloneNode(true));
            });

            // Insert the wrapper before the first item in the set
            richtextSection.insertBefore(wrapper, items[0]);

            // Remove the original items
            items.forEach(function (item) {
              richtextSection.removeChild(item);
            });

            // Reset items for the next set
            items = [];
          }
        }
      }
    }
  }
});
