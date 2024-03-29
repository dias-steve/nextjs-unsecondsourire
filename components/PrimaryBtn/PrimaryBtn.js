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

export default function PrimaryBtn({ label, link, color, onClick, noHeart, notActived, ...otherProps }) {
  return (
    <>
  
      {link ? (
        <Link href={link}>
          <a>
            <button
              className={[styles.btn_container, notActived ? styles.notActived : styles.actived, color ? convertColorStyle(color) : styles.btn_yellow].join(" ")}
              {...otherProps }
            >
              
              <span dangerouslySetInnerHTML={{ __html: label }} />
              {!noHeart && 
                <div className={styles.wrapper_svg_heart}>
                  <img src='/heart-black.svg'  />
                </div>
            }
            </button>
          </a>
        </Link>
      ) : (
        <button 
          className={[styles.btn_container, notActived ? styles.notActived : styles.actived, color ? convertColorStyle(color) : styles.btn_yellow].join(" ")} 
          onClick={!notActived ? (e) => onClick(e) : (e) =>{ e.preventDefault();}}
          {...otherProps }
          >
      
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {!noHeart && 
          <div className={styles.wrapper_svg_heart}>
            <img src='/heart-black.svg'  />
          </div>
        }
        </button>
          
      )}
    </>
  );
}
