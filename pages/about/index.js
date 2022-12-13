import React from 'react'
import HeroBlocAbout from '../../components/AboutComponents/HeroBlocAbout/HeroBlocAbout';
import ParagraphBlocAbout from '../../components/AboutComponents/ParagraphBlocAbout/ParagraphBlocAbout';
import styles from './About.module.scss';
export default function index(props) {
    const {bloc_hero} = props.aboutData;



  return (
    <div className={styles.global_container}>
        <div className={styles.global_content}>
            <HeroBlocAbout data={bloc_hero}/>
            <ParagraphBlocAbout data={bloc_hero}/>

        </div>

    </div>
  )
}

export async function getStaticProps() {
    const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/aboutpage", {
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
    const aboutData = await data.json();
  
  
    return {
      props: {
        aboutData,
        generalSettings,
      },
      revalidate: 60, // rechargement toutes les 10s
    };
  }
