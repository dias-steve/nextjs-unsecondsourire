import React from 'react';
import styles from './HeroBlocAbout.module.scss';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
export default function HeroBlocAbout({data}) {
    const {image, title, paragraph} = data;

  return (
    <div className={styles.global_container}>
        <div className={styles.global_content}>
                <div className={styles.right_container}>
                {image?.url &&
                <>
                    <div className={styles.flor}>
                    <img
                    src={'/flower-fill.svg'}
                    alt={'fleur'}
                    className={styles.flower_svg}
                    key= {uuidv4()} 
            
                />
                    </div>
                    <div className={styles.image_wrapper}>
                        <Image
                            src = {image.url}
                            alt={image.alt}
                            className={styles.image}
                            objectFit={'cover'}
                            layout="fill"
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
