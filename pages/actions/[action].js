import React, { useState, useEffect } from "react";
import styles from "./post.module.scss";
import Image from "next/image";
import Head from "next/head";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import TokenBtnCat from "../../components/TokenBtnCatList/TokenBtnCatList";
import TokenBtnCatList from "../../components/TokenBtnCatList/TokenBtnCatList";
import ContentPost from "../../components/ContentPost/ContentPost";
import SocialKeyboard from "../../components/SocialKeyboard/SocialKeyboard";
import BlocPostList from "../../components/HomePageComponents/BlocPostList/BlocPostList";

import { useDispatch, useSelector } from "react-redux";
import { initializePage } from "../../utils/global.utils";

import LastPostWidget from "../../components/LastPostWidget/LastPostWidget";
import ActionForm from "../../components/ActionForm/ActionForm";
import { convertEnglishToFrenchDay, formatDate } from "../../utils/dateTranslater.utils";
import Seo from "../../components/Seo/Seo";

const DateDisplayer = ({rawDate}) =>{
  const newDate = new Date(rawDate).toDateString()

  const passed = parseInt(formatDate(new Date()).replaceAll("-", ""), 10) > parseInt(rawDate.replaceAll("-", ""), 10)

 
   const word = passed ? "C&#39était le ":'Aura lieu le ' 
   return (
       <div className={[styles.date_global_container, passed ? styles.passed_date : " " ].join(" ")}>
        <span className={styles.date} dangerouslySetInnerHTML={{__html:word+convertEnglishToFrenchDay(newDate)}}/>
       </div>
   )
} 

export default function Actions(props) {
  const {
    title,
    content,
    thumbnail,
    taxinomie,
    author,
    date,
    related_posts,
    seo,
    last_posts_list,
    id,
  
  } = props.postData;
  const dispatch = useDispatch();
  const generalSettings = props.generalSettings;

  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;


  /**
   * Initializing of the page
   */
  useEffect(() => {
    initializePage(dispatch, generalSettings);
  }, []);


  return (
    <>
  <Seo seoData={seo} />
      <div className={styles.global_container}>
        <div className={styles.image_wrapper}>
          {thumbnail?.url && (
            <Image
              src={thumbnail.url}
              alt={thumbnail.alt}
              className={styles.image}
              objectFit={"cover"}
              layout="fill"
              priority
            />
          )}
        </div>

        <div className={styles.action_text_container}>
          <div className={styles.widget_column}>
            <div className={styles.form_widget_wrapper}>
              <GoogleReCaptchaProvider
                reCaptchaKey={SITE_KEY}
                scriptProps={{
                  async: false,
                  defer: false,
                  appendTo: "head",
                  nonce: undefined,
                }}
              >
                <ActionForm
                  action={"[Action id:" + id + " title:" + title + "]"}
                />
              </GoogleReCaptchaProvider>
            </div>
          </div>
          <div className={styles.content_wrapper}>
            <div className={styles.btn_taxinomie_wrapper}>
              <TokenBtnCatList listCat={taxinomie} />
            </div>
            <div className={styles.author_container}>
          
            </div>
            <DateDisplayer rawDate={date.event_date}/>
            <h1
              className={styles.post_title}
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <ContentPost content={content} />
          </div>
          <div className={styles.widget_column}>
            <div className={styles.social_widget_wrapper}>
              <SocialKeyboard hostURL={"https://www.unsecondsourire.fr"} />
            </div>
          </div>
        </div>

        {related_posts?.posts_list &&
          Array.isArray(related_posts.posts_list) &&
          related_posts.posts_list.length > 0 && (
            <div className={styles.post_list_wrapper}>
              <BlocPostList
                data={{
                  list_articles: related_posts.posts_list,
                }}
                link={related_posts.taxinomie.link}
                labelBtn={related_posts.taxinomie.name}
              />
            </div>
          )}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const id = context.params.action;
  const data = await fetch(
    process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/actions/" + id,
    {
      // Adding method type
      method: "GET",

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  const generalSettingsRaw = await fetch(
    process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/settings",
    {
      // Adding method type
      method: "GET",

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

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
    process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/actions"
  );

  const posts = await data.json();

  // on dit le chemin pour chaque articles
  const paths = posts.map((item) => ({
    params: { action: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
