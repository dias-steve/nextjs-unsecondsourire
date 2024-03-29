import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { convertEnglishToFrenchDay, formatDate } from '../../utils/dateTranslater.utils.js'
import SecondBtn from '../SecondBtn/SecondBtn'
import { slideAnimation } from './PostCard.animation.js'

import styles from './PostCard.module.scss'

const convertColorStyle = (colorText) =>{

    switch(colorText){
        case 'dark-blue':
            return styles.bg_blue_dark
        case 'light-blue':
            return styles.bg_blue_light

        default: 
            return styles.bg_blue_dark
    }

}

const DateDisplayer = ({rawDate}) =>{
   const newDate = new Date(rawDate).toDateString()
  
    const passed = parseInt(formatDate(new Date()).replaceAll("-", ""), 10) > parseInt(rawDate.replaceAll("-", ""), 10)

  
    return (
        <div className={[styles.date_global_container, passed ? styles.passed_date : " " ].join(" ")}>
         <span className={styles.date} dangerouslySetInnerHTML={{__html:convertEnglishToFrenchDay(newDate)}}/>
        </div>
    )
} 
export default function PostCard({data, color, gsap}) {
    const {title, thumbnail, link, date} = data;

    const cardBackRef = useRef(null);
    useEffect(() => {
        if(gsap){
            slideAnimation(gsap,cardBackRef);
        }

    },[]);

  return (
    <div className={styles.global_container}>
        <Link href={link}>
            <a>
            <div  className={styles.background_yellow}>
                <div ref={cardBackRef} className={styles.background}/>
                <div className={[styles.background_blue, color ? convertColorStyle(color) : styles.bg_blue_dark ].join(" ")}>
                    <div className={styles.image_container}>
                        <div className={styles.image_wrapper}>
                        { thumbnail?.url &&
                            <Image
                                src={thumbnail.url}
                                alt={thumbnail.alt}
                                className= {styles.image}
                                objectFit={'cover'}
                                layout="fill"
                                priority
                            />
                        }
                        </div>
                    </div>
                    
                    <h3 className={styles.title} dangerouslySetInnerHTML={{__html:title}}/> 
                    { date && date.event_date &&
                        <DateDisplayer rawDate={date.event_date}/>
                    }
                    <div className={styles.btn_wrapper}>
                    <SecondBtn
                        label={'Voir plus'}
                        color={ color =='light-blue'? 'black' :'white'}
                    />
                    </div>
                </div>
            </div>
            </a>
        </Link>
        
    </div>
  )
}
