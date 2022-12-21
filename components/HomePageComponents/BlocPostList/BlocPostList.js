import React from 'react';
import PostCard from '../../PostCard/PostCard';
import SecondBtn from '../../SecondBtn/SecondBtn';
import styles from './BlocPostList.module.scss';
import { v4 as uuidv4 } from 'uuid';
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';

export default function BlocPostList({data, title, link, cardColor, labelBtn, labelPrimaryBtn, linkPrimaryBtn, colorPrimaryBtn, colorSecondaryBtn, gsap, colorBackgroundPink}) {
    const { list_articles } = data;
    return (
        <div className={[styles.global_container, colorBackgroundPink ? styles.pink_bg : " "].join(" ")}>
            <div className={styles.content_container}>
            { 
                <div className={styles.header_bloc}>

                    <h2 className={styles.title} dangerouslySetInnerHTML={{__html:title}}/>
                    { link && labelBtn &&
                    
                        <SecondBtn  
                            label={labelBtn}
                            link={link}
                            color={'black'} />
                    }
                
                </div>
            }
                <div className={styles.body_bloc}>
                { list_articles && Array.isArray(list_articles) && list_articles.length > 0 ?
                    <div className={[styles.list_post_container, list_articles.length > 3 ? styles.biglist : "" ].join(" ")}>
                        
                        {
                            list_articles.map(article => (
                                <div className = {styles.postcard_wrapper}  key= {uuidv4()} >
                                    <PostCard gsap={gsap} data={article} color={cardColor} />
                                </div>
                            ))
                        }
                    
                    </div>:
                    <div className={styles.msg_empthy_list}><span>Aucun résultat</span></div>
                }

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
