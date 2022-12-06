import React from "react";
import Image from "next/image"
import styles from "./MemberPageSection.module.scss";
import MemberForm from "../MemberForm/MemberForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


export default function MemberPageSection({ content }) {
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
       
            <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}
                    scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
                }}
            >
            <div className={styles.wrapper_form}>
                <h1 className={styles.title}> Devenir Membre</h1>
                <p className={styles.message} dangerouslySetInnerHTML= {{__html: message}}/>
                <MemberForm action={'[DEMANDE INSCRIPTION MEMBRE]'} />
            </div>
            </GoogleReCaptchaProvider>

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
