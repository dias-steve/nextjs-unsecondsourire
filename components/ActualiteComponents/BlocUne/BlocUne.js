import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import TokenBtnCatList from '../../TokenBtnCatList/TokenBtnCatList';
import styles from './BlocUne.module.scss';
import { v4 as uuidv4 } from 'uuid';

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

const ArticleBtn = ({data, nb}) =>{
  const {link, title, thumbnail} = data;
  return (
  <Link href={link}>
    <a>
    <div className={styles.global_container_article}>
      <span className={styles.nb_top}>{nb}</span>
      <div className={styles.image_wrapper_article}>
        {thumbnail?.url &&
          <Image
            src={thumbnail.url}
            alt ={thumbnail.alt}
            layout='fill'
            className={styles.image}
            objectFit={'cover'}
          />
        }
      </div>
      <div className={styles.article_text}>
        <h3 className={styles.article_title} dangerouslySetInnerHTML={{__html: title}}/>
      </div>
    </div>
    </a>
  </Link>
  )
}
const ListArticles = ({list}) => {
  let counter = 0;

  return (

    <div className={styles.list_article_global_container}>

   <h2 className={styles.list_article_title}> Les derniers articles</h2>
    <div className={styles.list} >
      {list && Array.isArray(list) &&
        list.map(article => {
          counter++;
          return(<ArticleBtn data={article} nb ={counter} key={uuidv4()}/>);
        })
      }
      
    </div>
    </div>
  )
}
export default function BlocUne({data}) {
  const {article_une, list_last_posts} = data;
  return (
    <div className={styles.global_container}>
        <div className={styles.global_content}>
          <div className={styles.left_bloc}>
            {article_une &&
              <BigArticle data={article_une}/>
            }
            
          </div>

          <div className={styles.right_bloc}> 
            <ListArticles list = {list_last_posts }/>
          </div>
        </div>
    </div>
  )
}
