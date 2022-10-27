import React from 'react'
import styles from './TokenBtnCatList.module.scss';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';


const BtnCategory = ({ data, color }) => {
  const {link, name} = data;
  return (
    <Link href={link}>
      <a>
        <div className={[styles.btn_global_container, color].join(" ")}>
          <h3 className={styles.btn_name}>{name}</h3>
        </div>
      </a>
    </Link>
  )
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const getRandomColorStyle = () =>{
  const colorNumber = getRndInteger(1,4)
  switch(colorNumber ){
      case 1:
          return styles.btn_yellow
      case 2:
          return styles.btn_blue
      case 3:
        return styles.btn_pink
      case 4:
        return styles.btn_green
      default: 
          return styles.btn_blue
  }

}
export default function TokenBtnCatList({listCat}) {

  return (
    <div className={styles.global_container}>
      <div className={styles.btn_list_wrapper}>
        {Array.isArray(listCat) &&
          
            listCat.map((taxinomie) => (<BtnCategory key={uuidv4()}  data={taxinomie} color={getRandomColorStyle()}/>))
          
        }

      </div>
    </div>
  )
}
