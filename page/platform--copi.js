//lottie animation
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lottie animation
  var animation = lottie.loadAnimation({
    container: document.querySelector(".lottie--platform"), // targeting the container
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "https://uploads-ssl.webflow.com/60a69b2a011f012edbe2cd9d/65698ce5d18bf3a35ff09967_Complete%20Animation.json", // path to your Lottie file
  });

  animation.addEventListener("DOMLoaded", function () {
    // Function to animate Lottie frames
    const animateFrames = (endFrame) => {
      gsap.to(animation, {
        frame: endFrame, // target frame
        duration: 2, // duration of 1 second

        onUpdate: () => animation.goToAndStop(animation.frame, true),
      });
    };

    // ScrollTrigger for position1
    ScrollTrigger.create({
      trigger: "#position1",
      start: "top bottom",
      end: "top top", // when the top of position1 hits the bottom of the viewport
      markers: true,
      onEnter: () => animateFrames(animation.totalFrames * 0.09),
      onEnterBack: () => animateFrames(0),
    });

    // ScrollTrigger for position2
    ScrollTrigger.create({
      trigger: "#position2",
      start: "top bottom",
      end: "top top",
      onEnter: () => animateFrames(animation.totalFrames * 0.28),
      onEnterBack: () => animateFrames(animation.totalFrames * 0.09),
    });

    // ScrollTrigger for position3
    ScrollTrigger.create({
      trigger: "#position3",
      start: "top bottom",
      end: "top top",
      onEnter: () => animateFrames(animation.totalFrames * 0.44),
      onEnterBack: () => animateFrames(animation.totalFrames * 0.28),
    });

    // ScrollTrigger for position4
    ScrollTrigger.create({
      trigger: "#position4",
      start: "top bottom",
      end: "top top",
      onEnter: () => animateFrames(animation.totalFrames * 0.49),
      onEnterBack: () => animateFrames(animation.totalFrames * 0.44),
    });

    // ScrollTrigger for position5
    ScrollTrigger.create({
      trigger: "#position5",
      start: "top bottom",
      end: "top top",
      onEnter: () => animateFrames(animation.totalFrames * 0.58),
      onEnterBack: () => animateFrames(animation.totalFrames * 0.49),
    });

    // ScrollTrigger for position6
    ScrollTrigger.create({
      trigger: "#position6",
      start: "top bottom",
      end: "top top",
      onEnter: () => animateFrames(animation.totalFrames * 0.73),
      onEnterBack: () => animateFrames(animation.totalFrames * 0.58),
    });

    // ScrollTrigger for position7
    ScrollTrigger.create({
      trigger: "#position7",
      start: "top bottom",
      end: "top top",
      onEnter: () => animateFrames(animation.totalFrames * 0.81),
      onEnterBack: () => animateFrames(animation.totalFrames * 0.73),
    });

    // ScrollTrigger for position8
    ScrollTrigger.create({
      trigger: "#position8",
      start: "top bottom",
      end: "top top",
      onEnter: () => animateFrames(animation.totalFrames * 0.87),
      onEnterBack: () => animateFrames(animation.totalFrames * 0.81),
    });

    // ScrollTrigger for position9
    ScrollTrigger.create({
      trigger: "#position9",
      start: "top bottom",
      end: "top top",
      onEnter: () => animateFrames(animation.totalFrames * 0.94),
      onEnterBack: () => animateFrames(animation.totalFrames * 0.87),
    });

    // ScrollTrigger for position10
    ScrollTrigger.create({
      trigger: "#position10",
      start: "top bottom",
      end: "top top",
      onEnter: () => animateFrames(animation.totalFrames * 1),
      onEnterBack: () => animateFrames(animation.totalFrames * 0.94),
    });
  });
});
