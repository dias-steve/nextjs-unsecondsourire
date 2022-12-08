import React from 'react'
import BlocUne from '../../components/ActualiteComponents/BlocUne/BlocUne'
import ContentBlocManager from '../../components/ActualiteComponents/ContentBlocManager/ContentBlocManager';
import Head from 'next/head';

import styles from './Actualite.module.scss'
import { v4 as uuidv4 } from 'uuid';
export default function Actualite(props) {
  const data = props.oneArticleData;
  const {content, seo} = data;
  console.log(data)
  return (
    <>
    <Head>
      <title>{seo.title_seo}</title>
      <meta name="description" content={seo.meta_description_seo}/>
    </Head>
    <div className={styles.global_container}>
      { content && Array.isArray(content) &&
        content.map(bloc => (<ContentBlocManager key={uuidv4()} data={bloc} />))
      }
    </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/one_page_article", {
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
  const oneArticleData = await data.json();


  return {
    props: {
      oneArticleData,
      generalSettings,
    },
    revalidate: 60, // rechargement toutes les 10s
  };
}