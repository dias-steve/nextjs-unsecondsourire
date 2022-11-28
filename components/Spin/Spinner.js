import React from 'react'
import styles from './spin-styles.module.scss'

export default function Spinner({blackCircle}) {

  return (
    <div className={styles.wrapper_spinner}>
        <div className={[styles.spin, blackCircle ? styles.spin_black : styles.spin_white].join(" ")}></div>
    </div>
   
  )
}
