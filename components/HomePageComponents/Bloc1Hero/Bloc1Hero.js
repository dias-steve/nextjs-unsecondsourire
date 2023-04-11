import React, { useEffect, useRef } from 'react'
import styles from './Bloc1Hero.module.scss';
import globalStyles from '../../../styles/globalsSettings.module.scss'
import Image from 'next/image';
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';
import SecondBtn from '../../SecondBtn/SecondBtn';
import { v4 as uuidv4 } from 'uuid';
import { bandAnimation, bubbleAnimation } from './Bloc1Hero.animations';



const GenerateImages = ({nbImage, srcImage, altImage}) => {
    const imagesList = []
  
    for (let i = 0; i < nbImage; i++) {
        imagesList.push({src: srcImage, alt: altImage})
    }
    
    return (
        <>
            

            {
            imagesList.map(image => (
               
                <img
                src={image.src}
                alt={image.alt}
                className={styles.sigle}
                key= {uuidv4()} 
         
            />

            ))
            }
        </>
    )
}

export default function Bloc1Hero({data, gsap}) {
    const { title, description, thumbnail} = data;
    /** Annimation 1 */
    const bandRef = useRef(null);
    const imageRef = useRef(null);
  
    useEffect(() => {
            bubbleAnimation(gsap, imageRef)
      }, [])


   
    

  return (
    <div className={styles.global_container}>
      <div className={styles.content_wrapper}>
        <div className={styles.left_container}>
            <h1 className={styles.title} dangerouslySetInnerHTML={{__html: title}}/>
            <p className={styles.description}>{description}</p>
            <div className={styles.btn_action_wrapper}>
                <div className={[styles.single_btn_wrapper, styles.btn_primary_wrapper].join(" ")}>   
                    <PrimaryBtn 
                    label={'Faire un don'}
                    link={'/'}
                    color={'yellow'}
                    />
                </div>
                <div className={[styles.single_btn_wrapper, styles.btn_second_wrapper].join(" ")}>  
                    <SecondBtn
                        label={'En savoir plus'}
                        link={'/'}
                        color={'black'}
                        
                
                    />
                </div>
            </div>
        </div>
        <div className={styles.right_container}>
            {thumbnail?.url &&
            <>
                <div className={styles.flor}>
                <img
                src={'/flower-fill.svg'}
                alt={'fleur'}
                className={styles.flower_svg}
                key= {uuidv4()} 
         
            />
                </div>
                <div ref= {imageRef} className={styles.image_wrapper}>
                    <Image
                        src = {thumbnail.url}
                        alt={thumbnail.alt}
                        className={styles.image}
                        objectFit={'cover'}
                        layout="fill"
                    />

                </div>
            </>
            }
        </div>

      </div>

    </div>
  )
}
