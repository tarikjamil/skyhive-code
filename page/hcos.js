// slider success stories
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider2", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: "24rem",
    drag: false,
    arrows: false,
    pagination: false,
    breakpoints: {
      991: {
        // Tablet
        gap: "24rem",
        drag: true,
      },
    },
  });
  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider-resources", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: "24rem",
    drag: false,
    arrows: false,
    pagination: false,
    breakpoints: {
      991: {
        // Tablet
        gap: "24rem",
        drag: true,
      },
    },
  });
  splide.mount();
});

ScrollTrigger.matchMedia({
  "(min-width: 992px)": function () {
    gsap.from(".flex--24gap.is--first", {
      y: "-100rem",
      scrollTrigger: {
        trigger: ".section.is--hcos-parallax",
        start: "top bottom", // When the top of the trigger hits the bottom of the viewport
        end: "bottom top", // When the bottom of the trigger hits the top of the viewport
        scrub: true,
      },
      y: "100rem",
    });

    gsap.from(".flex--24gap.is--second", {
      y: "100rem",
      scrollTrigger: {
        trigger: ".section.is--hcos-parallax",
        start: "top bottom", // When the top of the trigger hits the bottom of the viewport
        end: "bottom top", // When the bottom of the trigger hits the top of the viewport
        scrub: true,
      },
      y: "-100rem",
    });
  },
});

// PAGE COLOR POWER-UP
window.addEventListener("DOMContentLoaded", (event) => {
  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  }
  // pagecolor trigger
  $("[tr-pagecolor-element='trigger']").each(function (index) {
    // elements
    let triggerEl = $(this),
      targetEl = $(".body--new");
    // settings
    let classSetting = attr(
      "after-hero-body",
      triggerEl.attr("tr-pagecolor-class")
    );
    // result
    ScrollTrigger.create({
      trigger: triggerEl,
      start: "top center",
      end: "bottom center",
      onToggle: ({ self, isActive }) => {
        if (isActive) {
          targetEl.addClass(classSetting);
        } else {
          targetEl.removeClass(classSetting);
        }
      },
    });
  });
});

const sketch = (p) => {
  let ball1;
  let ball2;

  p.setup = () => {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    // Here we are setting the parent of the canvas
    canvas.parent(".img--100.is--feature2");

    ball1 = new Ball(p.width / 2, p.height / 2, 50);
    ball2 = new Ball(p.width / 2 + 200, p.height / 2, 50);
  };

  p.draw = () => {
    p.background(220);

    let distance = p.dist(ball1.x, ball1.y, ball2.x, ball2.y);

    if (distance < ball1.r + ball2.r) {
      for (let i = 0; i <= ball1.r; i++) {
        let inter = p.map(i, 0, ball1.r, 1, 0.5);
        let c = p.lerpColor(
          p.color(255, 255, 255, 255 * inter),
          p.color(0, 0, 0, 255 * inter),
          inter
        );
        p.stroke(c);
        let rad = ball1.r * (1 - inter);
        p.ellipse(ball1.x, ball1.y, rad * 2);
      }
      for (let i = 0; i <= ball2.r; i++) {
        let inter = p.map(i, 0, ball2.r, 1, 0.5);
        let c = p.lerpColor(
          p.color(255, 255, 255, 255 * inter),
          p.color(0, 0, 0, 255 * inter),
          inter
        );
        p.stroke(c);
        let rad = ball2.r * (1 - inter);
        p.ellipse(ball2.x, ball2.y, rad * 2);
      }
    } else {
      ball1.show();
      ball2.show();
    }
  };

  class Ball {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
    }

    show() {
      p.fill(255);
      p.stroke(0);
      p.ellipse(this.x, this.y, this.r * 2);
    }
  }
};

new p5(sketch);
