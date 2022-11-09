import React from 'react';
import TokenBtnCatList from '../../TokenBtnCatList/TokenBtnCatList';
import styles from './BlocCatList.module.scss';

export default function BlocCatList({data}) {
const {list_articlecat} = data;
  return (
    <div className={styles.global_conatiner}>
        <div className={styles.global_content}>
            <h2 className={styles.title}>Toutes les catégories</h2>
            <TokenBtnCatList listCat={ list_articlecat}/>
        </div>
    </div>
  )
}
