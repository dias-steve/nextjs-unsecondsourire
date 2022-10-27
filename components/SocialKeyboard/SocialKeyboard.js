import React from 'react';
import styles from './SocialKeyboard.module.scss';
import Link from 'next/link';


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
export default function SocialKeyboard({PostURL}) {
  return (
    <div className={styles.global_content}>
        <SocialBtn
            src={'/share.svg'}
            link={'https://www.google.com'}
        />
        <SocialBtn
            src={'/share.svg'}
            link={'https://www.google.com'}
        />
    </div>
  )
}
