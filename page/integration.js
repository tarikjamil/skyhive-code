// On Page Load
function pageLoad() {
  let tl = gsap.timeline();

  tl.add("loadingAnimationsStart");

  tl.from(
    "[animation=loadingimg]",
    {
      y: "-20rem",
      opacity: "0",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
    },
    "loadingAnimationsStart"
  ); // <-- position parameter set to the label

  tl.from(
    "[animation=loadingfloor]",
    {
      opacity: "0",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
    },
    "loadingAnimationsStart"
  ); // <-- position parameter set to the label
}

pageLoad();
