import React from 'react';
import styles from './BlocSocial.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

const MediaCard = ({data}) => {
    const {media, url, id} = data;
    return (
        <Link href={url}>
            <a>
            <div className={styles.global_container_mediacard}>
                <div className={styles.image_wrapper}>
                    <img 
                        src={'./flower-fill.svg'}
                        alt={'icon media '+media}
                        className={styles.bg_icon}
                        
                    />
                    <img 
                        src={'./'+media+'.svg'}
                        alt={'icon media '+media}
                        className={styles.icon_media}
                        
                    />
                </div>
                <h3 
                    className={styles.title_id}
                    dangerouslySetInnerHTML={{__html: id }}
                    />
            </div>
            </a>
        </Link>
    )
}

export default function BlocSocial({mediaList}) {
    console.log(mediaList)
    
  return (
    <div className={styles.global_container}>
        <div className={styles.content_container}>
            <h2 className={styles.title}>Suivez-Nous</h2>
            <div className={styles.list_media_wrapper_container}>
                <div className={styles.list_media_wrapper}>
                {Array.isArray(mediaList) && 
                    mediaList.map((media) =>{
                        if (media.url !== "" && media.id !== ""){
                            return (<MediaCard data={media} key={uuidv4()}/>)
                        }
                    
                    })
                }
                </div>
            </div>

        </div>

    </div>
  )
}
