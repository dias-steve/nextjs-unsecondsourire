import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import TokenBtnCatList from '../../TokenBtnCatList/TokenBtnCatList';
import styles from './BlocUne.module.scss'

const BigArticle = ({data}) => {
  const {link, title, excerpt, thumbnail, taxinomie } = data;
  return (
 
      <div className={styles.bigarticle_global_container}>
        <div className={styles.token_btn_wrapper}>
          <TokenBtnCatList listCat={taxinomie} />
        </div>

        <div className={styles.image_wrapper}>
        <Link href={link}>
        <a>
          {thumbnail?.url && 
            <Image
              src={thumbnail.url}
              alt ={thumbnail.alt}
              layout='fill'
              className={styles.image}
              objectFit={'cover'}
            />
          }
          </a>
          </Link>
        </div>
        <div className={styles.text_wrapper}>

        <Link href={link}>
        <a>
          <h2 dangerouslySetInnerHTML={{__html:title}} className={styles.title_bigarticle}/>
          <p dangerouslySetInnerHTML={{__html:excerpt}} className={styles.text_bigarticle}/>
          </a>
          </Link>
        </div>
      </div>

  )
}

const ListArticles = () => {
  return (
    <div className={styles.list} >
      list article
    </div>
  )
}
export default function BlocUne({data}) {
  const {article_une} = data;
  return (
    <div className={styles.global_container}>
        <div className={styles.global_content}>
          <div className={styles.left_bloc}>
            {article_une &&
              <BigArticle data={article_une}/>
            }
            
          </div>

          <div className={styles.right_bloc}> 
            <ListArticles />
          </div>
        </div>
    </div>
  )
}
