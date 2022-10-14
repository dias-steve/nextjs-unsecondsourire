import React from 'react'
import styles from './Bloc1Hero.module.scss';
import globalStyles from '../../../styles/globalsSettings.module.scss'
import Image from 'next/image';
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';
import SecondBtn from '../../SecondBtn/SecondBtn';
import { v4 as uuidv4 } from 'uuid';



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
                src="/sigle.svg"
                alt={image.alt}
                className={styles.sigle}
                key= {uuidv4()} 
         
            />

            ))
            }
        </>
    )
}
export default function Bloc1Hero({data}) {
    const { title, description, thumbnail} = data;

  return (
    <div className={styles.global_container}>
      <div className={styles.content_wrapper}>
        <div className={styles.left_container}>
            <h1 className={styles.title}> {title} </h1>
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
                <div className={styles.image_wrapper}>
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
      <div className={styles.logo_tracks}>
     

         
            <div className={styles.logo_list}>
                <GenerateImages
                nbImage={10}
           
                altImage='logo'
                    />
            </div>
            
      </div>
    </div>
  )
}
