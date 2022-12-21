export const slideAnimation = (gsap, objectRef) => {
  const elObject = objectRef.current;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: elObject,
        start: "top 100%",
        end: "100% 0%",
        toggleActions: "restart none reverse none",
        scrub: 0,
      },
    })
    .fromTo(
      elObject,
      {
        y: "-20%",
      },
      {
        y: "10%",
      }
    );
};
