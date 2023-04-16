import React from "react";
import Image from "next/image"
import styles from "./ContactPageSection.module.scss";
import MemberForm from "../MemberForm/MemberForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactList from "../ContactList/ContactList";


export default function ContactPageSection({ content }) {
    const {image_up, image_down, message } = content;
    const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;
    return(
        <div className={styles.global_container}>
           <div className={styles.image_up_container}>
               
               <div className={styles.image_wrapper}>
               { image_up?.url &&
                       <Image
                               src = {image_up.url}
                               alt={image_up.alt}
                               className={styles.image}
                               objectFit={'cover'}
                               layout="fill"
                           />
               }
               </div>

           </div>

            <div className={styles.wrapper_form}>
                <h1 className={styles.title}> Nous-Contacter </h1>
                <p className={styles.message} dangerouslySetInnerHTML= {{__html: message}}/>
                <ContactList content = {content}/>

            </div>

            <div className={styles.image_down_container}>
            <div className={styles.image_wrapper}>
               { image_down?.url &&
                       <Image
                               src = {image_down.url}
                               alt={image_down.alt}
                               className={styles.image}
                               objectFit={'cover'}
                               layout="fill"
                           />
               }
               </div>
               </div>
        </div>
    );
}
