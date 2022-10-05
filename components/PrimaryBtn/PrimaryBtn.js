import React from "react";
import styles from "./PrimaryBtn.module.scss";
import Link from "next/link";
import Image from "next/image";
import Heartsvg from '../../public/heart-black.svg'

const convertColorStyle = (colorText) =>{

    switch(colorText){
        case 'yellow':
            return styles.btn_yellow
        case 'blue':
            return styles.btn_blue

        default: 
            return styles.btn_yellow
    }

}

export default function PrimaryBtn({ label, link, color, onClick, noHeart, notActived }) {
  return (
    <>
  
      {link ? (
        <Link href={link}>
          <a>
            <button
              className={styles.btn_container}
            >
              
              <span dangerouslySetInnerHTML={{ __html: label }} />
              {!noHeart && 
                <div className={styles.wrapper_svg_heart}>
     
                </div>
            }
            </button>
          </a>
        </Link>
      ) : (
        <button className={[styles.btn_container, notActived ? styles.notActived : styles.actived, color ? convertColorStyle(color) : styles.btn_yellow].join(" ")} onClick={!notActived ? (e) => onClick(e) : () =>{}}>
      
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {!noHeart && 
          <div className={styles.wrapper_svg_heart}>
            <svg width="90%" height="100%" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2C4.239 2 2 4.216 2 6.95C2 9.157 2.875 14.395 11.488 19.69C11.6423 19.7839 11.8194 19.8335 12 19.8335C12.1806 19.8335 12.3577 19.7839 12.512 19.69C21.125 14.395 22 9.157 22 6.95C22 4.216 19.761 2 17 2C14.239 2 12 5 12 5C12 5 9.761 2 7 2Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        }
        </button>
          
      )}
    </>
  );
}
