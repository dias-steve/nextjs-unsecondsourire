import Link from 'next/link';
import React from 'react';
import styles from './SubMenu.module.scss';

const Btn = ({label, link}) => {
    return (
        <Link href={link}>
            <a className={styles.btn_menu}>
                {label}
            </a>
        </Link>
    )
}
export default function SubMenu() {
  return (
    <div className={styles.global_container}>
        <div className={styles.global_content_wrapper}>
        <div className={styles.btn_list_wrapper}>
            <Btn label ='Accueil' link='/'/>
            <Btn label ='Nos Actions' link='/actioncat'/>
            <Btn label ='Nos Actualités' link='/actualite'/>
            <Btn label ='Devenir Membre' link='/member'/>
            <Btn label ='Faire un don' link='/'/>
            <Btn label ='Nous contacter' link='/contact'/>
        </div>
        </div>
    </div>
  )
}
