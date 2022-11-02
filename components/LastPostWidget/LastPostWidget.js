import Link from 'next/link';
import React from 'react';
import styles from './LastPostWidget.module.scss';


const PostBtn = ({data}) => {
    const {nb, data_post} = data;
    const { title, link } = data_post;
    return (
        <Link href= {link}>
        <a >
        <div className={styles.global_container_post_btn}>
            <span className={styles.title_nb}>{nb}</span> <h3 className={styles.title_post}>{title}</h3>
        </div>
        </a>
        </Link>
    )
}
export default function LastPostWidget({lastPostsList}) {
    let counter = 0;
  return (
    <>

    { lastPostsList && Array.isArray(lastPostsList) &&
    <div className={styles.global_container}>
        <h2 className={styles.title_widget}>Les derniers articles</h2>
        <div className={styles.list_post_wrapper}>
            { lastPostsList.map( post => {

                counter ++
                return (
                
                    <PostBtn data = {{nb: counter , data_post: post}}/>
                )
        })}
        </div>
    </div>
    }
    </>
  )
}
