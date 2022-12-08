import React from 'react';
import Head from "next/head";

import ContentPost from '../../components/ContentPost/ContentPost';

import styles from './Page.module.scss'

export default function Page(props) {
    
    const {title, content, seo} = props.pageData
  return (
    <>
    <Head>
        <title>{seo.title_seo}</title>
        <meta name="description" content={seo.meta_description_seo} />
    </Head>
    <div className= {styles.global_container}>
        <div className={styles.global_content}>
            <h1 className={styles.title}dangerouslySetInnerHTML={{__html: title}}/>
            <ContentPost content= {content}/>
        </div>
    </div>
    </>
  )
}

export async function getStaticProps(context) {
    const id = context.params.page;
    const data = await fetch(
      process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/pages/" + id,
      {
        // Adding method type
        method: "GET",
  
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  
  
    const generalSettingsRaw = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/settings", {
      // Adding method type
      method: "GET",
  
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

 
  

    const generalSettings = await generalSettingsRaw.json();
    const pageData = await data.json();

  
    return {
      props: {
        pageData,
        generalSettings
      },
      revalidate: 60, // rechargement toutes les 10s
    };
  }


export async function getStaticPaths() {
    const data = await fetch(
      process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/pages"
    );
  
    const pages = await data.json();
  
    // on dit le chemin pour chaque articles
    const paths = pages.map((item) => ({
      params: { page: item.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }