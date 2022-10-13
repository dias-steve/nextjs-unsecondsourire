import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SecondBtn from '../SecondBtn/SecondBtn'
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
export default function PostCard({data, color}) {
    const {title, thumbnail, link} = data;
  return (
    <div className={styles.global_container}>
        <Link href={link}>
            <a>
            <div className={styles.background_yellow}>
                <div className={[styles.background_blue, color ? convertColorStyle(color) : styles.bg_blue_dark ].join(" ")}>
            
                    <div className={styles.image_wrapper}>
                    { thumbnail?.url &&
                        <Image
                            src={thumbnail.url}
                            alt={thumbnail.alt}
                            className= {styles.image}
                            objectFit={'cover'}
                            layout="fill"
                        />
                    }
                    </div>
                    
                    <h3 className={styles.title} dangerouslySetInnerHTML={{__html:title}}/> 
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
