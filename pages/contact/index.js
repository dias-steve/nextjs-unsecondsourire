import React,  {useState, useEffect} from 'react'
import { initializePage } from '../../utils/global.utils';
import { useDispatch, useSelector } from "react-redux";
import Head from 'next/head';

import styles from './contact.module.scss'
import MemberPageSection from '../../components/MemberPageSection/MemberPageSection';
import ContactPageSection from '../../components/ContactPageSection/ContactPageSection';
import Seo from '../../components/Seo/Seo';
export default function MemberPage(props) {

  const data = props.contactData;
  const {seo, content} = data;

  const generalSettings = props.generalSettings
  const dispatch = useDispatch();
  /**
   * Initializing of the page
   */
  useEffect(() => {
    initializePage(dispatch, generalSettings);
  },[])

  return (
    <>
  <Seo seoData={Seo} />
    <div className={styles.global_container}>
      <ContactPageSection content= {content} />
    </div>
    </>
  )
}


export async function getStaticProps() {
  const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/contactpage", {
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
  const contactData = await data.json();


  return {
    props: {
      contactData,
      generalSettings,
    },
    revalidate: 60, // rechargement toutes les 10s
  };
}