import React from 'react';
import PostCard from '../../PostCard/PostCard';
import SecondBtn from '../../SecondBtn/SecondBtn';
import styles from './BlocPostList.module.scss';
import { v4 as uuidv4 } from 'uuid';
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';

export default function BlocPostList({data, title, link, cardColor, labelBtn, labelPrimaryBtn, linkPrimaryBtn, colorPrimaryBtn, colorSecondaryBtn}) {
    const { list_articles } = data;
    return (
        <div className={styles.global_container}>
            <div className={styles.content_container}>
                <div className={styles.header_bloc}>
                    <h2 className={styles.title}>{title}</h2>
             
                        <SecondBtn  
                            label={labelBtn}
                            link={link}
                            color={'black'} />
                
                </div>
                <div className={styles.body_bloc}>
                    <div className={styles.list_post_container}>
                        
                        {
                            list_articles.map(article => (
                                <PostCard key= {uuidv4()} data={article} color={cardColor} />
                            ))
                        }
                       
                    
                    </div>
                </div>

                        { linkPrimaryBtn &&
                        <div className={styles.primaryBtn_wrapper}>

                            <PrimaryBtn 
                                label={labelPrimaryBtn}
                                color={colorPrimaryBtn}
                                link={linkPrimaryBtn}
                            />
                        </div>
                        }

        
            </div>
    
        </div>
  )
}
