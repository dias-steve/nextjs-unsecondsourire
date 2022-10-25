import React from 'react';
import styles from './post.module.scss';
export default function Post(props) {

  const {title, content} = props.postData;
  console.log(props.postData);
  return (
    <div className={styles.global_container}>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{__html: content}}/>
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

