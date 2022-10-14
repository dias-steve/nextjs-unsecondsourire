import React from 'react'
import styles from './BlocAbout.module.scss'
import SecondBtn from '../../SecondBtn/SecondBtn'
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

const MissionSection = ({data}) => {
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
            <div className={styles.btn_wrapper}>
                    <SecondBtn  
                            label={'Voir plus'}
                            link={'/'}
                            color={'black'}
                     />
                    
            </div>
            </div>
        </div>
    )
}


export default function BlocAbout({data}) {

    const {missions_list, slogan, image_down, image_up} = data;
 
  return (
    <div className={styles.global_container}>
        <div className={styles.mission_list_wrapper}>

     
            <div className={styles.mission_list}>

        
                {
                    Array.isArray(missions_list) &&
                    missions_list.map(mission => (
                        <MissionSection data={mission} key= {uuidv4()} />
                    ))
                }
            </div>
        </div>

        <div className={styles.slogan_container}>
            <div className={styles.image_up_container}>
               
                <div className={styles.image_wrapper}>
                { image_up?.url &&
                        <Image
                                src = {image_up.url}
                                alt={image_up.alt}
                                className={styles.image}
                                objectFit={'cover'}
                                layout="fill"
                            />
                }
                </div>

            </div>
            <div className={styles.slogan_wrapper}>
                <h2 className={styles.title_slogan} dangerouslySetInnerHTML={{__html:slogan}}/>
                <PrimaryBtn
                    label={"Decouvrir notre association"}
                />
            </div>
            <div className={styles.image_down_container}>
                <div className={styles.bg_image_wrapper}/>
                <div className={styles.image_wrapper}>
                    { image_down?.url &&
                        <Image
                                src = {image_down.url}
                                alt={image_down.alt}
                                className={styles.image}
                                objectFit={'cover'}
                                layout="fill"
                            />
                }
                </div>

            </div>
        </div>
    </div>
  )
}