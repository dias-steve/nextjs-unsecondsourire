export const bubbleAnimation = (gsap, imageRef) => {
    const elImage = imageRef.current;
    gsap.timeline(       
      {scrollTrigger:{
        trigger: elImage,
        start: "top 20%",
        end: "100% 0%",
        toggleActions: "restart none reverse none",
   
        scrub: 1,
    }}).fromTo( elImage,
      {
     
        rotate:'0deg',
        scale: 1

      },{
    
        rotate:'-50deg',
        scale: 0.5
 }

    )
}

export const bandAnimation = (gsap, objectRef) => {
    const elObject = objectRef.current;
    gsap.timeline(       
      {scrollTrigger:{
        trigger: elObject,
        start: "top 100%",
        end: "100% 0%",
        toggleActions: "restart none reverse none",
        markers: true,
        scrub: 1,
    }}).fromTo( elObject,
      {
        x:"-20%",
 
   

      },{
        x:0,
    

 }

    )
}
