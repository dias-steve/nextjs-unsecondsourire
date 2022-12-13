import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import { initializePage } from '../utils/global.utils';
import { useDispatch, useSelector } from "react-redux";


import styles from '../styles/Home.module.scss'
import Bloc1Hero from '../components/HomePageComponents/Bloc1Hero/Bloc1Hero';
import BlocPostList from '../components/HomePageComponents/BlocPostList/BlocPostList';
import BlocAbout from '../components/HomePageComponents/BlocAbout/BlocAbout';
import BlocMembership from '../components/HomePageComponents/BlocMembership/BlocMembership';
import BlocSocial from '../components/HomePageComponents/BlocSocial/BlocSocial';


export default function Home(props) {
  const homeData = props.homeData
  const generalSettings = props.generalSettings
  const dispatch = useDispatch();

  /**
   * Initializing of the page
   */
  useEffect(() => {
    initializePage(dispatch);
  },[])

  return (
    <>
      <Head>
        <title>{homeData.seo.title_seo}</title>
        <meta name="description" content={homeData.seo.meta_description_seo}/>
      </Head>
      <div className={styles.container}>
        <Bloc1Hero data={homeData.bloc1}/>
        <BlocPostList 
          data={homeData.bloc2_list_post} 
          title={'Nos Actualités'}
          link={'./actualite'}
          labelBtn='Voir toutes nos actualités'
          cardColor={'dark-blue'}

        
        />
        <BlocAbout data= {homeData.bloc4_apropos}/>
        <BlocPostList 
          data={homeData.bloc5_list_action}
          title={'Nos Actions'} 
         
          cardColor={'light-blue'}
          linkPrimaryBtn={'/actioncat'}
          labelPrimaryBtn={'Voir toutes nos actions'}
          colorPrimaryBtn={'blue'}
          />
          <BlocMembership data={homeData.bloc6_membership} />
          <BlocSocial mediaList= {generalSettings.external_links.media_list} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/homepage", {
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
  const homeData = await data.json();


  return {
    props: {
      homeData,
      generalSettings,
    },
    revalidate: 60, // rechargement toutes les 10s
  };
}