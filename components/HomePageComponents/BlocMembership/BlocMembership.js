import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { bubbleSlideAnimation } from './BlocMembership.animation';
import styles from './BlocMembership.module.scss';

const BtnAction = ({title, description, link, heart}) => {
    return(
        <Link href={link}>
            <a>
                <div className={styles.global_container_btn}>
                    <div className={styles.left_container_btn}>
                        <div className={styles.image_icon_wrapper}>
                            <img
                                src={heart ? './heart-black.svg' : './sun.svg'}
                                alt={heart ? 'icone coeur': 'icone soleil'}
                                className={[styles.image_icon, heart ? styles.image_heart : styles.image_sun].join(" ")}
                            />
                        </div>

                    </div>
                    <div className={styles.right_container_btn}>
                        <h3 className={styles.title_btn}>{title}</h3>
                        <p className={styles.description_btn} dangerouslySetInnerHTML={{__html:description}}/>
                    </div>
                </div>
            </a>
        </Link>
    )
}
export default function BlocMembership({data, gsap}) {
   
    const {donation_description, member_description, image, donation_url } = data

    const imageRef = useRef(null)

    useEffect(() => {
        bubbleSlideAnimation(gsap, imageRef)
    },[])
             //dangerouslySetInnerHTML={{__html:title}}
  return (
    <div className={styles.global_container}>
        <div className={styles.global_content}>
            <div className={styles.left_container}>
                <div ref={imageRef} className={styles.image_wrapper}>
                    { image?.url &&
                    <Image
                          src = {image.url}
                          alt={image.alt}
                          className={styles.image}
                          objectFit={'cover'}
                          layout="fill"
                    />}
                </div>
            </div>
            <div className={styles.right_container}>
                <h2 className={styles.title}> Rejoignez-nous</h2>
       
                <div className={styles.btn_list_wrapper}>
                { member_description !== "" &&
                        <BtnAction 
                            title = "Devenir membre"
                            description = {donation_description}
                            link={'/member'}
                        />
                    }

                    { donation_url !== "" && donation_description !== "" &&
                        <BtnAction 
                            title = "Faire un don"
                            description = {donation_description}
                            link={donation_url}
                            heart = {true}

                        />
                    }


                </div>
            </div>
        </div>

    </div>
  )
}
