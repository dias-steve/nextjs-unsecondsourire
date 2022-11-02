import React from 'react';
import styles from './SocialKeyboard.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router'


const URLS = {
    twitter: 'https://twitter.com/intent/tweet?url=',
    linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url=',
    facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
    
}


const SocialBtn = ({name, link, src, alt}) => {
     return (        
        <Link href={link}>
            <a>
                <div className={styles.btn_container}>
                    <img className={styles.img_logo}
                        src={src}
                        alt={alt}
                    />
                </div>
            </a>
        </Link>
    )
}
export default function SocialKeyboard({hostURL}) {
    const {asPath} = useRouter()
  return (
    <div className={styles.global_content}>
        <SocialBtn
            src={'/facebook.svg'}
            link={URLS.facebook+hostURL+asPath}
        />
        <SocialBtn
            src={'/linkedin.svg'}
            link={URLS.linkedin+hostURL+asPath}
        />
        <SocialBtn
            src={'/twitter.svg'}
            link={URLS.twitter+hostURL+asPath}
        />
    </div>
  )
}
