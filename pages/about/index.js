import React from 'react'
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


import HeroBlocAbout from '../../components/AboutComponents/HeroBlocAbout/HeroBlocAbout';
import ParagraphBlocAbout from '../../components/AboutComponents/ParagraphBlocAbout/ParagraphBlocAbout';
import BlocManager from '../../components/BlocManager/BlocManager';
import BlocAbout from '../../components/HomePageComponents/BlocAbout/BlocAbout';
import BlocMembership from '../../components/HomePageComponents/BlocMembership/BlocMembership';
import LogoBand from '../../components/LogoBand/LogoBand';
import styles from './About.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { initializePage } from '../../utils/global.utils';

gsap.registerPlugin(ScrollTrigger);
export default function index(props) {
    const {
      bloc_hero,
      bloc_list_befor_aboutsec,
      bloc_list_after_aboutser,
      bloc_aboutsec,
      bloc_member
    } = props.aboutData;

    const dispatch = useDispatch();
    initializePage(dispatch, props.generalSettings);


  return (
    <div className={styles.global_container}>
        <div className={styles.global_content}>
            <HeroBlocAbout data={bloc_hero}/>-
            <BlocManager contentList={bloc_list_befor_aboutsec} />
            <BlocAbout data={bloc_aboutsec} notShowBtn={true} notShowLink={true} />
            <BlocManager contentList={bloc_list_after_aboutser} />
            <LogoBand gsap={gsap} />
            <BlocMembership data={bloc_member} color={'blue'} />
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
