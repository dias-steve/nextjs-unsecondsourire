import React from "react";
import styles from "./SecondBtn.module.scss";
import Link from "next/link";
import Image from "next/image";
import Heartsvg from '../../public/heart-black.svg'

const convertColorStyle = (colorText) =>{

    switch(colorText){
        case 'black':
            return styles.btn_black
        case 'white':
            return styles.btn_white

        default: 
            return styles.btn_black
    }

}

export default function SecondBtn({ label, link, color, noArrow, notActived, ...otherProps }) {
  return (
    <>
  
      {link ? (
        <Link href={link}>
          <a>
            <button
                className={[styles.btn_container, notActived ? styles.notActived : styles.actived, color ? convertColorStyle(color) : styles.btn_black].join(" ")}
              {...otherProps }
            >
              
              <span dangerouslySetInnerHTML={{ __html: label }} />
              {!noArrow && 
                <div className={styles.wrapper_svg_heart}>
                  <img src='./arrow.svg'  />
                </div>
            }
            </button>
          </a>
        </Link>
      ) : (
        <button 
          className={[styles.btn_container, notActived ? styles.notActived : styles.actived, color ? convertColorStyle(color) : styles.btn_black].join(" ")} 

          {...otherProps }
          >
      
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {!noArrow && 
          <div className={styles.wrapper_svg_heart}>
            <img src='./arrow.svg'  />
          </div>
        }
        </button>
          
      )}
    </>
  );
}
