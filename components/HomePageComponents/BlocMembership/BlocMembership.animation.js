export const bubbleSlideAnimation = (gsap, imageRef) => {
    const elImage = imageRef.current;
    gsap.timeline(       
      {scrollTrigger:{
        trigger: elImage,
        start: "top 100%",
        end: "100% 0%",
        toggleActions: "restart none reverse none",
        scrub: 1,
      
    }}).fromTo( elImage,
      {
     
    
        rotate:'0deg',
        scale: 0.5,
        x:'-10%',
        y:'10%'

      },{
        rotate:'-10deg',
        scale: 1,
        x:'10%',
        y:'-10%'

 }

    )
}