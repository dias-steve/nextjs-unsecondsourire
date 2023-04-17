import React, { useEffect, useRef } from 'react'
import styles from './BlocAbout.module.scss'
import SecondBtn from '../../SecondBtn/SecondBtn'
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { bubblePopAnimation, bubbleSlideAnimation } from './BlocAbout.animations';

const MissionSection = ({data, notShowLink}) => {
    const {title, description, thumbnail} = data;

    return (

        <div className={styles.global_container_mission}>
            <div className={styles.left_container}>
                <div className={styles.image_wrapper}>

                    <img 
                        className={styles.image_flower}
                        src={'/flower-fill.svg'}
                        alt={'fleur'}
                    />
                    <img 
                        className={styles.image_icon}
                        src={thumbnail.url}
                        alt={thumbnail.alt}
                    />

                </div>
            </div>
            <div className={styles.right_container}>
            <h2 className={styles.title_mission} dangerouslySetInnerHTML={{__html:title}}/>
            <p className={styles.decription_mission} dangerouslySetInnerHTML={{__html:description}}/>
            { /*!notShowLink &&
            <div className={styles.btn_wrapper}>
                    <SecondBtn  
                            label={'Voir plus'}
                            link={'/'}
                            color={'black'}
                     />
                    
            </div>
    */}
            </div>
        </div>
    )
}


export default function BlocAbout({data ,notShowBtn, notShowLink,gsap}) {

    const {missions_list, slogan, image_down, image_up} = data;
    const imageUpref = useRef();
    const imageDownref = useRef();
    useEffect(() => {
        bubblePopAnimation(gsap,imageUpref)
    },[])

    useEffect(() => {
        bubbleSlideAnimation(gsap, imageDownref)
    },[])

  return (
    <div className={styles.global_container}>
        <div className={styles.mission_list_wrapper}>

     
            <div className={styles.mission_list}>

        
                {
                    Array.isArray(missions_list) &&
                    missions_list.map(mission => (
                        <MissionSection data={mission} notShowLink={notShowLink} key= {uuidv4()} />
                    ))
                }
            </div>
        </div>

        <div className={styles.slogan_container}>
            <div className={styles.image_up_container}>
               
                <div ref={imageUpref} className={styles.image_wrapper}>
                { image_up?.url &&
                        <Image
                                src = {image_up.url}
                                alt={image_up.alt}
                                className={styles.image}
                                objectFit={'cover'}
                                layout="fill"
                                priority
                            />
                }
                </div>

            </div>
            <div className={styles.slogan_wrapper}>
                <h2 className={styles.title_slogan} dangerouslySetInnerHTML={{__html:slogan}}/>
                {!notShowBtn &&
                <PrimaryBtn
                    label={"Decouvrir notre association"}
                    link={'/about'}
                />}
            </div>
            <div className={styles.image_down_container}>
                <div className={styles.bg_image_wrapper}/>
                <div ref={imageDownref} className={styles.image_wrapper}>
                    { image_down?.url &&
                        <Image
                                src = {image_down.url}
                                alt={image_down.alt}
                                className={styles.image}
                                objectFit={'cover'}
                                layout="fill"
                                priority
                            />
                }
                </div>

            </div>
        </div>
    </div>
  )
}
