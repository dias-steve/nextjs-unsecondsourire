import React,  {useState, useEffect} from 'react'
import { initializePage } from '../../utils/global.utils';
import { useDispatch, useSelector } from "react-redux";
import Head from 'next/head';

import styles from './MemberPage.module.scss'
import MemberPageSection from '../../components/MemberPageSection/MemberPageSection';
export default function MemberPage(props) {

  const data = props.memberData;
  const {seo, content} = data;

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
      <title>{seo.title_seo}</title>
      <meta name="description" content={seo.meta_description_seo}/>
    </Head>
    <div className={styles.global_container}>
      <MemberPageSection content= {content} />
    </div>
    </>
  )
}


export async function getStaticProps() {
  const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/memberpage", {
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
  const memberData = await data.json();


  return {
    props: {
      memberData,
      generalSettings,
    },
    revalidate: 60, // rechargement toutes les 10s
  };
}