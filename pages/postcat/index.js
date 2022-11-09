import React from 'react'
import BlocPostList from '../../components/HomePageComponents/BlocPostList/BlocPostList';
import styles from './ProductCat.module.scss'
export default function PostCat(props) {
  
  return (
    <div className={styles.global_container}>
      <BlocPostList  data = {{list_articles: props.postsData}}/>
    </div>
  )
}


  export async function getStaticProps() {
    const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/posts", {
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
    const postsData = await data.json();
  
  
    return {
      props: {
        postsData,
        generalSettings,
      },
      revalidate: 60, // rechargement toutes les 10s
    };
  }