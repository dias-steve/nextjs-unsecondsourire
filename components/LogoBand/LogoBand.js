import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './LogoBand.module.scss';

const colorConverterStyle = (color) => {
    switch(color){
        case 'blue':
            return styles.blue_bg;
        case 'pink':
            return styles.pink_bg;
        default:
            return styles.blue_bg;
    }
}

const LogoGenerator = ({nb, src, alt,  classNameImg}) => {

    let result = <></>;
    for (let i = 0; i < nb; i++) {
        result =<>{result}
        <>   
        <span className={styles.round}/>       
        <img
            src={src}
            alt={alt}
            className={classNameImg}
            key= {uuidv4()} 
 
    /></></>
    }

    return result;
    
}

export default function LogoBand({color, gsap}) {

    const yellowBandRef = useRef(null);
    const blueBandRef = useRef(null);

    /** Annimation 1 */
    useEffect(() => {
      const elyellowBand = yellowBandRef.current;
      console.log(elyellowBand)
  
      gsap.timeline(       
        {scrollTrigger:{
          trigger: elyellowBand,
          start: "top 100%",
          end: "100% 0%",
          toggleActions: "restart none reverse none",
        
          scrub: 1,
      }}).fromTo( elyellowBand,
        {
          x:"-20%",
          rotate:'6deg'
  
        },{
          x:0,
          rotate:'-2deg'
   }
  
      ).to(elyellowBand,{
    
      }, '-=0.5')
    }, [])

    /**Anniamtion 2 */
    useEffect(() => {
        const elBlueBand = blueBandRef.current;
        console.log(elBlueBand)
    
        gsap.timeline(       
          {scrollTrigger:{
            trigger: elBlueBand,
            start: "top 100%",
            end: "100% 0%",
            toggleActions: "restart none reverse none",
            scrub: 1,
        }}).fromTo( elBlueBand,
          {
            x:"-20%",
            rotate:'-3deg'
    
          },{
            x:"-50%",
            rotate:'-2deg'
     }
    
        ).to(elBlueBand,{
      
        }, '-=0.5')
      }, [])

    
  return (
    <div className={[styles.global_container, colorConverterStyle(color)].join(" ")}>
        
        <div ref={yellowBandRef} className={[styles.band_wrapper, styles.yellow_band].join(" ")}>
            <LogoGenerator nb={20} src={'/sigle-s2.svg'} alt={'logo'} classNameImg={styles.sigle} />
        </div>

        <div  ref={blueBandRef} className={[styles.band_wrapper, styles.blue_band].join(" ")}>
            <LogoGenerator nb={20} src={'/sigle-s2.svg'} alt={'logo'} classNameImg={styles.sigle} />
        </div>
    </div>
  )
}
