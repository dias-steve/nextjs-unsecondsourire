import React from 'react';
import styles from './post.module.scss';
import Image from 'next/image'
import TokenBtnCat from '../../components/TokenBtnCatList/TokenBtnCatList';
import TokenBtnCatList from '../../components/TokenBtnCatList/TokenBtnCatList';
import ContentPost from '../../components/ContentPost/ContentPost';
import SocialKeyboard from '../../components/SocialKeyboard/SocialKeyboard';
export default function Post(props) {

  const {title, content,thumbnail, taxinomie, author, date } = props.postData;
  console.log(props.postData);
  return (
    <div className={styles.global_container}>

      <SocialKeyboard />
      <div className={styles.image_wrapper}>
        { thumbnail?.url && 
            <Image
              src={thumbnail.url}
              alt={thumbnail.alt}
              className= {styles.image}
              objectFit={'cover'}
              layout="fill"
            />
        }
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.btn_taxinomie_wrapper}>
          <TokenBtnCatList listCat={taxinomie} />
        </div>
        <div className={styles.author_container}><h3 className={styles.author_text}>{author} - {date}</h3></div>
        <h1 className={styles.post_title} dangerouslySetInnerHTML={{__html: title}}/>

        <ContentPost content={content} />
      </div>

    </div>
  )
}


export async function getStaticProps(context) {
    const id = context.params.post
    const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/posts/" +id, {
      // Adding method type
      method: "GET",

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    
    const generalSettingsRaw = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/settings", {
      // Adding method type
      method: "GET",
  
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  
    const generalSettings = await generalSettingsRaw.json();
    const postData = await data.json();

    return {
      props: {
        postData,
        generalSettings,
      },
      revalidate: 60, // rechargement toutes les 10s
    };
  }

  export async function getStaticPaths() {
    const data = await fetch(
      process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/posts"
    );
  
    const posts = await data.json();
    
    // on dit le chemin pour chaque articles
    const paths = posts.map((item) => ({
      params: { post: item.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }

