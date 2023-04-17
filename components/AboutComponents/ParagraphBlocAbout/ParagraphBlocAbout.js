import React, { useRef, useEffect } from 'react';
import styles from './ParagraphBlocAbout.module.scss';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { bubbleSlideAnimation } from './ParagraphBlocAbout.animations';
export default function ParagraphBlocAbout({data, gsap}) {
    
    const {image, title, paragraph, image_to_left} = data;
    const reverse = image_to_left ? true : false;

    const imageRef = useRef(null)

    useEffect(() => {
        bubbleSlideAnimation(gsap, imageRef)
    }, [])
  return (
    <div className={styles.global_container}>
        <div className={[styles.global_content, reverse ? styles.reverse_block : " "].join(" ")}>
                <div className={styles.right_container}>
                {image?.url &&
                <>
                    <div className={[styles.image_container, styles.disc].join(" ")}>
          

                    </div>
                    <div ref={imageRef} className={[styles.image_container, styles.image_wrapper].join(" ")}>
                        <Image
                            src = {image.url}
                            alt={image.alt}
                            className={styles.image}
                            objectFit={'cover'}
                            layout="fill"
                            priority
                        /> 

                    </div>


                </>
                }
            </div>
            <div className={styles.lef_container}>
                <h1 className={styles.title} dangerouslySetInnerHTML={{__html: title}}/>
                <div className={styles.description} dangerouslySetInnerHTML={{__html: paragraph}}/>
            </div>
        </div>
    </div>
  )
}
