import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import { initializePage } from '../utils/global.utils';
import { useDispatch, useSelector } from "react-redux";


import styles from '../styles/Home.module.scss'


export default function Home(props) {
  const dispatch = useDispatch();
  /**
   * Initializing of the page
   */
  useEffect(() => {
    initializePage(dispatch);
  },[])


  return (
    <div className={styles.container}>

      <p> Home page </p>
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/homedata", {
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